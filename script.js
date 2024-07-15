document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const correctPassword = 'MIK01';

    if (password === correctPassword) {
        window.location.href = 'protected.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Password errata. Riprova.';
    }
});
