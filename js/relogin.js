// function valUser(){
// 	var elemento = document.getElementById('usuario');
// 	if (!elemento.checkValidity()){
// 		error(elemento);
// 		elemento.addEventListener('input',valUser);
// 		return false;
// 	}
// 	else{
// 		limpiarError(elemento);
// 		return true;
// 	}
// 	};
// 	function valPass(){
// 	var elemento = document.getElementById('password');
// 	if (!elemento.checkValidity()){
// 		error(elemento);
// 		elemento.addEventListener('input',valPass);
// 		return false;
// 	}
// 	else{
// 		limpiarError(elemento);
// 		return true;
// 	}
// 	};
// function error (elemento){
// 	document.getElementById(`${elemento.id}`).classList.add('errorShow2');
// 	document.getElementById(`${elemento.id}Error`).classList.add('errorShow1');
// 	if(elemento.id=='password'){
// 		document.getElementById(`${elemento.id}ErrorP`).innerText=`Escriba una contraseña válida para continuar`;
// 	}
// 	else{
// 		document.getElementById(`${elemento.id}ErrorP`).innerText=`Escriba un ${elemento.id} válido para continuar`;
// 	}
// 	elemento.focus();
// 	};
	
// 	function limpiarError (elemento){
// 	document.getElementById(`${elemento.id}`).classList.remove('errorShow2');
// 	document.getElementById(`${elemento.id}Error`).classList.remove('errorShow1');
// 	};
	
// 	function validar (e){
// 	if(valUser() && valPass() && true){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// 	};
// 	document.getElementById('btn-relogin').addEventListener('click',(e)=>{
// 		e.preventDefault();
// 		validar();
// 	})
document.querySelector('#incorrectoCerrarAcc').addEventListener('click',()=>{
    document.querySelector('#result').classList.remove('show');
	document.querySelector('#accesoform').classList.add('show');
})