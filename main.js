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



// certifcates
const cer = [
    {
        id: 1,
        title: `CS50 Web Programming with Python and JavaScript`,
        org: `Harvard University`,
        org__img: `./images/harvard.png`,
        cerImage: `./images/CS50W.png`,
        descripition: `The skills: (HTML, CSS, JavaScript, Python - Django, Sass, Bootstrap), with 6 projects for this course. (Search - Wiki - Commerce - Mail - Network- and a final project).`,
        category: `Web Development`,
    },

    {
        id: 2,
        title: `Web Development Fundamental`,
        org: `SoloLearn`,
        org__img: `./images/sololearn.png`,
        cerImage: `./images/cer-webdev-sololearn.jpg`,
        descripition: `I learned (HTML, CSS, JavaScript).`,
        category: `Web Development`,
    },

    {
        id: 3,
        title: `Responsive Web Design`,
        org: `SoloLearn`,
        org__img: `./images/sololearn.png`,
        cerImage: `./images/cer_sololearn-responsive.jpg`,
        descripition: `I learned also in a depth how to make the website responsive.`,
        category: `Web Development`,
    },

    {
        id: 4,
        title: `HTML Course`,
        org: `SoloLearn`,
        org__img: `./images/sololearn.png`,
        cerImage: `./images/cer-html-sololearn.jpg`,
        descripition: `The course was talking about HTML semantic elements.`,
        category: `Web Development`,
    },

    {
        id: 5,
        title: `CSS Course`,
        org: `SoloLearn`,
        org__img: `./images/sololearn.png`,
        cerImage: `./images/cer-css-sololearn.jpg`,
        descripition: `I learned the basic CSS Properties..`,
        category: `Web Development`,
    },

    {
        id: 6,
        title: `JavaScript Course`,
        org: `SoloLearn`,
        org__img: `./images/sololearn.png`,
        cerImage: `./images/cer-js-sololearn.png`,
        descripition: `I learned the JS, Dom, events, and some programming principles.`,
        category: `Web Development`,
    },

    {
        id: 7,
        title: `CS50X (Introduction to the intellectual enterprises of computer science and the art of programming.)`,
        org: `Harvard University`,
        org__img: `./images/harvard.png`,
        cerImage: `./images/CS50x.png`,
        descripition: `I learend how to think algorithmically and solve problems efficiently.`,
        category: `Computer Science`,
    },

    {
        id: 8,
        title: `CS50’s
        Understanding Technology`,
        org: `Harvard University`,
        org__img: `./images/harvard.png`,
        cerImage: `./images/CS50T.png`,
        descripition: `I learned a lot of information, about hardware, the Internet, multimedia, security, programming, and web development..`,
        category: `Technology`,
    },
]


const cards = document.querySelector('.cards__cer');
const btnContainer = document.querySelector('.cer__buttons')

window.addEventListener("DOMContentLoaded", function () {
    displayCerItem(cer)
    displayCerButtons()
});


function displayCerItem(cerItem) {
    let displayCer = cerItem.map(function (item) {
        return `<div class="card__cer">
                    <div class="imgBox__cer">
                        <h3>${item.title}</h3>
                        <div class="cer__org">
                            Provided by: <strong><img src="${item.org__img}" alt="">${item.org}</strong>
                        </div>
                        <div class="cer__org">
                        Category: <strong>${item.category}</strong>
                        </div>
                    </div>
                    <div class="cer__details">
                        <div class="cer__content">
                            <img src="${item.cerImage}">
                        </div>
                        <div class="des__cer">
                            <strong>Descripition: </strong> ${item.descripition} 
                        </div>
                    </div>
            </div>`;
    })

    displayCer = displayCer.join('')
    cards.innerHTML = displayCer;
}

function displayCerButtons() {
    const categories = cer.reduce(
        function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
        },
        ["All"]
    );

    const categoryBtns = categories
    .map(function (category) {
        return `<button type="button" class="button-round-outline fbtn" data-id="${category}">
            ${category}
        </button>`;
    })
    .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".fbtn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const cerCategory = cer.filter(function (cerItem) {
        // console.log(menuItem.category);
        if (cerItem.category === category) {
            return cerItem;
        }
        });
        if (category === "All") {
            displayCerItem(cer);
        } else {
            displayCerItem(cerCategory);
        }
    });
    });
}


// portorfoil

let loadmoreBtn = document.querySelector('.loadmorebtn'),
    currentItem = 6;

loadmoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll(".por__card")]
    for (let i = currentItem; i < currentItem + 6; i++){
        boxes[i].style.display = "inline-block";
    }

    currentItem += 6;

    if (currentItem >= boxes.length) {
        loadmoreBtn.style.display = "none";
    }
}

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