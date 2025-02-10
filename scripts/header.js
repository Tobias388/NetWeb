const header = document.getElementById('header')
const btn_header_opened = document.getElementById('btn_header_opened')
const btn_header_closed = document.getElementById('btn_header_closed')
const overlay = document.getElementById('overlay')

btn_header_opened.addEventListener('click', () => {
    header.classList.add('active')
    overlay.classList.add('active')
})

btn_header_closed.addEventListener('click', () => {
    header.classList.remove('active')
    overlay.classList.remove('active')
})

overlay.addEventListener('click', () => {
    header.classList.remove('active')
    overlay.classList.remove('active')
})

let last_current_scroll = 0

window.addEventListener("scroll", () => {

    let current_scroll = window.scrollY;

    if (current_scroll == 0) {
        header.classList.add('scroll_up');
        header.classList.remove('scroll_down');
    } else if (last_current_scroll < current_scroll && !header.classList.contains('scroll_down')) {
        header.classList.remove('scroll_up');
        header.classList.add('scroll_down');
    } else if (last_current_scroll > current_scroll && header.classList.contains('scroll_down')) {
        header.classList.add('scroll_up');
        header.classList.remove('scroll_down');
    }

    last_current_scroll = current_scroll;
});