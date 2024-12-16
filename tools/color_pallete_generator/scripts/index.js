const btn_generate = document.getElementById('btn_generate')
const color = document.querySelectorAll('.color')
const color_code = document.querySelectorAll('.color_code')

function generate_pallete_color() {

    for (let i = 0; i < color.length; i++) {
        let random_code = Math.floor(Math.random() * 0xffffff).toString(16)

        random_code = `#${random_code.padStart(6, "0")}`

        color[i].style.background = random_code
        color_code[i].innerHTML = random_code

        color[i].addEventListener('click', () => {
            navigator.clipboard.writeText(random_code)
            color_code[i].innerHTML = '¡Copiado!'

            setTimeout(() => {
                color_code[i].innerHTML = random_code
            }, 2000)
        })

        color[i].addEventListener('mouseover', () => {
            color_code[i].innerHTML = 'Copiar'
        })

        color[i].addEventListener('mouseout', () => {
            color_code[i].innerHTML = random_code
        })
    }
}

btn_generate.addEventListener('click', generate_pallete_color)

generate_pallete_color()