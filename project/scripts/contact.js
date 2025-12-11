const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  message.textContent = 'Thank you for your message! I will get back to you soon.';
  form.reset();
});

