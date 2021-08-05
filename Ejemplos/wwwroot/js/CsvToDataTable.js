function validar() {
	// Obtener nombre de archivo
	let archivo = document.getElementById('archivo').value,
		// Obtener extensión del archivo
		extension = archivo.substring(archivo.lastIndexOf('.'), archivo.length);
	// Si la extensión obtenida no está incluida en la lista de valores
	// del atributo "accept", mostrar un error.
	if (document.getElementById('archivo').getAttribute('accept').split(',').pop().toLowerCase().indexOf(extension) < 0) {
		document.getElementById('Subir').disabled = true;
		Swal.fire({
			icon: 'error',
			title: 'Error....',
			text: 'No se permiten los archivos' + extension

		});
	}
	else {
		document.getElementById('Subir').disabled = false;
		Swal.fire({
			icon: 'success',
			title: 'Felicidades....',
			text: 'Archivo cargado con exito' 

		});
	}
}