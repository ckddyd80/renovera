// /* nav 메뉴에 마우스 올렸을때 */
// $(".gnb_menu .nav li").on({
//     "mouseenter" : function() {
//         $('#gnb_sub_container').show();
//     }
// });

// $("#gnb_sub_container").on({
//     "mouseleave" : function() {
//         $('#gnb_sub_container').hide();
//     }
    
// });

//     /* 모바일 햄버거 메뉴 클릭시*/

//     $(".trigger").on({  
//         "click" : function(){
//             // 햄버거 메뉴 버튼이 보일때 (햄버거 메뉴가 visible 상태인가?로 판단) 
//             if($(".mobile.hamburger").is(":visible")) {
//                 /* 모바일 닫기 버튼 show */
//                 $(".mobile.hamburger").hide();
//                 $(".mobile.close").show();

//                 /* 모바일 전체 메뉴 show */
//                 $("#main_header").height(60);
//                 $("#main_content").hide();
//                 $("#main_footer").hide();

//                 $("#mobile_menu").empty(); // #mobile_menu 하위 태그 초기화
//                 $(".nav li").eq(3).show();    // mobile에서만 보이는 메뉴 2개 추가
//                 $(".nav li").eq(4).show();

//                 var nav = $(".nav").clone(); 
//                 $("#mobile_menu").append(nav);
//                 $("#mobile_menu").show();
                
//             } else {
//                 // 닫기 메뉴 버튼이 보일때
//                 /* 모바일 햄버거 버튼 show */
//                 $(".mobile.hamburger").show();
//                 $(".mobile.close").hide();

//                 /* 모바일 전체 메뉴 show */
//                 $("#main_header").height(390);
//                 $("#main_header #search_box").show();
//                 $("#main_content").show();
//                 $("#main_footer").show();
//                 $("#mobile_menu").hide();

//             }
        
//         }
//     });

//     $(window).resize(function() {
//         var width = $(window).width();
    
//         if(width >= 767) {
//             $(".nav li").eq(3).hide();   
//             $(".nav li").eq(4).hide();
//         }

//         if ($("#mobile_menu").is(":visible")) {
//             $(".mobile.hamburger").show();
//             $(".mobile.close").hide();

//             $("#main_header").height(390);
//             $("#main_header #search_box").show();
//             $("#main_content").show();
//             $("#main_footer").show();
//             $("#mobile_menu").hide();
//         }
    
//     });



