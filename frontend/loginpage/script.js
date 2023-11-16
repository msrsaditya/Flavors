document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordContainer = document.getElementById('passwordContainer');
    const continueButton = document.getElementById('continueButton');
    const loginContainer = document.querySelector('.login-container');

    continueButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (emailInput.value !== '') {
            const passwordInput = document.createElement('input');
            passwordInput.type = 'password';
            passwordInput.className = 'input-field';
            passwordInput.placeholder = 'Password';
            passwordContainer.innerHTML = ''; // Clear any previous password input
            passwordContainer.appendChild(passwordInput);

            // Add a class to the login container to expand it
            loginContainer.classList.add('expanded-container');

            // Redirect to the desired path after entering the password
            continueButton.addEventListener('click', function () {
                // Check if the password is entered (you might want to enhance this check)
                if (passwordInput.value !== '') {
                    // Redirect to the specified path
                    window.location.href = '/Users/shashank/Flavors/frontend/mainpage/index.html';
                }
            });
        }
    });
});

