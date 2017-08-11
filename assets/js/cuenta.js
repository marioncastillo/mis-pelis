$(document).ready(function() {
	//solo letras numeros @ y . en el input
	$(document).on('keypress', '#email-input', function (event) {
	    var regex = new RegExp("^[a-z0-9@.]+$");
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    if (!regex.test(key)) {
	        event.preventDefault();
	        return false;
	    }
	});
	$("#create-account").on("click", function(e){
	    var name = $("#name-input").val();
	    var username = $("#username-input").val();
	    var email = $("#email-input").val();
	    var country = $("#country-input").val();

	    if( name == "" || username == "" || email == "" || country == "" ){
	        alert("No puede ingresar un campo vacío")
	    }
	    if( email.indexOf('@') == -1 ){
	        alert("Ingrese un correo válido");
	        e.preventDefault();
	    }
	    if( name != "" && 
	    	username != "" && 
	    	country != "" && 
	    	email.indexOf('@') != -1 ){
	    	localStorage.setItem("name", name);
	    	localStorage.setItem("username", username);
	    	localStorage.setItem("email", email);
	        localStorage.setItem("country", country);
	    } else {
	        e.preventDefault();
	    }
	});
});