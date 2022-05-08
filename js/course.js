

var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();

const controller = new ScrollMagic.Controller();


tl.from(".map-icon", 1, {y:100, opacity: 0});


tl2.from("#infotop", .8, {x:-100, opacity: 0});
tl2.from("#infodown", 1, {opacity: 0, scale:1});




const scene = new ScrollMagic.Scene({
    triggerElement: ".map-bg"
})
    .setTween(tl)
        .addTo(controller);


const scene2 = new ScrollMagic.Scene({
    triggerElement: ".course-info"
})
    .setTween(tl2)
        .addTo(controller);

        



function updatePercentage(){
    tl.progress();
}
