const name = document.getElementById('name')
const email = document.getElementById('email')
const country = document.getElementById('country')
const zipCode = document.getElementById('zip-code')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')
const form = document.getElementById('form')


form.addEventListener('submit', (event) => {
    let messages = [];

    if(name.value === '' || name.value == null) {
        alert('Name field is empty')
    }

    if(email.value ==='' || email.value == null) {
        alert('Email field is empty')
    }

    if(country.value ==='' || country.value == null) {
        alert('Country field is empty')
    }

    if(zipCode.value ==='' || zipCode.value == null) {
        alert('Zip Code field is empty')
    }

    if(password.value ==='' || password.value == null || password.value.length <= 8) {
        alert('Password must be mre than 8 characters')
    }

    if(passwordConfirmation.value != password.value) {
        alert('Password confirmation does not much with Password')
    }

     if(messages.length > 0) {
        event.preventDefault()
        errorElement.innerText = messages.join(', ')
    } 

    else if(messages.length <= 0) {
        alert('Hi Five your details are ready to been submitted')
    }
}) 