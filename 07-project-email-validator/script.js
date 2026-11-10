const email = document.querySelector('#email-input');
const password = document.querySelector('#password-input');
const validate_btn = document.querySelector('#validate-btn');
const form = document.querySelector('#input-form');
const email_error = document.querySelector('#email-error');
const pass_error = document.querySelector('#password-error');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('preventdefault start '); // just for testing purpose

    const email_value = email.value.trim();
    console.log('value in e-mail : ' + email_value); // just for testing purpose

    const pass_value = password.value.trim();
    console.log('value in password : ' + pass_value); // just for testing purpose

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^.{8,}$/;

    // testing the regex for testing purpose
    // console.log(emailRegex.test("codewithme746@gmail.com"));
    // console.log(passwordRegex.test(12345678));
    // console.log(passwordRegex.test(2222));

    if (!emailRegex.test(email_value)) {
        console.log(emailRegex.test(email_value.value)); // just for testing purpose
        email_error.textContent = 'E-mail is in-correct (please follow valid email format [example746@gmail.com])';
        email_error.style.color = 'red';
    } else if (emailRegex.test(email_value)) {
        console.log(emailRegex.test(email_value.value)); // just for testing purpose
        email_error.textContent = 'E-mail is correct';
        email_error.style.color = 'green';
    }

    if (!passwordRegex.test(pass_value)) {
        console.log(passwordRegex.test(pass_value.value))  // just for testing purpose
        pass_error.textContent = 'Password is in-correct (password must contain 8 characters)';
        pass_error.style.color = 'red';
    } else if (passwordRegex.test(pass_value)) {
        console.log(passwordRegex.test(pass_value.value)) // just for testing purpose
        pass_error.textContent = 'Password is correct';
        pass_error.style.color = 'green';
    }

});