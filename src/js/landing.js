/* HTML Elements */
const btnRegister = document.getElementById('btn-register');
const registerModal = document.getElementById('register-modal');
const btnClose = document.getElementById('btn-close');

btnRegister.addEventListener('click', () => {
  registerModal.style.display = 'flex';
});

btnClose.addEventListener('click', () => {
  registerModal.style.display = 'none';
});
