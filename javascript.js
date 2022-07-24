const parallex = document.getElementById("biop");

// window.addEventListener("scroll", function () {
//     let offset = window.pageYOffset;

//     console.log(parallex.style.backgroundPositionY);
    
//     // parallex.style.backgroundPositionY = r*0.7 + "px";
//     parallex.style.backgroundPositionY= (offset * 0.4) +"%";
//     // console.log(offset);
// })


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