$(document).ready(function() {
	// mostrar datos de usuario desde Localstorage
	usernameStorage();
	nameStorage();
	countryStorage();
});

function usernameStorage() {
	if (localStorage.username != "") {
		$("#username").html(localStorage.username);
	} else {
		$("#username").html("Heisenberg");
	}
}
function nameStorage() {
	if (localStorage.name != "") {
		$("#name").html(localStorage.name);
	} else {
		$("#name").html("Walter White");
	}
}
function countryStorage() {
	if (localStorage.country != "") {
		$("#country").html(localStorage.country);
	} else {
		$("#country").html("Middle of the desert");
	}
}