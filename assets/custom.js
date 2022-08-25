// let objDiv = document.getElementById("div#shopify-section-template--14513175822410__slideshow");

// objDiv.scrollTop = objDiv.scrollHeight;
// console.log(objDiv.scrollTop = objDiv.scrollHeight);
$(document).ready(function(){
// 	 var height = $("div#shopify-section-template--14513175822410__slideshow").height();
//   var scrollPos = 0;
//     var Counter = 0;
//       $(window).scroll(function(){
//           var scrollPosCur = $(this).scrollTop();
//         if (scrollPosCur > scrollPos) {
//             Counter -= 1;
//         } else {
//             Counter += 1;
//         }
//         scrollPos = scrollPosCur;
//         console.log(scrollPos);
         
//       })
//       $("div#shopify-section-template--14513175822410__slideshow").height(height);
      

// $(window).scroll(function() {
//   var scrollTop = $(this).scrollTop();

//   $('.overlay-wr').css({
//     opacity: function() {
//       var elementHeight = height;
//       return 0 + (elementHeight - scrollTop) / elementHeight;
//        alert(elementHeight);
//     }
//   });
 
// });
  
$(document).ready(function() {
  var height = $("div#shopify-section-template--14513175822410__slideshow").height();
    $('body').addClass('hidden_way');
   

    $(document).scroll(function(e){
        opacidade();
      $(window).scroll(function(){
        var scrollPosCur = $(this).scrollTop();
        if (scrollPosCur >= 700) {
            $('body').removeClass('hidden_way');
          	
        } else {
            $('body').addClass('hidden_way');
          	
        }
        scrollPos = scrollPosCur;
        console.log(scrollPos);
         
      })
    });

    var element = $('.overlay-wr');
    var elementHeight = element.outerHeight();

    function opacidade(){
        var opacityPercent = window.scrollY   / height;
        console.log(window.scrollY, opacityPercent);
            element.css('opacity', 1 - opacityPercent - 0.2);
    }
});
  
  });