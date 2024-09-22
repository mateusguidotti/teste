document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.form-container').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const email = document.getElementById('user-email').value;
        const password = document.getElementById('user-password').value;

        if (email === 'guidottimateus1@gmail.com' && password === '123') {
            console.log('Redirecionando...');
            window.location.href = 'https://www.google.com';
        } else {
            alert('E-mail ou senha inválidos.');
        }
    });
});