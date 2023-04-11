// formu acceso -------->
import {open_acceso,form_acceso,close_acceso,opacoacceso,open_acceso_mobil,btn__enviar_acceso} from './model.js';

open_acceso.addEventListener('click',()=>{
	form_acceso.classList.remove('oculto-acc');
	opacoacceso.classList.add('opaco');
});
open_acceso_mobil.addEventListener('click',()=>{
	form_acceso.classList.remove('oculto-acc');
	opacoacceso.classList.add('opaco');
});
close_acceso.addEventListener('click',()=>{
	form_acceso.classList.add('oculto-acc');
	opacoacceso.classList.remove('opaco');
});
opacoacceso.addEventListener('click',()=>{
	form_acceso.classList.add('oculto-acc');
	opacoacceso.classList.remove('opaco');
});

function valUser(){
	var elemento = document.getElementById('usuario');
	if (!elemento.checkValidity()){
		error(elemento);
		elemento.addEventListener('input',valUser);
		return false;
	}
	else{
		limpiarError(elemento);
		return true;
	}
	};
	function valPass(){
	var elemento = document.getElementById('contrasenia');
	if (!elemento.checkValidity()){
		error(elemento);
		elemento.addEventListener('input',valPass);
		return false;
	}
	else{
		limpiarError(elemento);
		return true;
	}
	};
function error (elemento){
	document.getElementById(`${elemento.id}`).classList.add('errorShow2');
	document.getElementById(`${elemento.id}Error`).classList.add('errorShow1');
	if(elemento.id=='contrasenia'){
		document.getElementById(`${elemento.id}ErrorP`).innerText=`Escriba una contraseña válida para continuar`;
	}
	else{
		document.getElementById(`${elemento.id}ErrorP`).innerText=`Escriba un ${elemento.id} válido para continuar`;
	}
	elemento.focus();
	};
	
	function limpiarError (elemento){
	document.getElementById(`${elemento.id}`).classList.remove('errorShow2');
	document.getElementById(`${elemento.id}Error`).classList.remove('errorShow1');
	};
	
	function validar (e){
	if(valUser() && valPass() && true){
		return true;
	}
	else{
		return false;
	}
	};
	btn__enviar_acceso.addEventListener('click',(e)=>{
		e.preventDefault();
		validar();
	})