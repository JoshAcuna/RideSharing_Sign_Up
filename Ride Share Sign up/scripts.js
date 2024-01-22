function validateRegistration() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Clear previous error messages
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
    document.getElementById('outputMessage').innerText = '';

    // Validate Email Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format';
        return;
    }

    // Validate password strength
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters';
        return;
    }
    // check for at least 1 uppercase letter
    if (!/[A-Z]/.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must have at least 1 Uppercase Character';
        return;
    }
    // check for at least 1 lowercase letter
    if (!/[a-z]/.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must have at least 1 lowercase Character';
        return;
    }
    // check for at least 1 number 
    if (!/\d/.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must have at least 1 digit';
        return;
    }
    // check for at least on special charcter 
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must have at least 1 special Character';
        return;
    }

    // Validate password and confirm password match
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
        return;
    }

    // Registration success
    document.getElementById('outputMessage').innerText = 'Registration successful!';
}
