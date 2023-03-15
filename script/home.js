
//Scroll della navbar, per sfondo trasparente e sfondo verde
document.addEventListener("DOMContentLoaded", function(event) { 
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navbar.classList.add('scrollata');
    } else {
      navbar.classList.remove('scrollata');
    }
  });
});


window.onload = function() {
  const menuIcon = document.querySelector('.menuIcon');
  const aside = document.querySelector('aside');
  const navbar = document.getElementById('navbar')

  menuIcon.addEventListener('click', function() {
    
  
      aside.classList.toggle('show')
      
      if (window.scrollY > 0) {
        navbar.classList.remove('scrollata');
      } else {
        navbar.classList.add('scrollata');
      }

  });
}