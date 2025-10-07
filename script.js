// --- Script para scroll suave ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- Script para ocultar/mostrar el header al hacer scroll ---
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 80) { // Oculta solo si se baja más allá del header
        // Scroll hacia abajo
        header.classList.add('nav-up');
    } else {
        // Scroll hacia arriba
        header.classList.remove('nav-up');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
