
// certifcates
const cer = [
    {
        id: 1,
        title: `CS50 Web Programming with Python and JavaScript`,
        org: `Harvard University`,
        org__img: `../images/harvard.png`,
        // cerImage: `./images/CS50W.png`,
        link: `https://certificates.cs50.io/42c910bf-edff-4eff-81b9-cf872ee9ac13`,
        descripition: `The skills: (HTML, CSS, JavaScript, Python - Django, Sass, Bootstrap), with 6 projects for this course. (Search - Wiki - Commerce - Mail - Network- and a final project).`,
        category: `Web Development`,
    },

    {
        id: 2,
        title: `Responsive Web Design`,
        org: `FreeCodeCamp`,
        org__img: `../images/logofree.svg`,
        // cerImage: `./images/CS50T.png`,
        link: `https://www.freecodecamp.org/certification/Wajd_Wael/responsive-web-design`,
        descripition: `I learned a lot of information, about hardware, the Internet, multimedia, security, programming, and web development..`,
        category: `Web Development`,
    },

    {
        id: 3,
        title: `Web Development Fundamental`,
        org: `SoloLearn`,
        org__img: `../images/sololearn.png`,
        // cerImage: `./images/cer-webdev-sololearn.jpg`,
        link: `https://www.sololearn.com/Certificate/1141-19798598/jpg`,
        descripition: `I learned (HTML, CSS, JavaScript).`,
        category: `Web Development`,
    },

    {
        id: 4,
        title: `Responsive Web Design`,
        org: `SoloLearn`,
        org__img: `../images/sololearn.png`,
        // cerImage: `./images/cer_sololearn-responsive.jpg`,
        link: `https://www.sololearn.com/Certificate/1162-19798598/jpg`,
        descripition: `I learned also in a depth how to make the website responsive.`,
        category: `Web Development`,
    },

    {
        id: 5,
        title: `HTML Course`,
        org: `SoloLearn`,
        org__img: `../images/sololearn.png`,
        // cerImage: `./images/cer-html-sololearn.jpg`,
        link: `https://www.sololearn.com/Certificate/1014-19798598/jpg`,
        descripition: `The course was talking about HTML semantic elements.`,
        category: `Web Development`,
    },

    {
        id: 6,
        title: `CSS Course`,
        org: `SoloLearn`,
        org__img: `../images/sololearn.png`,
        // cerImage: `./images/cer-css-sololearn.jpg`,
        link: `https://www.sololearn.com/Certificate/1023-19798598/jpg`,
        descripition: `I learned the basic CSS Properties..`,
        category: `Web Development`,
    },

    {
        id: 7,
        title: `JavaScript Course`,
        org: `SoloLearn`,
        org__img: `../images/sololearn.png`,
        // cerImage: `./images/cer-js-sololearn.png`,
        link: `https://www.sololearn.com/certificates/course/en/19798598/1024/landscape/png`,
        descripition: `I learned the JS, Dom, events, and some programming principles.`,
        category: `Web Development`,
    },

    {
        id: 8,
        title: `CS50X (Introduction to the intellectual enterprises of computer science and the art of programming.)`,
        org: `Harvard University`,
        org__img: `../images/harvard.png`,
        // cerImage: `./images/CS50x.png`,
        link: `https://certificates.cs50.io/4dc9d75c-1335-4771-9b54-c2382251381a`,
        descripition: `I learend how to think algorithmically and solve problems efficiently.`,
        category: `Computer Science`,
    },

    {
        id: 9,
        title: `CS50’s
        Understanding Technology`,
        org: `Harvard University`,
        org__img: `../images/harvard.png`,
        // cerImage: `./images/CS50T.png`,
        link: `https://certificates.cs50.io/b4b6931b-5c1d-4294-bcd7-37478536c7fc`,
        descripition: `I learned a lot of information, about hardware, the Internet, multimedia, security, programming, and web development..`,
        category: `Technology`,
    },

    {
        id: 10,
        title: `CS50’s
        Understanding Technology`,
        org: `Harvard University`,
        org__img: `../images/harvard.png`,
        // cerImage: `./images/CS50T.png`,
        link: `https://certificates.cs50.io/b4b6931b-5c1d-4294-bcd7-37478536c7fc`,
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

//<img src="${item.cerImage}">
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
                            <a href="${item.link}">${item.link}</a>
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

    const filterBtns = document.querySelectorAll(".fbtn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const cerCategory = cer.filter(function (cerItem) {
                if (cerItem.category === category) {
                    return cerItem;
                }
            });
            if (category === "All") {
                displayCerItem(cer);
            } else {
                displayCerItem(cerCategory);
            }

            filterBtns.forEach(n=>n.classList.remove("active"))
            this.classList.add('active')
        });
    });
}