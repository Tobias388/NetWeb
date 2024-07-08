const slider_reviews = document.querySelector('.slider_reviews')
const reviews = document.querySelectorAll('.review')
const slider_reviews_arrow_left = document.querySelector('.slider_reviews_arrow_left')
const slider_reviews_arrow_right = document.querySelector('.slider_reviews_arrow_right')

let slider_count_review = 1,
slider_margin_review = 0

slider_reviews_arrow_left.addEventListener('click', () => {
    slider_count_review--
    slider_margin_review = slider_margin_review + 100
    slider_reviews.style.marginLeft = slider_margin_review + '%' 

    if(slider_count_review == 1) {
        slider_reviews_arrow_left.style.display = 'none'
        slider_reviews_arrow_right.style.display = 'block'
    } 

    if(slider_count_review < reviews.length) {
        slider_reviews_arrow_right.style.display = 'block'
    }
})

slider_reviews_arrow_right.addEventListener('click', () => {
    slider_count_review++
    slider_margin_review = slider_margin_review - 100
    slider_reviews.style.marginLeft = slider_margin_review + '%' 

    if(slider_count_review == reviews.length) {
        slider_reviews_arrow_right.style.display = 'none'
        slider_reviews_arrow_left.style.display = 'block'
    }

    if(slider_count_review > 1) {
        slider_reviews_arrow_left.style.display = 'block'
    }
})