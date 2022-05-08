// ----- hamburger -----

const hambur = document.querySelector(".hambur");
const menu_open = document.querySelectorAll(".menu_li");


hambur.addEventListener("click", function(){

    hambur.classList.toggle("active");
    
    for(let i = 0; i < menu_open.length; i++ ){
        
        menu_open[i].classList.toggle("menu_open");
    };
});


// --------------- footer ---------------

// preventDefault

let btn_sns = document.querySelectorAll(".sns");


for(let i = 0; i < btn_sns.length; i++ ){

        btn_sns[i].addEventListener("click", function(e){
        e.preventDefault();
    }); 
};


// sns_icon

let yt = document.querySelector("#yt")
let twitter = document.querySelector("#twitter")
let ig = document.querySelector("#ig")
let fb = document.querySelector("#fb")


yt.addEventListener("mouseover",function(){
    document.getElementById("yt").src="../IMG/sns_icon/yt_icon_c.png";
})
yt.addEventListener("mouseout",function(){
    document.getElementById("yt").src="../IMG/sns_icon/yt_icon.png";  
})


twitter.addEventListener("mouseover",function(){
    document.getElementById("twitter").src=("../IMG/sns_icon/twitter_icon_c.png");
})
twitter.addEventListener("mouseout",function(){
    document.getElementById("twitter").src=("../IMG/sns_icon/twitter_icon.png");  
})


ig.addEventListener("mouseover",function(){
    document.getElementById("ig").src=("../IMG/sns_icon/ig_icon_c.png");
})
ig.addEventListener("mouseout",function(){
    document.getElementById("ig").src=("../IMG/sns_icon/ig_icon.png");  
})


fb.addEventListener("mouseover",function(){
    document.getElementById("fb").src=("../IMG/sns_icon/fb_icon_c.png");
})
fb.addEventListener("mouseout",function(){
    document.getElementById("fb").src=("../IMG/sns_icon/fb_icon.png");  
})


