function sendToWhatsApp(event) {
  event.preventDefault();
  
  const name = document.getElementById("User_name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("msg").value;

  const phoneNumber = "919321296327"; // Your WhatsApp number (with country code, no +)
  const text = `New message from portfolio website:%0A
  Name: ${name}%0A
  Email: ${email}%0A
  Message: ${message}`;

  window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
}


function SlidingMenu(){
  const sidemenu = document.getElementById('Sidemenu')
  const menu = document.getElementById('menubar');
  const currentTransform = sidemenu.style.transform;

  if (currentTransform === "translateY(-100%)" || currentTransform === "") {
    // Show the menu
    sidemenu.style.transform = "translateY(0%)";
    sidemenu.style.height = "14rem";
    
    
  } else {
    // Hide the menu
    sidemenu.style.transform = "translateY(-100%)";
    sidemenu.style.height = "0";
  }
}

function removeMenu() {
  const sidemenu = document.getElementById('Sidemenu');
  sidemenu.style.transform = "translateY(-100%)";
  sidemenu.style.height = "0";
}
