function cakeSlide( ) {
	var cakeBox = document.getElementsByClassName(“cupcake-photo");
	var expand = cakeBox.style.width = 500px;
    //when the cakeBox is clicked, expand to a lerger box
	cakeBox.addEventListener(“click”, expand);
};

cakeSlide( );

    
    