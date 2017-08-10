
$(document).ready(function(){

	var miUrl = 'https://netflixroulette.net/api/api.php?director=';

	var directores = ['Quentin%20Tarantino','Stephen%20King','Tim%20Burton']
	
	directores.forEach(function(e){
		$.ajax({
		url: miUrl + e,
		type: 'GET',
		dataType: 'json'
		//data: {param1: 'value1'},
	})
	.done(function(response){
		response.forEach(function(element){
			/*$(".container").append('<div id="' + element.show_id + '">' + '<p>Titulo: ' + element.show_title + '</p>' + '<p>Año: ' + element.release_year + '</p>' + '<p>Categoría: ' + element.category + '</p>' + '</p>' + '<p>Duración: ' + element.runtime + '</p>' + '<p>Director: ' + element.director + '</p>' + '</div>');*/
			
			$("#boton").click(function(){
				var elegir = $("select").val();
			if (elegir==element.category){
				$(".category").append('<p>Titulo: ' + element.show_title + '</p>');
			}
			})
			
		});
	})
	.fail(function() {
		console.log("error");
	})
	/*.always(function() {
		console.log("complete");
	});*/
	});

})