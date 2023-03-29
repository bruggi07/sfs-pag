// formu demo------>
let open = document.getElementById('open');
let form = document.getElementById('container_form');
let close = document.getElementById('close');
let opaco = document.getElementById('opacodemo');
let $formdemo = document.getElementById('form-demo');
let loading = document.getElementById('load');
let listo = document.getElementById('env');
let formcon = document.getElementById('formc');
let formEnviar = document.getElementById('btn__enviar');
let formCerrar = document.getElementById('correctoCerrar');
let noListo = document.getElementById('noenv');
let form2Cerrar = document.getElementById('incorrectoCerrar');
    // export {open,open_dos,open_tres,form,close,opaco,$formdemo,loading,listo,formcon,formEnviar,formCerrar,noListo,form2Cerrar}
  open.addEventListener('click',()=>{
	  form.classList.remove('oculto');
	  opaco.classList.add('opaco');
})
  close.addEventListener('click',()=>{
	  form.classList.add('oculto');
	  opaco.classList.remove('opaco')
})
opaco.addEventListener('click',()=>{
    form.classList.add('oculto');
	opaco.classList.remove('opaco')
})
async function enviar (event){
    event.preventDefault();
    let fd = new FormData(this)
    let response = await fetch('https://formspree.io/f/mbjeaonn',{
    method: 'POST',
    body: fd,
    headers: {
        Accept: 'application/json'
    }
});
if (response.ok){
      loading.classList.remove('show');
      listo.classList.add('show');
      setTimeout(()=>{   
        formcon.classList.remove('hide');
        listo.classList.remove('show');
    },10000);
       
    this.reset();
}
else{
      loading.classList.remove('show');
       noListo.classList.add('show');
}
};
   form2Cerrar.addEventListener('click',()=>{
       formcon.classList.remove('hide');
       noListo.classList.remove('show');
});
function valNombre(){
var elemento = document.getElementById('nombre');
if (!elemento.checkValidity()){
    error(elemento);
    elemento.addEventListener('input',valNombre);
    return false;
}
else{
    limpiarError(elemento);
    return true;
}
};
function valEmail(){
var elemento = document.getElementById('email');
if (!elemento.checkValidity()){
    error(elemento);
    elemento.addEventListener('input',valEmail);
    return false;
}
else{
    limpiarError(elemento);
    return true;
}
};
function valTelefono(){
var elemento = document.getElementById('telefono');
if (!elemento.checkValidity()){
    error(elemento);
    elemento.addEventListener('input',valTelefono);
    return false;
}
else{
    limpiarError(elemento);
    return true;
}
};
function valCiudad(){
var elemento = document.getElementById('ciudad');
if (!elemento.checkValidity()){
    error(elemento);
    elemento.addEventListener('input',valCiudad);
    return false;
}
else{
    limpiarError(elemento);
    return true;
}
};
function valInstitucion(){
var elemento = document.getElementById('institucion');
if (!elemento.checkValidity()){
    error(elemento);
    elemento.addEventListener('input',valInstitucion);
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
if(elemento.id=='ciudad' || elemento.id=='institucion'){
    document.getElementById(`${elemento.id}ErrorP`).innerText=`Escriba una ${elemento.id} válido para continuar`;
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
if(valNombre() && valEmail() && valTelefono() && valCiudad() && valInstitucion() && true){
    return true;
}
else{
    return false;
}
};

   formEnviar.addEventListener('click',(e)=>{
if (validar()){
    formcon.classList.add('hide');
    loading.classList.add('show');
    $formdemo.addEventListener('submit',enviar);
}
else{
    e.preventDefault();
}
});