const parallex = document.getElementById("biop");

// window.addEventListener("scroll", function () {
//     let offset = window.pageYOffset;

//     console.log(parallex.style.backgroundPositionY);
    
//     // parallex.style.backgroundPositionY = r*0.7 + "px";
//     parallex.style.backgroundPositionY= (offset * 0.4) +"%";
//     // console.log(offset);
// })

function adjustBackgrounds() {
    windowHeight = window.document.documentElement.clientHeight;
    $('#section-01-home').css('min-height', windowHeight);
}     
// Triggers Sizing on Load (783 = 800px accounting for 17px of scrollbar)
if ($(window).width() <= 700) {
    adjustBackgrounds();
} else {

}
// Triggers Sizing on Browser Resize (783 = 800px accounting for 17px of scrollbar)
$(window).resize(function() {
  if ($(window).width() <= 700) {
    adjustBackgrounds();
  } else {

  }
}); 


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