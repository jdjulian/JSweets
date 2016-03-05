var cupcakeBox = document.getElementById("cupcake-photo");
var cupcakes = document.getElementById("cupcakes"); 

var cakeBox = document.getElementById("cake-photo");
var cakes = document.getElementById("cakes");

var cakePopBox = document.getElementById("cakepop-photo");
var cakePops = document.getElementById("cake-pops");
var otherSweetsBox = document.getElementById("other-photo");
var otherSweets = document.getElementById("other-sweets");

var cupcakeSlide = document.getElementById("cupcake-photo").addEventListener("click", function showCupcakeSlide() {
	cupcakeBox.style.width = "800px";
    cupcakeBox.style.height = "500px";
    cupcakes.style.visibility = "hidden";
    cakeBox.style.visibility = "hidden";
    cakePopBox.style.visibility = "hidden";
    otherSweetsBox.style.visibility = "hidden";

});

var cakeSlide = document.getElementById("cake-photo").addEventListener("click", function showCakeSlide() {
	cakeBox.style.width = "800px";
    cakeBox.style.height = "500px";
    cakes.style.display = "none";
    cupcakeBox.style.display = "none";
    cakePopBox.style.display = "none";
    otherSweetsBox.style.display = "none";
    
});

var otherSweetSlide = document.getElementById("other-photo").addEventListener("click", function showOtherSlide() {
	otherSweetsBox.style.width = "800px";
    otherSweetsBox.style.height = "500px";
    otherSweets.style.display = "none";
    cupcakeBox.style.display = "none";
    cakePopBox.style.display = "none";
    cakeBox.style.display = "none";   
});

var cakePopSlide = document.getElementById("cakepop-photo").addEventListener("click", function cakePopSlide() {
	cakePopBox.style.width = "800px";
    cakePopBox.style.height = "500px";
    cakePops.style.display = "none";
    cupcakeBox.style.display = "none";
    otherSweetsBox.style.display = "none";
    cakeBox.style.display = "none";   
});
                                                    

    
    