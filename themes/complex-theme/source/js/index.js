document.addEventListener('scroll', function (ev) {
    let navbar = document.getElementById('navbar')
    if (window.scrollY > 50) {
        navbar.classList.remove('nav-index')
    } else {
        navbar.classList.add('nav-index')
    }
})