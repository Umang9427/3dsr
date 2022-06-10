function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }



  /* Different URL Opens on mobile and PC in Minnavigationbar */
  function NavDynamicURL() {      
    var is_mobile = false;

    if( $('#rightnav').css('display')=='none') {
        is_mobile = true;       
    }

    // now I can use is_mobile to run javascript conditionally

    if (is_mobile == true) {
      openNav();
    }
    else{
      location.href='temp.html';
    }
 };


 

/* ------------------------------------------- On Scroll change NavBar ------------------------------------------------------ */
$(window).scroll(function () {
	var sc = $(window).scrollTop()
	if (sc > 100) {
		$("#maxnavigationbarcontainer").css('height', '50px');
    $("#minnavigationbarcontainer").css('height', '50px');
    $("#maxnavigationbarcontainer").css('transition', '0.7s ease');
    $("#minnavigationbarcontainer").css('transition', '0.7s ease');
    $("#maxnavigationbarcontainer").css('background', 'rgba(0,0,0, 0.6)');
    $("#maxnavigationbarcontainer").css('border-bottom', '0px ');
    $("#rightnav").css('margin-top', '10px');
    $("#rightnav1").css('padding', '20px 45px 14px 45px');
    $("#rightnav2").css('padding', '20px 45px 14px 45px');
    $("#rightnav3").css('padding', '20px 45px 14px 45px');
    $("#rightnav4").css('padding', '20px 45px 14px 45px');
    $("#rightnav").css('transition', '0.7s linear');
    $("#rightestnavh5").css('padding-top', '5px');
    $("#rightestnavh5").css('color', 'rgb(236,236,236)');
    $("#rightestnavh5").css('transition', '0.7s ease');
    $("#rightestnavh5").css('font-size', '18px');
    $("#hamburger-3").css('top', '4px');
    $("#hamburger-3").css('transition', '0.7 ease');
    $("#rightnav").css('font-size', '18px');
    
	} 
	else {
		$("#maxnavigationbarcontainer").css('height', '100px');
    $("#minnavigationbarcontainer").css('height', '100px');
    $("#maxnavigationbarcontainer").css('transition', '0.2s ease-in-out');
    $("#minnavigationbarcontainer").css('transition', '0.2s ease-in-out');
    $("#maxnavigationbarcontainer").css('background', 'linear-gradient(rgba(0,0,0, 0.2),rgba(0,0,0,0.3 ), rgba(0,0,0,0.2)');
    $("#maxnavigationbarcontainer").css('border-bottom', '1px solid rgb(232, 232, 232)');
    $("#rightnav").css('margin-top', '35px');
    $("#rightnav").css('transition', '0.2s ease');
    $("#rightnav1").css('padding', '40px 45px 39px 45px');
    $("#rightnav2").css('padding', '40px 45px 39px 45px');
    $("#rightnav3").css('padding', '40px 45px 39px 45px');
    $("#rightnav4").css('padding', '40px 45px 39px 45px');
    $("#rightestnavh5").css('padding-top', '30px');
    $("#rightestnavh5").css('transition', '0.2s ease');
    $("#rightestnavh5").css('color', 'rgb(236,236,236)');
    $("#rightestnavh5").css('font-size', '24px');
    $("#hamburger-3").css('top', '25px');
    $("#hamburger-3").css('transition', '0.2 ease');
    $("#rightnav").css('font-size', '24px');
	}
});







/* Hero Image Slider */

(function ($) {
  "use strict";

  //Page cursors

  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function (n) {
      (t.style.left = n.clientX + "px"),
        (t.style.top = n.clientY + "px"),
        (e.style.left = n.clientX + "px"),
        (e.style.top = n.clientY + "px"),
        (i.style.left = n.clientX + "px"),
        (i.style.top = n.clientY + "px");
    });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }
  s();
  for (
    var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
    a >= 0;
    a--
  ) {
    o(r[a]);
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }

  $(document).ready(function () {
    /* Hero Case study images */

    $(".case-study-name:nth-child(1)").on("mouseenter", function () {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(1)").addClass("show");
      $(".case-study-name:nth-child(1)").addClass("active");
    });
    $(".case-study-name:nth-child(2)").on("mouseenter", function () {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(2)").addClass("show");
      $(".case-study-name:nth-child(2)").addClass("active");
    });
    $(".case-study-name:nth-child(3)").on("mouseenter", function () {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(3)").addClass("show");
      $(".case-study-name:nth-child(3)").addClass("active");
    });
    $(".case-study-name:nth-child(1)").trigger("mouseenter");
  });
})(jQuery);
