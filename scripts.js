// Mostrar botón de scroll
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Función scroll suave hacia arriba
scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Parallax suave para secciones
document.querySelectorAll('.section').forEach(section => {
    window.addEventListener('scroll', () => {
        const speed = 0.2;
        const offset = window.scrollY * speed;
        section.style.backgroundPosition = `center ${offset}px`;
    });
});

// Animación al aparecer (opcional)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".section").forEach(section => {
    observer.observe(section);
});