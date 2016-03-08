    
         $("#cupcake-photo").on('click', function(){
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
         });
         
         $("#cake-photo").on('click', function(){
             $("#cake-slider").find('.gallery').css('display', 'block');
             $("#cake-photo").css('display', 'none');
             $("#cakepop-photo").css('display', 'none');
             $("#other-photo").css('display', 'none');
             $("#cupcake-photo").css('display', 'none');
             $(".sssnext").show();
             $("#.sssprev").show();
             $(".close").on('click', function(){
                 $("#cake-slider").hide();
                 $("#cake-photo").show();
                 $("#cakepop-photo").show();
                 $("#other-photo").show();
                 $("#cupcake-photo").show();   
             });
         });
         
         $("#other-photo").on('click', function(){
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
         });
         
         $("#cakepop-photo").on('click', function(){
             $("#cakepop-slider").find('.gallery').css('display', 'block');
             $("#cake-photo").css('display', 'none');
             $("#cakepop-photo").css('display', 'none');
             $("#other-photo").css('display', 'none');
             $("#cupcake-photo").css('display', 'none');
             $(".cakepop-slder").on('click', function(){
                 $("#cupcake-slider").hide();
                 $("#cake-photo").show();
                $("#cakepop-photo").show();
                $("#other-photo").show();
                $("#cupcake-photo").show();   
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

    
    