const slider = document.querySelector('.slider')
let deg = 0


setInterval(() => {
    deg = deg + 90
    slider.style.transform = 'rotateZ('+deg+'deg)'
}, 2500);