// formu acceso -------->
let open_acceso = document.getElementById('open_acceso');
let form_acceso = document.getElementById('container_form_acceso');
let close_acceso = document.getElementById('close_acceso');
let opacoacceso = document.getElementById('opaco');

open_acceso.addEventListener('click',()=>{
	form_acceso.classList.remove('oculto-acc')
	opacoacceso.classList.add('opaco');
})
close_acceso.addEventListener('click',()=>{
	form_acceso.classList.add('oculto-acc')
	opacoacceso.classList.remove('opaco');
})