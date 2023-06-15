const password_input = document.getElementById("password_input");
const massege_border = document.getElementById("massege_border");
const submit_btn = document.getElementById("submit_btn");
const password = "Front-end web developer";
const top_btn = document.getElementById("top_btn");
const bottom_btn = document.getElementById("bottom_btn");

// Password...
submit_btn.onclick = read => {
    if(password_input.value != "") {
        compare();
        clear();
    }
}

function compare() {
    if(password_input.value == password) {
        massege_border.innerHTML = `${password_input.value} is a correct password, You're succesed.`;
    } else if(password_input.value != password) {
        massege_border.innerHTML = "it's a worng password.";
    }
}

function clear() {
    password_input.value = "";
}

// Scroll Buttons...
top_btn.onclick = bottom => {
    scroll(0, 1000);
}

bottom_btn.onclick = top => {
    scroll(0, 0);
}

// Massege...
const anim_word = document.getElementsByClassName("anim");

const observer = new IntersectionObserver((entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("animate");
        } else {
            entry.target.classList.remove("animate");
        }
    })
}), {
    threshold: .3,
});

for(let i = 0; i <= anim_word.length; i++) {
    const el = anim_word[i];

    observer.observe(el);
}