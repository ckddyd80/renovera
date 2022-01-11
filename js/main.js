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
    jQuery("#[playerID]").YTPlayer();
});