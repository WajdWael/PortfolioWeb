// navsider
let list = document.querySelectorAll('.nav__list');

function actveLink() {
    list.forEach(item => {
        item.classList.remove('hovered');
        this.classList.add('hovered');
    })
}
list.forEach(item => {
    item.addEventListener('click', actveLink);
})

// menu toggle
let toggleIcon = document.querySelector('.bars i');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggleIcon.onclick = function () {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    document.querySelector('.bars').classList.toggle('active');
    document.querySelector('footer').classList.toggle("active")
}

// Typing effect
const texts = ['Wajd Wael.', 'a Front-End Developer.', 'a Freelancer.', 'a Coder.', 'a Youtuber'];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector("#typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);
}())


// Scroll animation for the skill section Progressbar

const skillSection = document.querySelector(".skill");
const progresBar = document.querySelectorAll(".progress__span");
const p = document.querySelectorAll(".p");

function showProgress() {
    progresBar.forEach(progresBar => {
        const value = progresBar.dataset.progress;
        progresBar.style.opacity = 1;
        progresBar.style.width =`${value}%`;
    })
    p.forEach((p) => {
        const value = p.dataset.progress;
        p.style.opacity = 1;
        p.style.left = `${value}%`;
    })
}
function hideProgress() {
    progresBar.forEach(progresBar => {
        progresBar.style.opacity = 0;
    })
    p.forEach(p => {
        p.style.opacity = 0;
    })
}
window.addEventListener("scroll", () => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
        showProgress()
    } else {
        hideProgress()
    }
})


// circle progressbar animation
$(function() {
    $('.chart').easyPieChart({
    size: 100,
    barColor: "#ff006a",
    scaleLength: 0,
    lineWidth: 15,
    trackColor: "#f0f0f0",
    lineCap: "circle",
    animate: 2000,
    });
});

// contact us input animation
function focusAnimation() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurAnimation() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}
const inputs = document.querySelectorAll(".input");
inputs.forEach(input => {
    input.addEventListener("focus", focusAnimation)
    input.addEventListener("blur", blurAnimation)
})

// ==== Show Scroll up ====
function scrollUp() {
    const scrollUp = document.querySelector('.scrollup');
    // when the scroll is higher than 350 viewport height, add the show-scroll calss
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

// contact us Sending emails
function sendMail(params) {
    let tempParams = {
        from_name: document.getElementById("name").value,
        to_name: "wajdwael",
        message: `Name: ${document.getElementById("name").value} ---- Phone: ${document.getElementById("phone").value} ---- Email: ${document.getElementById("email").value} ---- Message: ${document.getElementById("message").value}`,
    };
    emailjs.send("service_m6xusvk", 'template_b9854dq', tempParams)
        .then(function (res) {
        alert("Thank You For Contact Us 💖☺!")
    })
}