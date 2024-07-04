const header = document.getElementById('header')

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