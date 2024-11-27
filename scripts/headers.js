const about_us_item = document.getElementById('about_us_item')
const about_us_item_icon = document.getElementById('about_us_item_icon')
const to_last_item = document.getElementById('to_last_item')
const tools_item = document.getElementById('tools_item')
const to_last_item_icon = document.getElementById('to_last_item_icon')
const tools_item_icon = document.getElementById('tools_item_icon')
const header_about_us = document.getElementById('header_about_us')
const header_to_last = document.getElementById('header_to_last')
const header_tools = document.getElementById('header_tools')
const menu_item = document.querySelectorAll('.menu_item')
const menu_accordion_about_us = document.querySelector('.menu_accordion_about_us')
const menu_accordion_to_last = document.querySelector('.menu_accordion_to_last')
const menu_accordion_tools = document.querySelector('.menu_accordion_tools')

let menu_accordion_about_us_state = false,
menu_accordion_to_last_state = false,
menu_accordion_tools_state = false

about_us_item.addEventListener('click', () => {
    header_about_us.classList.toggle('active')
    header_to_last.classList.remove('active')
    header_tools.classList.remove('active')
    about_us_item_icon.classList.toggle('active')
    about_us_item.children[0].classList.toggle('active')    
    to_last_item_icon.classList.remove('active')
    to_last_item.children[0].classList.remove('active')
    tools_item_icon.classList.remove('active')
    tools_item.children[0].classList.remove('active')

    if(menu_accordion_about_us_state == false) {
        menu_accordion_about_us.classList.add('display')
        
        setTimeout(() => {
            menu_accordion_about_us.classList.add('active')
        }, 1)
        
        menu_accordion_about_us_state = true

    } else {
        menu_accordion_about_us.classList.remove('active')
        
        setTimeout(() => {
            menu_accordion_about_us.classList.remove('display')
        }, 400)

        menu_accordion_about_us_state = false
    }

})


to_last_item.addEventListener('click', () => {
    header_to_last.classList.toggle('active')
    header_about_us.classList.remove('active')
    header_tools.classList.remove('active')
    to_last_item_icon.classList.toggle('active')
    to_last_item.children[0].classList.toggle('active')
    about_us_item_icon.classList.remove('active')
    about_us_item.children[0].classList.remove('active')
    tools_item_icon.classList.remove('active')
    tools_item.children[0].classList.remove('active')

    if(menu_accordion_to_last_state == false) {
        menu_accordion_to_last.classList.add('display')
        
        setTimeout(() => {
            menu_accordion_to_last.classList.add('active')
        }, 1)
        
        menu_accordion_to_last_state = true

    } else {
        menu_accordion_to_last.classList.remove('active')
        
        setTimeout(() => {
            menu_accordion_to_last.classList.remove('display')
        }, 400)

        menu_accordion_to_last_state = false
    }

})


tools_item.addEventListener('click', () => {
    header_to_last.classList.remove('active')
    header_about_us.classList.remove('active')
    header_tools.classList.toggle('active')
    to_last_item_icon.classList.remove('active')
    to_last_item.children[0].classList.remove('active')
    about_us_item_icon.classList.remove('active')
    about_us_item.children[0].classList.remove('active')
    tools_item_icon.classList.toggle('active')
    tools_item.children[0].classList.toggle('active')

    if(menu_accordion_tools_state == false) {
        menu_accordion_tools.classList.add('display')
        
        setTimeout(() => {
            menu_accordion_tools.classList.add('active')
        }, 1)
        
        menu_accordion_tools_state = true

    } else {
        menu_accordion_tools.classList.remove('active')
        
        setTimeout(() => {
            menu_accordion_tools.classList.remove('display')
        }, 400)

        menu_accordion_tools_state = false
    }

})