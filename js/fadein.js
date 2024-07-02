ScrollReveal().reveal('.fade', {
    duration: 1500,
    delay: 200
});
window.addEventListener("beforeunload", function (event) {
    var body = document.querySelector('body');
    body.classList.add('fade-out');
});