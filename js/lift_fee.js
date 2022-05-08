
let btn_early = document.querySelector(".btn_early")
let btn_regular = document.querySelector(".btn_regular")
let btn_spring = document.querySelector(".btn_spring")
let btn_night = document.querySelector(".btn_night")


btn_early.addEventListener("click", function(e){

    e.preventDefault();

    btn_early.classList.remove("btn_color_ch");
    btn_regular.classList.remove("btn_color_ch");
    btn_spring.classList.remove("btn_color_ch");
    btn_night.classList.remove("btn_color_ch");
 
    btn_early.classList.toggle("btn_color_ch");


    document.getElementById("fee_pic").src="../IMG/lift_fee/fee-ear_spr.png";
})



btn_regular.addEventListener("click", function(e){

    e.preventDefault();

    btn_early.classList.remove("btn_color_ch");
    btn_regular.classList.remove("btn_color_ch");
    btn_spring.classList.remove("btn_color_ch");
    btn_night.classList.remove("btn_color_ch");

    btn_regular.classList.toggle("btn_color_ch");


    document.getElementById("fee_pic").src=("../IMG/lift_fee/fee-reg.png");
})



btn_spring.addEventListener("click", function(e){

    e.preventDefault();

    btn_early.classList.remove("btn_color_ch");
    btn_regular.classList.remove("btn_color_ch");
    btn_spring.classList.remove("btn_color_ch");
    btn_night.classList.remove("btn_color_ch");

    btn_spring.classList.toggle("btn_color_ch");


    document.getElementById("fee_pic").src=("../IMG/lift_fee/fee-ear_spr.png");
})



btn_night.addEventListener("click", function(e){

    e.preventDefault();

    btn_early.classList.remove("btn_color_ch");
    btn_regular.classList.remove("btn_color_ch");
    btn_spring.classList.remove("btn_color_ch");
    btn_night.classList.remove("btn_color_ch");

    btn_night.classList.toggle("btn_color_ch");


    document.getElementById("fee_pic").src=("../IMG/lift_fee/fee-np.png");
})