// formu acceso -------->
import { open_acceso, form_acceso, close_acceso, opacoacceso, open_acceso_mobil, btn__enviar_acceso } from './model.js';

open_acceso.addEventListener('click',()=>{
	window.location.href = "https://online.sfssa.com.ar/";
})

// open_acceso.addEventListener('click', () => {
// 	form_acceso.classList.remove('oculto-acc');
// 	opacoacceso.classList.add('opaco');
// });
// open_acceso_mobil.addEventListener('click', () => {
// 	form_acceso.classList.remove('oculto-acc');
// 	opacoacceso.classList.add('opaco');
// });
// close_acceso.addEventListener('click', () => {
// 	form_acceso.classList.add('oculto-acc');
// 	opacoacceso.classList.remove('opaco');
// });
// opacoacceso.addEventListener('click', () => {
// 	form_acceso.classList.add('oculto-acc');
// 	opacoacceso.classList.remove('opaco');
// });
// btn__enviar_acceso.addEventListener('click',(e)=>{
// 	e.preventDefault();
// 	validar();
// })
// document.querySelector('#incorrectoCerrarAcc').addEventListener('click', () => {
// 	document.querySelector('#result').classList.remove('show');
// 	document.querySelector('#accesoform').classList.add('show');
// })