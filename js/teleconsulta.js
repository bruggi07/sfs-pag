import { open_tres,form,opaco } from "./modules/model.js";

open_tres.addEventListener('click',()=>{
	form.classList.remove('oculto');
	opaco.classList.add('opaco');
});
// menu responsive
let btnHambur = document.getElementById('btn_hambur');
let navHeader = document.getElementById('nav_header');

btnHambur.addEventListener('click',()=>{
	navHeader.classList.toggle('hamburoculto');
});