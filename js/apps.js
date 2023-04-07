import  disableScroll  from "./modules/model.js";
import { open_tres,form,opaco } from "./modules/model.js";

open_tres.addEventListener('click',()=>{
	form.classList.remove('oculto');
	opaco.classList.add('opaco');
	window.addEventListener('scroll', disableScroll);
});