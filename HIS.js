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

let $form = document.getElementById('form-demo');
let loading = document.getElementById('load');
let listo = document.getElementById('env');
let formcon = document.getElementById('formc');
let formEnviar = document.getElementById('btn__enviar');
let formCerrar = document.getElementById('correctoCerrar');
let noListo = document.getElementById('noenv');
let form2Cerrar = document.getElementById('incorrectoCerrar');

formEnviar.addEventListener('click',()=>{
	formcon.classList.add('form-demo-enviado');
	loading.classList.add('show');
})
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
		formcon.classList.remove('form-demo-enviado');
		loading.classList.remove('show');
		listo.classList.remove('show');
		form.classList.add('oculto');
		opaco.classList.remove('opaco')
	})
	form2Cerrar.addEventListener('click',()=>{
		formcon.classList.remove('form-demo-enviado');
		loading.classList.remove('show');
		noListo.classList.remove('show');
	})

$form.addEventListener('submit',enviar);