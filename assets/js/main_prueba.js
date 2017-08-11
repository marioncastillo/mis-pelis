
$(document).ready(function(){

	var miUrl = 'https://netflixroulette.net/api/api.php?director=';

	var directores = ['Quentin%20Tarantino','Stephen%20King','Tim%20Burton','Jouji%20Shimura','Kevin%20Allen','Fritz%20Lang','James%20Westby','Alex%20Winter','Sean%20Baker','Chad%20Kapper','David%20DeCoteau','Jim%20Wynorski','John%20Herzfeld','Jonathan%20Kaplan','Andrew%20Fleming','Tobe%20Hooper','Kevin%20Dunn','Alex%20de%20la%20Iglesia','Nick%20Herbert','Vipul%20Amrutlal%20Shah','Rodney%20Ray','Leslie%20Zemeckis','Camille%20Delamarre','Paul%20Etheredge','Lone%20Scherfig','Satoshi%20Nishimura','Christopher%20Nolan','Bassam%20Kurdali','Kenji%20Kamiyama','Woody%20Allen','Martin%20Scorsese','Steven%20Spielberg','Stanley%20Kubrick','Alfred%20Hitchcock','David%20Lynch','John%20Ford']
	
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
		});

		$("#boton").click(function(){
			var elegir = $("select").val();
			response.forEach(function(element){
				if (elegir == element.category){
					$(".category").append('<p>Titulo: ' + element.show_title + '</p>');
				}
			});
		})
	})
	.fail(function() {
		console.log("error");
	})
	/*.always(function() {
		console.log("complete");
	});*/
	});

})