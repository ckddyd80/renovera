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

// $(function(){
//     jQuery("#P1").YTPlayer()
// });


jQuery(function(){
    jQuery("#P1").YTPlayer();
});
