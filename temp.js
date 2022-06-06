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
    $("#maxnavigationbarcontainer").css('background', 'rgba(0,0,0, 0.7)');
    $("#maxnavigationbarcontainer").css('border-bottom', '0px ');
    $("#rightnav").css('margin-top', '10px');
    $("#rightnav1").css('padding', '20px 45px 14px 45px');
    $("#rightnav2").css('padding', '20px 45px 14px 45px');
    $("#rightnav3").css('padding', '20px 45px 14px 45px');
    $("#rightnav4").css('padding', '20px 45px 14px 45px');
    $("#rightnav").css('transition', '0.7s ease');
    $("#rightestnavh5").css('padding-top', '5px');
    $("#rightestnavh5").css('color', 'rgb(60,60,60)');
    $("#rightestnavh5").css('transition', '0.7s ease');
    $("#hamburger-3").css('top', '4px');
    $("#hamburger-3").css('transition', '0.7 ease');
    
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
    $("#hamburger-3").css('top', '25px');
    $("#hamburger-3").css('transition', '0.2 ease');
	}
});












