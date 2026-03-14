"use strict";
$(document).ready( () => {
    let nextSlide = $("#slides img:first-child");
        
    // start slide show
    setInterval( () => {   
        $("#caption").hide(900);
        $("#slide").slideUp(1000,
            () => {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt");


                $("#slide").attr("src", nextSlideSource).slideDown(1800);                    
                $("#caption").text(nextCaption).show(2000);
            });    // end fadeOut()
    },
    5000);         // end setInterval()
});