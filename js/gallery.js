$(document).ready(function(){
    $(".cupcake-list").css('display', 'none');
    $("#cupcake-photo").on('click', function(){
        if ($(window).width() > 640) {
             $("#cupcake-slider").find('.gallery').css('display', 'block');
             $("#cake-photo").css('display', 'none');
             $("#cakepop-photo").css('display', 'none');
             $("#other-photo").css('display', 'none');
             $("#cupcake-photo").css('display', 'none');
             $(".close").on('click', function(){
                $("#cupcake-slider").hide();
                $("#cake-photo").show();
                $("#cakepop-photo").show();
                $("#other-photo").show();
                $("#cupcake-photo").show();   
             });
         } else {
            $(".cupcake-list").css('display', 'block');
            $("#cakepop-photo").css('display', 'none');
            $("#other-photo").css('display', 'none');
            $("#cupcake-photo").css('display', 'none');
            $("#cake-photo").css('display', 'none');
            $(".cupcake-close").on('click', function(){
                $(".cupcake-list").hide();
                $("#cake-photo").show();
                $("#cakepop-photo").show();
                $("#other-photo").show();
                $("#cupcake-photo").show();
                $("#cupcake-slider").hide();
                $("#cake-slider").hide();
                $("#cakepop-slider").hide();
                $("#other-slider").hide();
             }); 
         };        
    });
});

$(document).ready(function(){
    $(".cake-list").css('display', 'none');
    $("#cake-photo").on('click', function(){
        if ($(window).width() > 640) {
             $("#cake-slider").find('.gallery').css('display', 'block');
             $("#cake-photo").css('display', 'none');
             $("#cakepop-photo").css('display', 'none');
             $("#other-photo").css('display', 'none');
             $("#cupcake-photo").css('display', 'none');
             $(".sssnext").show();
             $(".sssprev").show();
             $(".close").on('click', function(){
                 $("#cake-slider").hide();
                 $("#cake-photo").show();
                 $("#cakepop-photo").show();
                 $("#other-photo").show();
                 $("#cupcake-photo").show();   
             });
        } else {
            $(".cake-list").css('display', 'block');
            $("#cakepop-photo").css('display', 'none');
            $("#other-photo").css('display', 'none');
            $("#cupcake-photo").css('display', 'none');
            $("#cake-photo").css('display', 'none');
            $(".cupcake-close").on('click', function(){
                $(".cake-list").hide();
                $("#cake-photo").show();
                $("#cakepop-photo").show();
                $("#other-photo").show();
                $("#cupcake-photo").show();
                $("#cupcake-slider").hide();
                $("#cake-slider").hide();
                $("#cakepop-slider").hide();
                $("#other-slider").hide();
             }); 
         };        
    });
});
         
$(document).ready(function(){
    $(".other-list").css('display', 'none');
    $("#other-photo").on('click', function(){
        if ($(window).width() > 640) {
             $("#other-slider").find('.gallery').css('display', 'block');
             $("#cake-photo").css('display', 'none');
             $("#cakepop-photo").css('display', 'none');
             $("#other-photo").css('display', 'none');
             $("#cupcake-photo").css('display', 'none');
             $(".close").on('click', function(){
                 $("#other-slider").hide();
                 $("#cake-photo").show();
                 $("#cakepop-photo").show();
                 $("#other-photo").show();
                 $("#cupcake-photo").show();   
             });
        } else {
            $(".other-list").css('display', 'block');
            $("#cakepop-photo").css('display', 'none');
            $("#other-photo").css('display', 'none');
            $("#cupcake-photo").css('display', 'none');
            $("#cake-photo").css('display', 'none');
            $(".cupcake-close").on('click', function(){
                $(".other-list").hide();
                $("#cake-photo").show();
                $("#cakepop-photo").show();
                $("#other-photo").show();
                $("#cupcake-photo").show();
                $("#cupcake-slider").hide();
                $("#cake-slider").hide();
                $("#cakepop-slider").hide();
                $("#other-slider").hide();
             }); 
         };        
    });
});
    
$(document).ready(function(){
    $(".cakepop-list").css('display', 'none');
    $("#cakepop-photo").on('click', function(){
        if ($(window).width() > 640) {    
             $("#cakepop-slider").find('.gallery').css('display', 'block');
             $("#cake-photo").css('display', 'none');
             $("#cakepop-photo").css('display', 'none');
             $("#other-photo").css('display', 'none');
             $("#cupcake-photo").css('display', 'none');
             $(".close").on('click', function(){
                $("#cakepop-slider").hide();
                $("#cake-photo").show();
                $("#cakepop-photo").show();
                $("#other-photo").show();
                $("#cupcake-photo").show();   
             });
         } else {
            $(".cakepop-list").css('display', 'block');
            $("#cakepop-photo").css('display', 'none');
            $("#other-photo").css('display', 'none');
            $("#cupcake-photo").css('display', 'none');
            $("#cake-photo").css('display', 'none');
            $(".cupcake-close").on('click', function(){
                $(".cakepop-list").hide();
                $("#cake-photo").show();
                $("#cakepop-photo").show();
                $("#other-photo").show();
                $("#cupcake-photo").show();
                $("#cupcake-slider").hide();
                $("#cake-slider").hide();
                $("#cakepop-slider").hide();
                $("#other-slider").hide();
             }); 
         };        
    });
});
         
         $(function($) {
             $('.slider').sss({
                 slideShow : true, // Set to false to prevent SSS from automatically animating.
                 startOn : 0, // Slide to display first. Uses array notation (0 = first slide).
                 transition : 400, // Length (in milliseconds) of the fade transition.
                 speed : 3500, // Slideshow speed in milliseconds.
                 showNav : true // Set to false to hide navigation arrows.
             });
         });                                                