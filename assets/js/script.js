// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('.iconos-tech', {
    duration: 2000,
    delay: 400
});