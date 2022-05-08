

var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
const controller = new ScrollMagic.Controller();



tl.from(".intro1_p", .3, {x:0, opacity: 0});
tl.from(".intro1_pic", 1, {x:-100, opacity: 0});


tl2.from(".intro2_p", .3, {x:0, opacity: 0});
tl2.from(".intro2_pic", 1, {x:100, opacity: 0});


tl3.from(".lesson-notice", 1, {y:50, opacity: 0});






const scene = new ScrollMagic.Scene({
    triggerElement: ".intro1",
})
    .setTween(tl)
        .addTo(controller);


const scene2 = new ScrollMagic.Scene({
    triggerElement: ".intro2"
})
    .setTween(tl2)
        .addTo(controller);


const scene3 = new ScrollMagic.Scene({
    triggerElement: ".lesson-fee"
})
    .setTween(tl3)
        .addTo(controller);

        



function updatePercentage(){
    tl.progress();
}
