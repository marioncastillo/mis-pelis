$(document).ready(function(){
	$("#login").click(function(e){
			e.preventDefault();
			window.location = "login.html";
		});

$("#inicia").click(function(e){

		function isEmail(email) {
  		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 		 return regex.test(email);
		};

		
		if ($("#email").val() == "") {

			alert("ingresa tu email")
		}

		if (isEmail($("#email").val()) == false ) {
			e.preventDefault();
			alert("tu email no es valido")
		
		}
		if ($("#clave").val().length != 8) {
			alert("tu clave debe ser de 8 digitos")
		}

		 else {
			e.preventDefault();
			window.location = "movies.html";
		}
	});
});