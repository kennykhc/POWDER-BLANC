

var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
const controller = new ScrollMagic.Controller();


tl.from(".main-snow", 1, {x:0, opacity: 0});
tl.from("#infoa", .5, {y:100, opacity: 0});
tl.from(".main-weather", 1, {x:-100, opacity: 0});


tl2.from("#lift_pic", 1, {x:100, opacity: 0});
tl2.from(".lift", .5, {opacity: 0 ,scale: 0});
tl2.from(".green", .5, {opacity: 0 ,scale: 0});
tl2.from(".red", .5, {opacity: 0 ,scale: 0});
tl2.from(".black", .5, {opacity: 0 ,scale: 0});


tl3.from("#cam_title", .8, {x:50, opacity: 0});
tl3.from(".c-left", .5, {opacity: 0 ,scale: 1});
tl3.from(".c-right", .5, {opacity: 0 ,scale: 1});





const scene = new ScrollMagic.Scene({
    triggerElement: ".main-bg",
    // triggerHook: "onLeave",
    // duration: "100%"
})
    // .setPin(".main-bg")
    .setTween(tl)
        .addTo(controller);


const scene2 = new ScrollMagic.Scene({
    triggerElement: ".lift_course"
})
    .setTween(tl2)
        .addTo(controller);


const scene3 = new ScrollMagic.Scene({
    triggerElement: ".live_cam"
})
    .setTween(tl3)
        .addTo(controller);

        



function updatePercentage(){
    tl.progress();
}
