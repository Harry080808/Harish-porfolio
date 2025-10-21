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

document.addEventListener("DOMContentLoaded",function() {
  const sidemenu = document.getElementById('Sidemenu');
  sidemenu.style.transform = "translateY(-100%)";
  sidemenu.style.height = "0";
})

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

gsap.from("#Web_logo",{
    y:-60,
    duration:0.7,
    delay:0.4
})

gsap.from("#Desktop_menu",{
    y:-60,
    duration:0.7,
    delay:0.8
})
gsap.from("#menubar",{
    y:-60,
    duration:0.7,
    delay:0.8
})

  const roles = ["Java Fullstack Developer", "Software Engineer", "Backend Developer"];
  const products = ["Code", "Website", "App"];

  const roleElement = document.getElementById("role");
  const productElement = document.getElementById("product");

  let roleIndex = 0, roleCharIndex = 0;
  let productIndex = 0, productCharIndex = 0;
  let deletingRole = false, deletingProduct = false;

  function typeEffect() {
    // Role typing
    if (!deletingRole && roleCharIndex <= roles[roleIndex].length) {
      roleElement.textContent = roles[roleIndex].substring(0, roleCharIndex++);
    } else if (deletingRole && roleCharIndex >= 0) {
      roleElement.textContent = roles[roleIndex].substring(0, roleCharIndex--);
    }

    if (roleCharIndex === roles[roleIndex].length + 1) {
      deletingRole = true;
      setTimeout(typeEffect, 1000);
      return;
    } else if (roleCharIndex < 0) {
      deletingRole = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    // Product typing
    if (!deletingProduct && productCharIndex <= products[productIndex].length) {
      productElement.textContent = products[productIndex].substring(0, productCharIndex++);
    } else if (deletingProduct && productCharIndex >= 0) {
      productElement.textContent = products[productIndex].substring(0, productCharIndex--);
    }

    if (productCharIndex === products[productIndex].length + 1) {
      deletingProduct = true;
      setTimeout(typeEffect, 1000);
      return;
    } else if (productCharIndex < 0) {
      deletingProduct = false;
      productIndex = (productIndex + 1) % products.length;
    }

    setTimeout(typeEffect, deletingRole || deletingProduct ? 50 : 120);
  }

  document.addEventListener("DOMContentLoaded", typeEffect);

  gsap.from("#myintro", {
  y: -70,
  opacity: 0,
  duration: 0.6,
  stagger: 0.3,
  scrollTrigger:"#myintro"
});

gsap.from("#hire_btn",{
  scale:1.1,
  opacity:0,
  duration:0.3,
  ease:"power2.out"
})

gsap.from("#abouttitle",{
  y:-20,
  opacity:0,
  duration:0.5,
  delay:1,
  scrollTrigger:"#abouttitle"
})