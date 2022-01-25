changeBestBG();

var swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    },
    speed: 800,
});

jQuery(function(){
    jQuery("#P1").YTPlayer();
});


$(window).resize(function() {
    changeBestBG();
});


function changeBestBG() {
    var width = $(window).width();

    if(width <= 767) {
        $('.best_background .sub_img').remove();
        $(".best_background").css({
            "background":"url(../img/test_img.png)",
            "background-size": "cover",
            "background-position":"center",
            "height": "500px"
        }); 		

    }
}