const qrcode = new QRCode("qrcode");

function makeCode() {
	const elText = document.getElementById("text");

	if (!elText.value) {
		alert("Input a text");
		elText.focus();
		return;
	}

	qrcode.makeCode(elText.value);
}

makeCode();

$("#text").
	on("blur", function () {
		makeCode();
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			makeCode();
		}
	});