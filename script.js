// Scroll suave
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const seccion = document.querySelector(link.getAttribute("href"));
        seccion.scrollIntoView({ behavior: "smooth" });
    });
});
