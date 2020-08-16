document.addEventListener('scroll', function (ev) {
    let navbar = document.getElementById('navbar')
    if (window.scrollY > 50) {
        navbar.classList.remove('bg-transparent')
    } else {
        navbar.classList.add('bg-transparent')
    }
})