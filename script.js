const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    errorMsg.textContent = 'Please enter both username and password.';
    return;
  }

  // Simulate login (here you’d typically send credentials to a server)
  errorMsg.style.color = 'green';
  errorMsg.textContent = 'Login successful!';
});

function togglePassword() {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.getAttribute('type');
  passwordInput.setAttribute('type', type === 'password' ? 'text' : 'password');
}
