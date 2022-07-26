let parallax = document.getElementById("main-bg");

window.addEventListener("scroll", function () {
    let value = window.scrollY;

    if (value>5) {
        document.querySelector(".nav-blur,.nav-bg").classList.remove("top");
    }
    else{
        document.querySelector(".nav-blur,.nav-bg").classList.add("top");
    }

    parallax.style.top = value * 0.042 + 'px';
})

let vh= (window.innerHeight + 150) * 0.01;
document.documentElement.style.setProperty('--vh', vh +'px');





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
        // act.style.border = "0.2rem solid #393434";
        // act.children[0].style.boxShadow = "none";
        // act.children[0].style.borderRadius = "4px"
        let ter = document.querySelector(".active");
        ter.classList.remove("active");
        vqideo(v.children[0].dataset.id, v);
    });
});



