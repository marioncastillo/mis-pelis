var contador = 0;

$(document).ready(function(){

//INICIO LOGIN//
	$("#login").click(function(e){
			e.preventDefault();
			window.location = "login.html";
		});

	$("#create").click(function(e){
			e.preventDefault();
			window.location = "Create.html";
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

//FIN LOGIN//

	var miUrl = 'https://netflixroulette.net/api/api.php?director=';

	var directores = ['Quentin%20Tarantino','Stephen%20King','Tim%20Burton','John%20Huston','Woody%20Allen','Martin%20Scorsese','David%20Lynch','Lars%20von%20Trier','Steven%20Spielberg','Jouji%20Shimura','Kevin%20Allen','Fritz%20Lang','James%20Westby','Alex%20Winter','Sean%20Baker','Chad%20Kapper','David%20DeCoteau','Jim%20Wynorski','John%20Herzfeld','Jonathan%20Kaplan','Andrew%20Fleming','Tobe%20Hooper','Kevin%20Dunn','Alex%20de%20la%20Iglesia','Nick%20Herbert','Vipul%20Amrutlal%20Shah','Rodney%20Ray','Leslie%20Zemeckis','Camille%20Delamarre','Paul%20Etheredge','Lone%20Scherfig','Satoshi%20Nishimura','Christopher%20Nolan','Bassam%20Kurdali','Kenji%20Kamiyama','Woody%20Allen','Martin%20Scorsese','Steven%20Spielberg','Stanley%20Kubrick','Alfred%20Hitchcock','David%20Lynch','John%20Ford'];
	
	directores.forEach(function(e){
		$.ajax({
		url: miUrl + e,
		type: 'GET',
		dataType: 'json'
		//data: {param1: 'value1'},
	})
	.done(function(response){
		response.forEach(function(element){

			var estructura = ('<li>' +
		          '<div class="container listado">' + 
		            '<div class="row">' + 
		              '<div class="col-sm-8 col-xs-8 pull-left">' + 
		                '<a class="val_titlepeli" href="details.html" id="'+element.show_id+'"><strong>' + element.show_title+ '</strong> ' + element.release_year + ' | ' + element.category + '</a>' + 
		              '</div>' +
		              '<div class="col-sm-4 col-xs-4 pull-right">' + 
		                '<button id="'+ element.show_id +'-b' +'" type="button" class="btn btn-danger">Add favorites</button>' + 
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
		        '</li>');

			$('.camj_movies-lista').append(estructura);

			$("#boton").click(function(){
				var elegir = $("select").val();
				if (elegir==element.category){
					$('.camj_movies-lista').hide();
					$('.camj_movies-lista2').append(estructura);
				}else {
					 $(".input").val("");
				}
			});
			
			$('#'+ element.show_id +'-b').click(function() {
				contador++;
				var cont = localStorage.setItem('contador', contador);
				console.log(contador);
				var titulo = localStorage.setItem(('titu' + contador),element.show_title);
				var pelicula = localStorage.setItem(('foto'+ contador),element.poster);
			});


		});

	})
	.fail(function() {
		console.log("error");
	})
		
	});
	var cont = localStorage.getItem('contador');
	for(var i=1; i<=cont;i++){
		$('.save-movie').append('<li> <div><img src="'+ localStorage.getItem('foto' + i) +'" class="img-responsive"></div>  <h5>'+localStorage.getItem('titu' + i)+'</h5></li>');
		}
	});
	


