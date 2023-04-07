// formu acceso -------->
import {open_acceso,form_acceso,close_acceso,opacoacceso,open_acceso_mobil} from './model.js';

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