const header = document.getElementById('header')
const btn_menu = document.getElementById('btn_menu_container')
const btn_menu_line_arrow = document.getElementById('btn_menu_line_arrow')
const menu_links = document.querySelectorAll('.menu_link')

let last_current_scroll = 0

btn_menu.addEventListener('click', () => {
    header.classList.toggle('active')
    btn_menu_line_arrow.classList.toggle('active')
})

if(window.innerWidth < 1140) {
    for (let i = 0; i < menu_links.length; i++) {    
        menu_links[i].addEventListener('click', () => {
            header.classList.toggle('active')
            btn_menu_line_arrow.classList.toggle('active')
        })
    }
}

window.addEventListener('resize', () => {
    if(window.innerWidth < 1140) {
        for (let i = 0; i < menu_links.length; i++) {    
            menu_links[i].addEventListener('click', () => {
                header.classList.toggle('active')
                btn_menu_line_arrow.classList.toggle('active')
            })
        }
    }
})


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
