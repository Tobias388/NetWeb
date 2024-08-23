const slider_works = document.querySelector('.slider_works')
const works = document.querySelectorAll('.work')
const slider_works_arrow_left = document.querySelector('.slider_works_arrow_left')
const slider_works_arrow_right = document.querySelector('.slider_works_arrow_right')

let slider_count = 1,
slider_margin = 0

slider_works_arrow_left.addEventListener('click', () => {
    slider_count--
    slider_margin = slider_margin + 100
    slider_works.style.marginLeft = slider_margin + '%' 

    if(slider_count == 1) {
        slider_works_arrow_left.style.display = 'none'
        slider_works_arrow_right.style.display = 'block'
    } 

    if(slider_count < works.length) {
        slider_works_arrow_right.style.display = 'block'
    }
})

slider_works_arrow_right.addEventListener('click', () => {
    slider_count++
    slider_margin = slider_margin - 100
    slider_works.style.marginLeft = slider_margin + '%' 

    if(slider_count == works.length) {
        slider_works_arrow_right.style.display = 'none'
        slider_works_arrow_left.style.display = 'block'
    }

    if(slider_count > 1) {
        slider_works_arrow_left.style.display = 'block'
    }
})