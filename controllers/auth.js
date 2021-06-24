
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const db = mysql.createConnection({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PW,
	database: process.env.DATABASE,
});

exports.register = (req, res) => {
    console.log(req.body);

    const { firstName, lastName, email, password, passwordConfirm } = req.body;


    //one person with one email should be able to register one time -- future sequelize relationships to be made here
    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) =>{
        if(error) {
            console.log(error)
        }

        if ( results.length > 0){
            return res.render('register', {
                message: 'The email is already in use.'
            })
        }else if (password !== passwordConfirm){
            return res.render('register', {
                message: 'Passwords do not match.'
            })
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword)

        //name:name first name is the db column name
        db.query('INSERT INTO users SET ?', {first: firstName, last:lastName, email: email, password: hashedPassword}, (error, results) => {
                if(error) {
                    console.log(error)
                }
                else {
                    return res.render('register', {
                        message: 'User registered'
                    })
                }
        })

    })

    
}

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).render('login', {
                message: 'Please provide an email and password.'
            })
        }

        db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
            console.log(results)
                if ( !results || (!await bcrypt.compare(password, results[0].password))) {
                        res.status(401).render('login', {
                            message: 'The email or password is incorrect'
                        })
                }

                const id = results[0].id;

                const token = jwt.sign({id: id}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                })

                console.log(`The token is ${token}`)

                const cookieOptions ={
                    expires: new Date (
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }

                res.cookie('jwt', token, cookieOptions);

                //redirect here
                res.status(200).redirect('/userOptions')
        })

    }
    catch(error) {
        console.log(error)
    }

}