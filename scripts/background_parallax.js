const background_img = document.querySelector('.background_img')

window.addEventListener('scroll', () => {
    let scrollY = document.documentElement.scrollTop
    background_img.style.transform = 'translateY('+ scrollY * -0.8 +'px)'
})
