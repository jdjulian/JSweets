        $("#cupcake-photo").on('click', function(){
             $("#cupcake-slider").find('.gallery').css('display', 'block');
             $("#cake-photo").css('display', 'none');
             $("#cakepop-photo").css('display', 'none');
             $("#other-photo").css('display', 'none');
             $("#cupcake-photo").css('display', 'none');
         });
         
         $("#cake-photo").on('click', function(){
             $("#cake-slider").find('.gallery').css('display', 'block');
             $("#cake-photo").css('display', 'none');
             $("#cakepop-photo").css('display', 'none');
             $("#other-photo").css('display', 'none');
             $("#cupcake-photo").css('display', 'none');
         });
         
         $("#other-photo").on('click', function(){
             $("#other-slider").find('.gallery').css('display', 'block');
             $("#cake-photo").css('display', 'none');
             $("#cakepop-photo").css('display', 'none');
             $("#other-photo").css('display', 'none');
             $("#cupcake-photo").css('display', 'none');
         });
         
         $("#cakepop-photo").on('click', function(){
             $("#cakepop-slider").find('.gallery').css('display', 'block');
             $("#cake-photo").css('display', 'none');
             $("#cakepop-photo").css('display', 'none');
             $("#other-photo").css('display', 'none');
             $("#cupcake-photo").css('display', 'none');
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

    
    