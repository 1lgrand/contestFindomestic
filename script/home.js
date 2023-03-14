
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