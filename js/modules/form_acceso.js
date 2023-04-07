// formu acceso -------->
import disableScroll from "./model.js";
import {open_acceso,form_acceso,close_acceso,opacoacceso,open_acceso_mobil} from './model.js';

open_acceso.addEventListener('click',()=>{
	scroll(0, 0);
	form_acceso.classList.remove('oculto-acc');
	opacoacceso.classList.add('opaco');
	window.addEventListener('scroll', disableScroll);
});
open_acceso_mobil.addEventListener('click',()=>{
	scroll(0, 0);
	form_acceso.classList.remove('oculto-acc');
	opacoacceso.classList.add('opaco');
	window.addEventListener('scroll', disableScroll);
});
close_acceso.addEventListener('click',()=>{
	form_acceso.classList.add('oculto-acc');
	opacoacceso.classList.remove('opaco');
	window.removeEventListener('scroll', disableScroll); 
});
opacoacceso.addEventListener('click',()=>{
	form_acceso.classList.add('oculto-acc');
	opacoacceso.classList.remove('opaco');
	window.removeEventListener('scroll', disableScroll); 
});