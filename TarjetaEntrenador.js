function mostrar()
{
	
	var nombreEntrenador;
	var nivelEntrenador;
	var codigoEntrenador;
	var descripcionEntrenador;
	var pokemonFavorito;
	var equipo;
	//var medallas;

	nombreEntrenador = document.getElementById('nombreEntrenador').value; //prompt("Ingresa tu nombre de entrenador.");
	nivelEntrenador = document.getElementById('nivelEntrenador').value; //prompt("Ingresa tu nivel.");
	codigoEntrenador = document.getElementById('codigoEntrenador').value; //prompt("Ingresa tu código de entrenador.");
	descripcionEntrenador = document.getElementById('descripcionEntrenador').value; //prompt("Ingresa una descripcion tuya o sobre tu tipo de juego");
	pokemonFavorito = document.getElementById('pokemonFavorito').value; //prompt("Cual es tu Pokémon favorito");
	equipo = document.getElementById('equipo').value;
	//medallas

	document.write("Entrenador: " + nombreEntrenador + "<br>");
	document.write("Equipo: " + equipo + "<br>");
	document.write("Nivel: " + nivelEntrenador + "<br>");
	document.write("Código: " + codigoEntrenador + "<br>");
	document.write("Descripción: " + descripcionEntrenador + "<br>");
	document.write("Pokémon favorito: " + pokemonFavorito + "<br>");


}