// ----- hamburger -----

const hambur = document.querySelector(".hambur");
const menu_open = document.querySelectorAll(".menu_li");


hambur.addEventListener("click", function(){


    hambur.classList.toggle("active");
    
    
    for(i = 0; i < menu_open.length; i++ ){
        
        menu_open[i].classList.toggle("menu_open");
    };

});

