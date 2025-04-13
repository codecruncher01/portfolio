// Smooth scrolling functionality for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // JavaScript to handle the mobile menu toggle
  const menuBtn = document.querySelector('.menu-btn');
  const cancelBtn = document.querySelector('.cancel-btn');
  const menu = document.querySelector('.menu');
  
  // Open the menu when the menu button (hamburger icon) is clicked
  menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
    menuBtn.style.display = 'none';
    cancelBtn.style.display = 'block';
  });
  
  // Close the menu when the cancel button (X icon) is clicked
  cancelBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBtn.style.display = 'block';
    cancelBtn.style.display = 'none';
  });
  
  // Hide the menu on scroll
  window.addEventListener('scroll', () => {
    menu.classList.remove('active');
    menuBtn.style.display = 'block';
    cancelBtn.style.display = 'none';
  });
  
  //button to phone user
  function phoneuser()
  {
    document.getElementById("phone_menu").innerHTML="hello";
  }