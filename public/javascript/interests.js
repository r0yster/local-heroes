function testInsert(event) {
    event.preventDefault();
    const selectedInterest = document.querySelector('#username-signup').value.trim();

    console.log(selectedInterest);
}


document.addEventListener('.signup-form', testInsert);