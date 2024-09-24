
        function checkPasswordStrength() {
            const password = document.getElementById('password-input').value;
            const strengthBar = document.getElementById('strength-level');
            const strengthText = document.getElementById('strength-text');
            let strength = 0;

            // Strength calculation
            if (password.length > 8) strength += 20;
            if (/[A-Z]/.test(password)) strength += 20;
            if (/[a-z]/.test(password)) strength += 20;
            if (/[0-9]/.test(password)) strength += 20;
            if (/[\W]/.test(password)) strength += 20;

            strengthBar.style.width = strength + "%";

            // Suggestions for password strength
            if (strength <= 40) {
                strengthBar.style.backgroundColor = "red";
                strengthText.textContent = "Weak! Consider adding numbers, symbols, or mixing uppercase and lowercase letters.";
            } else if (strength <= 80) {
                strengthBar.style.backgroundColor = "orange";
                strengthText.textContent = "Moderate! Try to use a mix of letters, numbers, and symbols.";
            } else {
                strengthBar.style.backgroundColor = "green";
                strengthText.textContent = "Strong password! You're good to go.";
            }
        }