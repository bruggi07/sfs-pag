window.onload = function(){
	let load = document.getElementById('loading');
	let contcarga = document.getElementById('contcarga');
	load.classList.add('cargahide');
	contcarga.classList.add('imghide');
}
// import { open_dos,open_tres,form,opaco } from "./modules/form_demo";
let open_dos = document.getElementById('open2');
let open_tres = document.getElementById('open3');
let form = document.getElementById('container_form');
let opaco = document.getElementById('opacodemo');
open_dos.addEventListener('click',()=>{
	form.classList.remove('oculto');
	opaco.classList.add('opaco');
})
open_tres.addEventListener('click',()=>{
	form.classList.remove('oculto');
	opaco.classList.add('opaco');
})
// menu responsive
let btnHambur = document.getElementById('btn_hambur');
let navHeader = document.getElementById('nav_header');

btnHambur.addEventListener('click',()=>{
	navHeader.classList.toggle('hamburoculto');
});
// Envío formulario de contacto-------------->
let $formContacto = document.getElementById('form-contacto');
let loading2 = document.getElementById('load2');
let listo2 = document.getElementById('env2');
let formcon2 = document.getElementById('form-contacto');
let formEnviar2 = document.getElementById('btn_enviar2');
let noListo2 = document.getElementById('noenv2');
let form2Cerrar2 = document.getElementById('incorrectoCerrar2');

async	function enviar2 (event){
		event.preventDefault();
		let fd = new FormData(this)
		let response = await fetch('https://formspree.io/f/mbjeaonn',{
		method: 'POST',
		body: fd,
		headers: {
			Accept: 'application/json'
		}
	
	});
	if (response.ok){
		loading2.classList.remove('show');
		listo2.classList.add('show');
		setTimeout(()=>{
			formcon2.classList.remove('form-contacto-enviado');
			loading2.classList.remove('show');
			listo2.classList.remove('show');
		},10000);
		this.reset();
	}
	else{
		loading2.classList.remove('show');
		noListo2.classList.add('show');
	}
	};
	form2Cerrar2.addEventListener('click',()=>{
		formcon2.classList.remove('form-contacto-enviado');
		loading2.classList.remove('show');
		noListo2.classList.remove('show');
	})

	function valNombre2(){
		var elemento = document.getElementById('nombre2');
		if (!elemento.checkValidity()){
			error2(elemento);
			elemento.addEventListener('input',valNombre2);
			return false;
		}
		else{
			limpiarError2(elemento);
			return true;
		}
	}
	function valEmail2(){
		var elemento = document.getElementById('email2');
		if (!elemento.checkValidity()){
			error2(elemento);
			elemento.addEventListener('input',valEmail2);
			return false;
		}
		else{
			limpiarError2(elemento);
			return true;
		}
	}
	function valAsunto(){
		var elemento = document.getElementById('asunto');
		if (!elemento.checkValidity()){
			error2(elemento);
			elemento.addEventListener('input',valAsunto);
			return false;
		}
		else{
			limpiarError2(elemento);
			return true;
		}
	}
	function valMensaje(){
		var elemento = document.getElementById('mensaje');
		if (!elemento.checkValidity()){
			error2(elemento);
			elemento.addEventListener('input',valMensaje);
			return false;
		}
		else{
			limpiarError2(elemento);
			return true;
		}
	}
	function error2 (elemento){
		document.getElementById(`${elemento.id}`).classList.add('errorShow2');
		document.getElementById(`${elemento.id}Error`).classList.add('errorShow1');
		document.getElementById(`${elemento.id}ErrorP`).innerText=`Escriba un ${elemento.id} válido para continuar`;
		if(elemento.id==="nombre2"){
			document.getElementById(`${elemento.id}ErrorP`).innerText=`Escriba un nombre válido para continuar`;
		}if(elemento.id==='email2'){
			document.getElementById(`${elemento.id}ErrorP`).innerText=`Escriba un email válido para continuar`;
		}
		elemento.focus();
	}
	function limpiarError2 (elemento){
		document.getElementById(`${elemento.id}`).classList.remove('errorShow2');
		document.getElementById(`${elemento.id}Error`).classList.remove('errorShow1');
	}
	function validar2 (e){
		if(valNombre2() && valEmail2() && valAsunto() && valMensaje() && true){
			return true;
		}
		else{
			return false;
		}
	}
	 formEnviar2.addEventListener('click',(e)=>{
		if (validar2()){
			formcon2.classList.add('form-contacto-enviado');
			loading2.classList.add('show');
			$formContacto.addEventListener('submit',enviar2);
		}
		else{
			e.preventDefault();
		}
	 })

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
	