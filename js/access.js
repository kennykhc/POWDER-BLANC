

var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
const controller = new ScrollMagic.Controller();



tl.from(".bus_pich3", .8, {x:-50, opacity: 0});
tl.from(".bus_p", .3, {x:0, opacity: 0});


tl2.from(".car_pich3", .8, {x:-50, opacity: 0});
tl2.from(".car_p", .3, {x:0, opacity: 0});


tl3.from(".train_pich3", .8, {x:-50, opacity: 0});
tl3.from(".train_p", .3, {x:0, opacity: 0});





const scene = new ScrollMagic.Scene({
    triggerElement: ".trans_bus"
})
    .setTween(tl)
        .addTo(controller);


const scene2 = new ScrollMagic.Scene({
    triggerElement: ".trans_car"
})
    .setTween(tl2)
        .addTo(controller);


const scene3 = new ScrollMagic.Scene({
    triggerElement: ".trans_train"
})
    .setTween(tl3)
        .addTo(controller);

        



function updatePercentage(){
    tl.progress();
}
