//     $(window).scroll(function(){
//         if($(window).scrollTop()>=350){
//            $(this).add('#header');
//             $("#header").addClass('active');
//         }else{
//          $("#header").removeClass('active')
//         }
//      })
// console.log("asa")
// $(".bar").click(function(){
//     $(".menu").css({
//         right:0,
//         width:"100%",
//         transition:"all .4s ease"
//     })
// })
// $(".item").on("mouseover",function()
// {
//    $(this).find('.leftIcon').css({
//         left:'-5px',
//         'font-size':'50px',
//         top:'0px'
//     })
//     $(this).find('.icon').css("right",'10px')
//     $(this).find('.textp').css('left','20px')
// }
// )
// $(".item").on("mouseout",function(){
//     $(".leftIcon").css({
//         'font-size':'20px',
//         left:'-25px',
//         top:'10px'
//     })
//     $('.icon').css("right",'20px')
//     $('.textp').css('left','0px')
// })
// var a=document.getElementsByClassName('accordion');
// for(var i=0;i<a.length;i++){
//     a[i].nextElementSibling
// }
// $('.accordion').click(function(){
//     $(this).siblings('.panel').slideUp(200)
//     $(".panel").slideUp(200);
//     $(this).siblings(".panel").slideDown(200);
// })
// $('.b').click(function(){
//     $('.a1').slideDown(100);
// })
 $(".set > a").on("click", function() {
     if ($(this).hasClass("active")) {
        // $(this).removeClass("active");

        // $(this).siblings('content').slideUp(200);

     }else{
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
          .siblings(".content")
          .slideDown(200);
     }
 })