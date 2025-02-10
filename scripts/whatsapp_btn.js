(function () {

    const whatsapp_btn_icon = document.getElementById('whatsapp_btn_icon'),
    footer = document.getElementById('footer')

    function whatsapp_btn_active() {
        footer_top = footer.getBoundingClientRect().top
        if (footer_top + 50 <= window.innerHeight) {
            whatsapp_btn_icon.classList.add('active')
        } else {
            whatsapp_btn_icon.classList.remove('active')
        }
    }

    window.addEventListener('scroll', whatsapp_btn_active)
})()