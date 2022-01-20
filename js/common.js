/* nav 메뉴에 마우스 올렸을때 */
$(".gnb_menu .nav li").on({
    "mouseenter" : function() {
        $('#gnb_sub_container').show();
    }
});


/* 액티브 바 show */

$(".active_bar").show();

// 선택된 li의 left와 width를 구해 active_bar의 위치와 길이를 조절한다
var listLeft = $(this).offset().left550;
var listWidth = $(this).width();

$(".active_bar").width(listWidth);
$(".active_bar").offset({left: listLeft + 52}); // li에 padding이 있었으로 17을 더 더해준다.

//   /* 하위 메뉴 안보이게 하기 */

$("#gnb_sub_container").on({
    "mouseleave" : function() {
        $('#gnb_sub_container').hide();
    }
    
});

