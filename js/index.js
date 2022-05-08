// preventDefault

let btn_news = document.querySelectorAll(".btn_news");

for(let i = 0; i < btn_news.length; i++ ){

        btn_news[i].addEventListener("click", function(e){
        e.preventDefault();
    });
};



// animation

var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
const controller = new ScrollMagic.Controller();



tl.from(".header-report", 2, {y:200, opacity: 0});


tl2.from(".news-block", .5, {x:0, opacity: 0});


tl3.from(".about-h2", 1, {opacity: 0, scale: 1});
tl3.from(".about-content", .8, {x:100, opacity: 0});


tl4.from(".yt", .8, {x:100, opacity: 0});
tl4.from(".yt-video", .8, {x:-100, opacity: 0});




const scene = new ScrollMagic.Scene({
    triggerElement: ".header-top"
})
    .setTween(tl)
        .addTo(controller);


const scene2 = new ScrollMagic.Scene({
    triggerElement: ".main-news"
})
    .setTween(tl2)
        .addTo(controller);


const scene3 = new ScrollMagic.Scene({
    triggerElement: ".about-bg"
})
    .setTween(tl3)
        .addTo(controller);


const scene4 = new ScrollMagic.Scene({
    triggerElement: ".yt"
})
    .setTween(tl4)
        .addTo(controller);
        


function updatePercentage(){
    tl.progress();
}



