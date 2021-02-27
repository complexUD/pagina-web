const toTopElement = document.querySelector('.to-top')
document.addEventListener('scroll', function (ev) {
    if (window.scrollY > window.innerHeight) {
        toTopElement.style.display = 'block'
    } else {
        toTopElement.style.display = 'none'
    }
})