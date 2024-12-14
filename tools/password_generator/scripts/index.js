const msg = document.getElementById("msg");
const btn_password_generator = document.getElementById("btn_password_generator");
const password = document.getElementById("password");
const password_length = document.getElementById("password_length");

const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+[]{}|;:,.<>/?"
};

function generate_password(length) {
    const all_characters = characters.uppercase + characters.lowercase + characters.numbers + characters.symbols;
    let password = "";
    for (let i = 0; i < length; i++) {
        const random_char = all_characters.charAt(Math.floor(Math.random() * all_characters.length));
        password += random_char;
    }
    return password;
}

btn_password_generator.addEventListener("click", () => {
    const length = parseInt(password_length.value);
    if (length >= 8 && length <= 64) {
        password.value = generate_password(length);
    } else {
        msg.classList.add('active')

        setTimeout(() => {
            msg.classList.remove('active')
        }, 2000)
    }
});
