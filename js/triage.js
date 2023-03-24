window.onload = function(){
	let load = document.getElementById('loading');
	let contcarga = document.getElementById('contcarga');
	load.classList.add('cargahide');
	contcarga.classList.add('imghide');
};
let open_tres = document.getElementById('open3');
open_tres.addEventListener('click',()=>{
	let form = document.getElementById('container_form');
	let opaco = document.getElementById('opacodemo');
	form.classList.remove('oculto');
	opaco.classList.add('opaco');
});