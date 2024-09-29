const menuIcon = document.getElementById('menu-icon');
const offCanvas = document.getElementById('off-canvas');
const closeBtn = document.getElementById('close-btn');

menuIcon.addEventListener('click', () => {
  offCanvas.style.left = '0';
});

closeBtn.addEventListener('click', () => {
  offCanvas.style.left = '-250px';
});


/* contact */
const form = document.getElementById('contactForm');
const statusMessage = document.getElementById('statusMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === "" || email === "" || subject === "" || message === "") {
    statusMessage.textContent = "Please fill in all fields.";
    statusMessage.classList.add('error');
    return;
  }

  if (!validateEmail(email)) {
    statusMessage.textContent = "Please enter a valid email address.";
    statusMessage.classList.add('error');
    return;
  }

  statusMessage.textContent = "Message sent successfully!";
  statusMessage.classList.remove('error');
  statusMessage.classList.add('success');

  form.reset();
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}