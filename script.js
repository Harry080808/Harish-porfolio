function sendToWhatsApp(event) {
  event.preventDefault();
  
  const name = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;
  const message = document.getElementById("message").value;

  const phoneNumber = "919321296327"; // Your WhatsApp number (with country code, no +)
  const text = `New message from portfolio website:%0A
  Name: ${name}%0A
  Email: ${email}%0A
  Message: ${message}`;

  window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
}
