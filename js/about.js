var cupcakeBox = $("#cupcake-photo");
var cupcakes = $("#cupcakes"); 

var cakeBox = $("#cake-photo");
var cakes = $("#cakes");

var cakePopBox = $("#cakepop-photo");
var cakePops = $("#cake-pops");
var otherSweetsBox = $("#other-photo");
var otherSweets = $("#other-sweets");

var cupcakeSlide = $("#cupcake-photo").click(function showCupcakeSlide() {
	cupcakeBox.css("width", "800px");
    cupcakeBox.css("height", "500px");
    cupcakes.hide();
    cakeBox.hide();
    cakePopBox.hide();
    otherSweetsBox.hide();
});

var cakeSlide = $("#cake-photo").click(function showCakeSlide() {
	cakeBox.css("width", "800px");
    cakeBox.css("height", "500px");
    cupcakes.hide();
    cakeBox.hide();
    cakePopBox.hide();
    otherSweetsBox.hide();  
});

var otherSweetSlide = $("#other-photo").click(function showOtherSlide() {
	otherSweetsBox.css("width", "800px");
    otherSweetsBox.css("height", "500px");
    cupcakes.hide();
    cakeBox.hide();
    cakePopBox.hide();
    otherSweetsBox.hide();   
});

var cakePopSlide = $("#cakepop-photo").click(function cakePopSlide() {
	cakePopBox.css("width", "800px");
    cakePopBox.css("height", "500px");
    cupcakes.hide();
    cakeBox.hide();
    cakePopBox.hide();
    otherSweetsBox.hide();   
});
      