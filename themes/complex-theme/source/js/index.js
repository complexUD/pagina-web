const navbar = document.getElementById('navbar')
document.addEventListener('scroll', function (ev) {
    if (window.scrollY > 50) {
        navbar.classList.remove('nav-index')
    } else {
        navbar.classList.add('nav-index')
    }
})