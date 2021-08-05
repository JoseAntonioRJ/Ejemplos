function myFunction() {
	Swal.fire({
		title: '¿Estas Seguro?',
		text: "No podrás revertir esto!",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Si, Borrar!'
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire(
				'Borrado!',
				'Tu Archivo ha sido borrado.',
				'éxito'
			)
		}
	})
}