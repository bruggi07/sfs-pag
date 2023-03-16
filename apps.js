
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
open_dos.addEventListener('click',()=>{
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
	formcon.classList.add('hide');
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
		formcon.classList.remove('hide');
		loading.classList.remove('show');
		listo.classList.remove('show');
		form.classList.add('oculto');
		opaco.classList.remove('opaco')
	})
	form2Cerrar.addEventListener('click',()=>{
		formcon.classList.remove('hide');
		loading.classList.remove('show');
		noListo.classList.remove('show');
	})

$form.addEventListener('submit',enviar);

// Envío formulario de contacto-------------->
let $formContacto = document.getElementById('form-contacto');
let loading2 = document.getElementById('load2');
let listo2 = document.getElementById('env2');
let formcon2 = document.getElementById('form-contacto');
let formEnviar2 = document.getElementById('btn_enviar2');
let formCerrar2 = document.getElementById('correctoCerrar2');
let noListo2 = document.getElementById('noenv2');
let form2Cerrar2 = document.getElementById('incorrectoCerrar2');

formEnviar2.addEventListener('click',()=>{
	formcon2.classList.add('form-contacto-enviado');
	loading2.classList.add('show');
})
async	function enviar2 (event){
		event.preventDefault();
		let fd = new FormData(this)
		let response = await fetch('https://formspree.io/f/mayzbqok',{
		method: 'POST',
		body: fd,
		headers: {
			Accept: 'application/json'
		}
	
	});
	if (response.ok){
		loading2.classList.remove('show');
		listo2.classList.add('show');
		this.reset();
	}
	else{
		loading2.classList.remove('show');
		noListo2.classList.add('show');
	}
	};
	formCerrar2.addEventListener('click',()=>{
		formcon2.classList.remove('form-contacto-enviado');
		loading2.classList.remove('show');
		listo2.classList.remove('show');
	})
	form2Cerrar2.addEventListener('click',()=>{
		formcon2.classList.remove('form-contacto-enviado');
		loading2.classList.remove('show');
		noListo2.classList.remove('show');
	})

$formContacto.addEventListener('submit',enviar2);

// efecto menú con scroll ----------------->

const header = document.getElementById('header');
const imglogo = document.querySelector('.logo-header > .imglogo');
const fontsizebtnacceso = document.querySelector('.btn-acceso');
const fonsizebtnpresent = document.querySelector('.btn-demo')
const nav = document.querySelector('.logo-header');
const navFontSize = document.querySelector('.nav');
const imgmini = document.getElementById('minilogo');
const imggrande = document.getElementById('logogrande');
const transitionop = document.querySelector('.header-transition');
let prevY = window.scrollY;
window.addEventListener('scroll', function(){


	if(prevY < this.scrollY){

		nav.classList.add('navscroll');
		fontsizebtnacceso.classList.add('scrollbtnacceso');
		fonsizebtnpresent.classList.add('scrollbtnacceso');
		// imglogo.classList.add('logoscroll');
		header.classList.add('menuscroll');
		transitionop.classList.add('menuscroll');
		navFontSize.classList.add('nav-scroll');
		imggrande.style.opacity='0';
		imggrande.style.left='-70px';
		imggrande.style.scale='0.6';
		imgmini.style.scale='0.6';
		imgmini.style.top='-5px';
		transitionop.style.opacity="1";

	}else if(prevY<200){

		nav.classList.remove('navscroll');
		fontsizebtnacceso.classList.remove('scrollbtnacceso');
		fonsizebtnpresent.classList.remove('scrollbtnacceso');
		header.classList.remove('menuscroll');
		transitionop.classList.remove('menuscroll');
		imglogo.classList.remove('logoscroll');
		navFontSize.classList.remove('nav-scroll');
		imggrande.style.opacity='1';
		imggrande.style.left='0';
		imgmini.style.scale='1';
		imggrande.style.scale='1';
		imgmini.style.top='0';
		transitionop.style.opacity="0";
		
	};

	prevY = window.scrollY
});

// selectores sections ------------------------------>
 const menu = document.getElementById('menu');
 const secciones = document.querySelectorAll('.seccion');
//observer
const observer = new IntersectionObserver((entradas)=>{

		entradas.forEach(entrada => {
			const id = entrada.target.getAttribute('id');
			const menuLink = document.querySelector(`.nav a[href="#${id}"]`);
			

			if(entrada.isIntersecting){
				
				let seleccionado = document.querySelector('.nav a.selected');
				if (seleccionado != null){
					seleccionado.classList.remove('selected');
				}
				menuLink.classList.add('selected');
				
			}

	});
}
, {
	rootMargin: '-50% 0% -50% 0%'
});
secciones.forEach(seccion => observer.observe(seccion))
// Botones ver más/ver menos productos---------------------
let myCheck = document.getElementById('Acc1');
let btnCheck = document.getElementById('text-btn');
let apretar = document.getElementById('btn-check')
let flechi = document.getElementById('flechi');
let myCheck2 = document.getElementById('Acc2');
let btnCheck2 = document.getElementById('text-btn2');
let apretar2 = document.getElementById('btn-check2')
let flechi2 = document.getElementById('flechi2');
let myCheck3 = document.getElementById('Acc3');
let btnCheck3 = document.getElementById('text-btn3');
let apretar3 = document.getElementById('btn-check3')
let flechi3 = document.getElementById('flechi3');

apretar.addEventListener('click',function (){
	if(myCheck.checked===false){
		btnCheck.innerText='Ver menos';
		btnCheck2.innerText='Ver más';
		btnCheck3.innerText='Ver más';
		flechi2.style.transform='rotate(0deg)'
		flechi3.style.transform='rotate(0deg)'
		flechi.style.transform='rotate(180deg)'
		myCheck.checked=true;
	}
	else{
		btnCheck.innerText='Ver más';
		flechi.style.transform='rotate(0deg)'
		myCheck.checked=false;
	}
})
apretar2.addEventListener('click',function (){
	if(myCheck2.checked===false){
		btnCheck2.innerText='Ver menos';
		btnCheck.innerText='Ver más';
		btnCheck3.innerText='Ver más';
		flechi.style.transform='rotate(0deg)'
		flechi3.style.transform='rotate(0deg)'
		flechi2.style.transform='rotate(180deg)'
		myCheck2.checked=true;
	}
	else{
		btnCheck2.innerText='Ver más';
		flechi2.style.transform='rotate(0deg)'
		myCheck2.checked=false;
	}
})
apretar3.addEventListener('click',function (){
	if(myCheck3.checked===false){
		btnCheck3.innerText='Ver menos';
		btnCheck.innerText='Ver más';
		btnCheck2.innerText='Ver más';
		flechi.style.transform='rotate(0deg)'
		flechi2.style.transform='rotate(0deg)'
		flechi3.style.transform='rotate(180deg)'
		myCheck3.checked=true;
	}
	else{
		btnCheck3.innerText='Ver más';
		flechi3.style.transform='rotate(0deg)'
		myCheck3.checked=false;
	}
})


// btn.addEventListener('click', ()=> {
// 	if(radio.spellcheck){
// 		btn.innerText = 'Ver menos'
// 		flechi.style.rotate = '180deg'
// 	}
// })

// fix scroll beheivor en todos los navegadores, con jquery-------->

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
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
	