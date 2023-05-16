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
/**
 * @fileoverview
 * Provides methods for the Hello Endpoints sample UI and interaction with the
 * Hello Endpoints API.
 */

/** google global namespace for Google projects. */
var sfs = sfs || {};

/** appengine namespace for Google Developer Relations projects. */
sfs.gae = sfs.gae || {};


/** namespace for this App. */
sfs.gae.login = sfs.gae.login  || {};

sfs.gae.login.intentar = function (resp,intento){
	
	if (!resp.code){
		//document.querySelector('#result').innerHTML=resp.data;
		var redirect = resp.data["redirect"];
		var error    = resp.data["error"];
		
		if(redirect!=null){ 
			document.querySelector('#loadacc').classList.add('show');
			document.querySelector('#accesoform').classList.remove('show');
			
			
			var delay1=7000; //7 second
			
			setTimeout(function() {
				if(intento == 1){
					//el primer reintento trato de cambiar el servidor
					document.querySelector('#loadacc').classList.add('show');
					document.querySelector('#accesoform').classList.remove('show');
					
					gapi.client.sfsLogin.doLogin({
					'group': document.querySelector('#group').value,
					'user': document.querySelector('#usuario').value,
					'password': document.querySelector('#contrasenia').value,
					'intento': intento
                    }).execute(function(resp){sfs.gae.login.intentar(resp,intento+1);});
					
				}else{
					//el primer reintento trato le avisa al usuario
					document.querySelector('#loadacc').classList.remove('show');
					document.querySelector('#result').classList.add('show');
					document.querySelector('#msjresult').innerHTML='Parece estar demorando demasiado, por favor intente nuevamente.';
					// $btn.button('reset');
				}
			}, delay1);
			
			window.location.assign(redirect); 
			// console.log(redirect);
			
		}
		else {
			if(error!=null){ 
				// document.querySelector('#result').innerHTML=error;
				document.querySelector('#loadacc').classList.remove('show');
					document.querySelector('#result').classList.add('show');
					document.querySelector('#msjresult').innerHTML=error;
			}
		}
	}
	else{
		// document.querySelector('#result').innerHTML="GAE: No hay servicio disponible" ;
		document.querySelector('#loadacc').classList.remove('show');
		document.querySelector('#result').classList.add('show');
		document.querySelector('#msjresult').innerHTML='GAE: No hay servicio disponible';
	}
	
	
}


sfs.gae.login.tryProduct = function(url,retry){
	if (retry>10) alert ("Por favor,intente nuevamente mas tarde"); //10 reintentos por obtener un servidor 
	else{
	$.get( url +"&redirect=false" +"&retry="+retry, function( data ) {

		setTimeout(function() {
			retry=retry+1;
			sfs.gae.login.tryProduct(url,retry);
			
		},4000 ); //2000 4 segundo para reintentar
		
		window.location.assign(data);
		

		});	
	}
}

sfs.gae.login.initOK= function () {
	
	var submitButton= document.querySelector('#btn__acceso');
	submitButton.addEventListener('click', function(e) {
		if(validar()){
		document.querySelector('#loadacc').classList.add('show');
		document.querySelector('#accesoform').classList.remove('show');
		var openIdAccount = document.querySelector('#openIdAccount');
		var sopenIdAccount=null; 
		if(openIdAccount) sopenIdAccount=openIdAccount.value;
		
		if(sopenIdAccount){
			gapi.client.sfsLogin.doLogin({'group': document.querySelector('#group').value,
											'user': 	  sopenIdAccount,
											'password': document.querySelector('#contrasenia').value,
											'openIdAccount': sopenIdAccount,
											'intento': 0
										}).execute(
											function(resp){
												sfs.gae.login.intentar(resp,1,$btn);
											});
		}
		else{
			gapi.client.sfsLogin.doLogin({'group': document.querySelector('#group').value,
                'user': document.querySelector('#usuario').value,
				'password': document.querySelector('#contrasenia').value,
				'openIdAccount': null,
				'intento': 0
            }).execute(
				function(resp){
					sfs.gae.login.intentar(resp,1);
				});
		}
		}
		else{
			e.preventDefault();
		}
	}); 

};
/**
 * Initializes the application.
 * @param {string} apiRoot Root of the API's path.
 */
sfs.gae.login.init = function(apiRoot) {
  // Loads the OAuth and helloworld APIs asynchronously, and triggers login
  // when they have completed.
var apisToLoad;
var callback = function() {
    if (--apisToLoad == 0) {
		sfs.gae.login.initOK();
    }
}

  apisToLoad = 1; // must match number of calls to gapi.client.load()
gapi.client.load('sfsLogin', 'v1', callback, apiRoot);
};