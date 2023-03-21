window.onload = function(){
	let load = document.getElementById('loading');
	let contcarga = document.getElementById('contcarga');
	load.classList.add('cargahide');
	contcarga.classList.add('imghide');
}
// formu acceso -------->
let open_acceso = document.getElementById('open_acceso');
let form_acceso = document.getElementById('container_form_acceso');
let close_acceso = document.getElementById('close_acceso');
let opacoacceso = document.getElementById('opaco');
// formu demo------>
let open = document.getElementById('open');
let open_dos = document.getElementById('open2');
let open_tres = document.getElementById('open3');
let form = document.getElementById('container_form');
let close = document.getElementById('close');
let opaco = document.getElementById('opacodemo');
// menu responsive
let btnHambur = document.getElementById('btn_hambur');
let navHeader = document.getElementById('nav_header')

btnHambur.addEventListener('click',()=>{
	navHeader.classList.toggle('hamburoculto')
})
// // formu demo------>
 open.addEventListener('click',()=>{
	form.classList.remove('oculto');
	opaco.classList.add('opaco');
})
open_tres.addEventListener('click',()=>{
	form.classList.remove('oculto');
	opaco.classList.add('opaco');
})
close.addEventListener('click',()=>{
	form.classList.add('oculto');
	opaco.classList.remove('opaco')
})

// formu acceso -------->
open_acceso.addEventListener('click',()=>{
	form_acceso.classList.remove('oculto-acc')
	opacoacceso.classList.add('opaco');
})
close_acceso.addEventListener('click',()=>{
	form_acceso.classList.add('oculto-acc')
	opacoacceso.classList.remove('opaco');
})
// envío de datos a correo desde el form DEMO-------------->

// https://formspree.io/f/mzbwlyjr

let $formdemo = document.getElementById('form-demo');
let loading = document.getElementById('load');
let listo = document.getElementById('env');
let formcon = document.getElementById('formc');
let formEnviar = document.getElementById('btn__enviar');
let formCerrar = document.getElementById('correctoCerrar');
let noListo = document.getElementById('noenv');
let form2Cerrar = document.getElementById('incorrectoCerrar');


async	function enviar (event){
		event.preventDefault();
		let fd = new FormData(this)
		let response = await fetch('https://formspree.io/f/mzbwlyjr',{
		method: 'POST',
		body: fd,
		headers: {
			Accept: 'application/json'
		}
	});
	if (response.ok){
		loading.classList.remove('show');
		listo.classList.add('show');
		this.reset();
	}
	else{
		loading.classList.remove('show');
		noListo.classList.add('show');
	}
	};
	formCerrar.addEventListener('click',()=>{
		setTimeout(()=>{formcon.classList.remove('hide')},3000);
		listo.classList.remove('show');
		form.classList.add('oculto');
		opaco.classList.remove('opaco')
	})
	form2Cerrar.addEventListener('click',()=>{
		formcon.classList.remove('hide');
		noListo.classList.remove('show');
	})
function valNombre(){
	var elemento = document.getElementById('nombre');
	if (!elemento.checkValidity()){
		error(elemento);
		$formdemo.addEventListener('input',valNombre);
		return false;
	}
	else{
		limpiarError(elemento);
		return true;
	}
}
function valEmail(){
	var elemento = document.getElementById('email');
	if (!elemento.checkValidity()){
		error(elemento);
		$formdemo.addEventListener('input',valEmail);
		return false;
	}
	else{
		limpiarError(elemento);
		return true;
	}
}
function valTelefono(){
	var elemento = document.getElementById('telefono');
	if (!elemento.checkValidity()){
		error(elemento);
		$formdemo.addEventListener('input',valTelefono);
		return false;
	}
	else{
		limpiarError(elemento);
		return true;
	}
}
function valCiudad(){
	var elemento = document.getElementById('ciudad');
	if (!elemento.checkValidity()){
		error(elemento);
		$formdemo.addEventListener('input',valCiudad);
		return false;
	}
	else{
		limpiarError(elemento);
		return true;
	}
}
function valInstitucion(){
	var elemento = document.getElementById('institucion');
	if (!elemento.checkValidity()){
		error(elemento);
		$formdemo.addEventListener('input',valInstitucion);
		return false;
	}
	else{
		limpiarError(elemento);
		return true;
	}
}

function error (elemento){
	document.getElementById(`${elemento.id}`).classList.add('errorShow2');
	document.getElementById(`${elemento.id}Error`).classList.add('errorShow1');
	if(elemento.id=='ciudad' || elemento.id=='institucion'){
		document.getElementById(`${elemento.id}ErrorP`).innerText=`Escriba una ${elemento.id} válido para continuar`;
	}
	else{
		document.getElementById(`${elemento.id}ErrorP`).innerText=`Escriba un ${elemento.id} válido para continuar`;
	}
	elemento.focus();
}
function limpiarError (elemento){
	document.getElementById(`${elemento.id}`).classList.remove('errorShow2');
	document.getElementById(`${elemento.id}Error`).classList.remove('errorShow1');
}
function validar (e){
	if(valNombre() && valEmail() && valTelefono() && valCiudad() && valInstitucion() && true){
		return true;
	}
	else{
		return false;
	}
}
 formEnviar.addEventListener('click',(e)=>{
	if (validar()){
		formcon.classList.add('hide');
		loading.classList.add('show');
	}
	else{
		e.preventDefault();
		$formdemo.addEventListener('submit',enviar);
	}
 })

// hovers cards------------------
var item = document.querySelectorAll('.item');
item.forEach(function(card){
    card.addEventListener('mouseenter',()=>{
        card.firstElementChild.classList.add('rotar');
    })
    card.addEventListener('mouseleave',()=>{
        setTimeout(()=>{card.firstElementChild.classList.remove('rotar');},1200);
    })
})
let cardInner = document.querySelectorAll('.card__inner');
let contenedor = document.querySelector('.contItemsApp');
let tarjetas = ()=>{
    cardInner.forEach(function(card){
        card.classList.add('rotar');
        setTimeout(()=>{card.classList.remove('rotar');},1500);
    })
}
const observador = new IntersectionObserver(tarjetas,{
    root:null,
    rootMargin:'100px',
    threshold:0.3
})
observador.observe(contenedor);

//smooth links con jquery
$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".link").on('click', function(event) {
  
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
        }, 650, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });