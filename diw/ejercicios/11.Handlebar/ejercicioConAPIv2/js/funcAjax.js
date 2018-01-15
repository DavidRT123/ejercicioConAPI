$(document).ready(function(){
	
	//Dado que el primer registro en cargarse es el número 1 se oculta el botón "Anterior" al principio
	$(".previous").attr("disabled", "disabled");
	
	//Petición ajax para saber la longitud de los registros de personajes
	$.post("https://swapi.co/api/people", function(resp){
		//Guardado y modificación de la longitud (dado que los registros empiezan por el número 1)
		longi = (resp.count)+1;
		var registros = [];
		
		//Función que hace la petición ajax que pasa el número de registro que se quiere consultar
		(function(){
			
			//Indice que hace referencia al registro del personaje que se esta visualizando
			var index = 1;
			while(index <= longi){
				(function(ind){
					$.ajax({
						url: "https://swapi.co/api/people/"+index,
						method: "POST",
						success: function(resp){
							var html;
							html = Handlebars.templates.plantilla(resp);
							registros[ind] = html;
							if(ind == longi){
								$("#loading").hide();
								$("#miDiv").append(registros[index]);
								$("#miDiv").removeAttr("hidden");
								$("#main").removeAttr("hidden");
								$("#botones").removeAttr("hidden");
							}
						},
						error: function(resp){
							console.log("ERROR OCURRIDO EN EL REGISTRO: " + ind + " - " + resp.responseText);
						}
					});
				})(index); 
				index++;
			}
			index = 1;
			
			//Eventos de los botones "Anterior" y "Siguiente" para cargar los registros

			//Evento "Siguiente"
			$(".next").click(function(){
				index++;			
				if(index > 1){
					$(".previous").removeAttr("disabled");
				}
				if(index >= longi){
					$(".next").attr("disabled", "disabled");
				}
				if(registros[index]){
					document.getElementById("miDiv").innerHTML = "<div >"+registros[index]+"</div>";
				}
			});

			//Evento "Anterior"
			$(".previous").click(function(){
				index--;
				if(index <= 1){
					$(".previous").attr("disabled", "disabled");
				}
				if(index <= longi){
					$(".next").removeAttr("disabled");
				}
				if(registros[index]){
					document.getElementById("miDiv").innerHTML = "<div >"+registros[index]+"</div>";
				}
			});
		})();
	});
});		