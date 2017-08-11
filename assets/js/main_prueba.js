
/*$(document).ready(function(){

	var miUrl = 'https://netflixroulette.net/api/api.php?director=';

	var directores = ['Quentin%20Tarantino','Stephen%20King','Tim%20Burton','John%20Huston','Woody%20Allen','Martin%20Scorsese','David%20Lynch','Lars%20von%20Trier','Steven%20Spielberg'];
	
	directores.forEach(function(e){
		$.ajax({
		url: miUrl + e,
		type: 'GET',
		dataType: 'json'
		//data: {param1: 'value1'},
	})
	.done(function(response){
		response.forEach(function(element){
			$('.camj_movies-lista').append(
				'<li>' +
		          '<div class="container listado">' + 
		            '<div class="row">' + 
		              '<div class="col-sm-6 col-xs-6 pull-left" id="'+element.show_id+'">' + 
		                '<p class="val_titlepeli"><strong>' + element.show_title+ '</strong>' + element.release_year + '|' + element.category + '</p>' + 
		              '</div>' +
		              '<div class="col-sm-6 col-xs-6 pull-right">' + 
		                '<button id="val_movie__btn__favorites" type="button" class="btn btn-danger">Add favorites</button>' + 
		              '</div>' + 
		            '</div>' + 
		            '<div class="row">' +
		              '<div class="col">' + 
		                '<div class="col-sm-4 col-xs-4 pull-left">' + 
		                  '<p class="val_movie__icon"><i class="fa fa-clock-o" aria-hidden="true"></i> ' + element.runtime + '</p>' + 
		                '</div>' + 
		                '<div class="col-sm-4 col-xs-4 center-block">' + 
		                  '<p class="val_movie__icon">' + 
		                    '<i class="fa fa-film" aria-hidden="true"></i>' + 
		                    element.director + 
		                  '</p>' + 
		                '</div>' + 
		                '<div class="col-sm-4 col-xs-4 pull-right">' + 
		                  '<img class="val_img__estrellas" src="assets/docs/estrellas.png" alt="Una imagen de valoracion de estrellas img-responsive"> ' +
		                '</div>' +
		              '</div>' +
		            '</div>' +
		          '</div>' + 
		        '</li>')



			
			$("#boton").click(function(){
				var elegir = $("select").val();
			if (elegir==element.category){
				$('.listado').hide();
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
	