/* nav 메뉴에 마우스 올렸을때 */
$(".gnb_menu .nav li").on({
    "mouseenter" : function() {
        $('#gnb_sub_container').show();
    }
});

$("#gnb_sub_container").on({
    "mouseleave" : function() {
        $('#gnb_sub_container').hide();
    }
    
});

$(".mobile.hamburger").on({
    "click" : function() {
        if ($("#mobile_menu").is(":visible")) {
            $('#mobile_menu').hide();
        } else {
            $('#mobile_menu').show();
        }
    }
});
