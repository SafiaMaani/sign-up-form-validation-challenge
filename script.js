const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')

const error1 = document.getElementById('error1')
const error2 = document.getElementById('error2')
const error3 = document.getElementById('error3')
const error4 = document.getElementById('error4')

form.addEventListener('submit', function(e) {

    //FIRSTNAME
    if (firstName.value.trim() === '') {
        firstName.style.borderColor = 'red'
        error1.style.color = 'red'
        error1.textContent = 'Please enter your firstname'
        e.preventDefault()
        return false
    } else {
        firstName.style.borderColor = 'green'
        error1.style.color = 'green'
        error1.textContent = 'You have entered a valid firstname'
    }

    //LASTNAME
    if (lastName.value.trim() === '') {
        lastName.style.borderColor = 'red'
        error2.style.color = 'red'
        error2.textContent = 'Please enter your lastname'
        e.preventDefault()
        return false
    } else {
        lastName.style.borderColor = 'green'
        error2.style.color = 'green'
        error2.textContent = 'You have entered a valid lastname'
    }

    //EMAIL
    if (email.value.trim() === '') {
        email.style.borderColor = 'red'
        error3.style.color = 'red'
        error3.textContent = 'Please enter your email'
        e.preventDefault()
        return false
    } else {
        email.style.borderColor = 'green'
        error3.style.color = 'green'
        error3.style.color = 'green'
        error3.textContent = 'You have entered a valid email'
    }

    //PASSWORD
    if (password.value.trim() === '') {
        password.style.borderColor = 'red'
        error4.style.color = 'red'
        error4.textContent = 'Please enter a password'
        e.preventDefault()
        return false
    } else {
        password.style.borderColor = 'green'
        error4.style.color = 'green'
        error4.textContent = 'You have entered a valid password'
    }
})