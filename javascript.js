let parallax = document.getElementById("main-bg");

function clicked() {
    window.open(
        'https://www.youtube.com/watch?v=eOrNdBpGMv8',
        '_blank' // <- This is what makes it open in a new window.
    );
}

// console.log(document.querySelector(".burger").style);

const hi = document.querySelector(".data-section");

window.addEventListener("scroll", function () {
    document.querySelector(".nav-blur").classList.remove("menuon");
    let value = window.scrollY;
    if (window.scrollY > 20) {
        document.querySelector(".nav-blur").classList.add("top");
        // document.querySelector(".burger").classList.add("burger-top");
    }
    else {
        document.querySelector(".nav-blur").classList.remove("top");
        // document.querySelector(".burger").classList.remove("burger-top");
    }
    // parallax.style?.top = value * 0.042 + 'px';
})

const menu_btn = document.getElementById("menubtn");
menu_btn.addEventListener("click", function () {
    document.querySelector(".nav-blur").classList.toggle("menuon");
    document.querySelector(".menu-btn i").classList.toggle("menuon");
})


const touch = document.querySelectorAll(".test, .data-section")
touch.forEach(el => el.addEventListener('click', function () {
    document.querySelector(".nav-blur").classList.remove("menuon");
}))



const navbaroption = {
    rootMargin: "100px 0px 0px 0px"
};

window.addEventListener('DOMContentLoaded', testcontent);

function testcontent() {
    const testoptions = {
        rootMargin: '0px 0px 200px 0px'
    }

    const testobserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("showtest");
                document.querySelector(".fh-btn").classList.add("fhh-btn-show");
                document.querySelector(".second-half").classList.add("test-img-show");
                observer.unobserve(entry.target);
            } else {
                return;
            }
        })
    }, testoptions);

    const text = document.querySelectorAll(".first-half p");
    text.forEach(el => testobserver.observe(el));
}




let vh = (window.innerHeight + 150) * 0.01;
document.documentElement.style.setProperty('--vh', vh + 'px');



const g = document.querySelectorAll(".item");
const videoPlayer = document.querySelector(
    ".row .row_1 .youtube_video iframe"
);

const vqideo = (videoid, aactive) => {
    console.log(aactive);
    let videoUrl = `https://www.youtube.com/embed/${videoid}?rel=0`;
    videoPlayer.setAttribute("src", videoUrl);
    aactive.classList.add("active");

};

g.forEach((v) => {
    v.addEventListener("click", () => {
        let ter = document.querySelector(".active");
        ter.classList.remove("active");
        vqideo(v.children[0].dataset.id, v);
    });
});




const titleobserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("data-title-text-show");
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove("data-title-text-show");
        }
    })
}, {
    rootMargin: '-100px',
});

const text = document.querySelector(".data-title-text");
titleobserver.observe(text);


const hero_text_observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("dsmall-text-show");
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove("dsmall-text-show");
        }
    })
}, {
    rootMargin: '-100px',
});

const hero_text = document.querySelector(".dsmall-text");
hero_text_observer.observe(hero_text);

const video_text_observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add("video-main-row-detail-p");
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove("video-main-row-detail-p");
        }
    })
}, {
    rootMargin: '-100px',
});

const video_text = document.querySelectorAll(".details p");
video_text.forEach(el => video_text_observer.observe(el));

