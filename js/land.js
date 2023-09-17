
// menu responsive
let btnHambur = document.getElementById('btn_hambur');
let navHeader = document.getElementById('nav_header');

btnHambur.addEventListener('click', () => {
	navHeader.classList.toggle('hamburoculto');
});
let myCheck3 = document.getElementById('Acc3');
let btnCheck3 = document.getElementById('text-btn3');
let apretar3 = document.getElementById('btn-check3')
let flechi3 = document.getElementById('flechi3');
apretar3.addEventListener('click', function () {
	if (myCheck3.checked === false) {
		btnCheck3.innerText = 'Ver menos';
		flechi3.style.transform = 'rotate(180deg)'
		myCheck3.checked = true;
	}
	else {
		btnCheck3.innerText = 'Ver más';
		flechi3.style.transform = 'rotate(0deg)'
		myCheck3.checked = false;
	}
})

// Envío formulario de contacto-------------->

let $formContacto = document.getElementById('form-contacto');
let loading2 = document.getElementById('load2');
let listo2 = document.getElementById('env2');
let formcon2 = document.getElementById('form-contacto');
let formEnviar2 = document.getElementById('btn_enviar2');
let noListo2 = document.getElementById('noenv2');
let form2Cerrar2 = document.getElementById('incorrectoCerrar2');

async function enviar2(e) {
	e.preventDefault();
	let fd = new FormData(this)
	// https://formspree.io/f/mqkogqvn ---> correo gmail nico produccion
	// https://formspree.io/f/mayzbqok ---> correo hotmail ruggia para testing
	let respuesta = await fetch('https://formspree.io/f/mqkogqvn', {
		method: 'POST',
		body: fd,
		headers: {
			Accept: 'application/json'
		}

	});
	if (respuesta.ok) {
		let ema2 = document.getElementById('email2');
		let emacor2 = document.getElementById('email2correct');

		loading2.classList.remove('show');
		listo2.classList.add('show');
		emacor2.innerText = `En breve nos vamos a comunicar con vos al correo: ${ema2.value}`
		setTimeout(() => {
			formcon2.classList.remove('form-contacto-enviado');
			loading2.classList.remove('show');
			listo2.classList.remove('show');
		}, 15000);
		this.reset();
	}
	else {
		loading2.classList.remove('show');
		noListo2.classList.add('show');
	}
};
form2Cerrar2.addEventListener('click', () => {
	formcon2.classList.remove('form-contacto-enviado');
	loading2.classList.remove('show');
	noListo2.classList.remove('show');
});

function valNombre2() {
	var elemento = document.getElementById('nombre2');
	if (!elemento.checkValidity()) {
		error2(elemento);
		elemento.addEventListener('input', valNombre2);
		return false;
	}
	else {
		limpiarError2(elemento);
		return true;
	}
};
function valEmail2() {
	var elemento = document.getElementById('email2');
	if (!elemento.checkValidity()) {
		error2(elemento);
		elemento.addEventListener('input', valEmail2);
		return false;
	}
	else {
		limpiarError2(elemento);
		return true;
	}
};
function valWhatsapp() {
	var elemento = document.getElementById('whatsapp');
	if (!elemento.checkValidity()) {
		error2(elemento);
		elemento.addEventListener('input', valWhatsapp);
		return false;
	}
	else {
		limpiarError2(elemento);
		return true;
	}
};
function valCiudad() {
	var elemento = document.getElementById('Ciudad');
	if (!elemento.checkValidity()) {
		error2(elemento);
		elemento.addEventListener('input', valCiudad);
		return false;
	}
	else {
		limpiarError2(elemento);
		return true;
	}
};
function valinstitucion() {
	var elemento = document.getElementById('institucionc');
	if (!elemento.checkValidity()) {
		error2(elemento);
		elemento.addEventListener('input', valinstitucion);
		return false;
	}
	else {
		limpiarError2(elemento);
		return true;
	}
};
function error2(elemento) {
	document.getElementById(`${elemento.id}`).classList.add('errorShow2');
	document.getElementById(`${elemento.id}Error`).classList.add('errorShow1');
	document.getElementById(`${elemento.id}ErrorP`).innerText = `Escriba un nombre válido para continuar`;
	if (elemento.id === 'email2') {
		document.getElementById(`${elemento.id}ErrorP`).innerText = `Escriba un email válido para continuar`;
	} if (elemento.id === 'whatsapp') {
		document.getElementById(`${elemento.id}ErrorP`).innerText = `Escriba un número válido para continuar`;
	}
	elemento.focus();
};
function limpiarError2(elemento) {
	document.getElementById(`${elemento.id}`).classList.remove('errorShow2');
	document.getElementById(`${elemento.id}Error`).classList.remove('errorShow1');
};
function validar2() {
	if (valNombre2() && valEmail2() && valWhatsapp() && valCiudad() && valinstitucion() && true) {
		return true;
	}
	else {
		return false;
	}
};
formEnviar2.addEventListener('click', e => {
	if (validar2()) {
		formcon2.classList.add('form-contacto-enviado');
		loading2.classList.add('show');
		$formContacto.addEventListener('submit', enviar2);
	}
	else {
		e.preventDefault();
	}
});
document.getElementById('focusform').addEventListener('click', () => {
	var elemento = document.getElementById('nombre2');
	setTimeout(() => {
		elemento.focus()
	}, 700)
});

// fix scroll beheivor en todos los navegadores, con jquery-------->

$(document).ready(function () {
	// Add smooth scrolling to all links
	$("a").on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 650, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});