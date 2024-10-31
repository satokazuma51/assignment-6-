document.addEventListener("DOMContentLoaded", () => {
    checkAuth();
    loadPreferences();
});

function login() {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username);
        checkAuth();
    }
}

function logout() {
    localStorage.removeItem('username');
    checkAuth();
}

function checkAuth() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('userSection').style.display = 'block';
        document.getElementById('displayUsername').textContent = username;
    } else {
        document.getElementById('loginSection').style.display = 'block';
        document.getElementById('userSection').style.display = 'none';
    }
}
