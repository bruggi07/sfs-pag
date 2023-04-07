const openf = document.getElementById('open');
const open_dos = document.getElementById('open2');
const open_tres = document.getElementById('open3');
const closef = document.getElementById('close');
const $formdemo = document.getElementById('form-demo');
const opaco = document.getElementById('opacodemo');
const loading = document.getElementById('load');
const listo = document.getElementById('env');
const formcon = document.getElementById('formc');
const formEnviar = document.getElementById('btn__enviar');
const formCerrar = document.getElementById('correctoCerrar');
const noListo = document.getElementById('noenv');
const form2Cerrar = document.getElementById('incorrectoCerrar');
const form = document.getElementById('container_form');
const open_acceso = document.getElementById('open_acceso');
const open_acceso_mobil = document.getElementById('open_acceso-mobil');
const form_acceso = document.getElementById('container_form_acceso');
const close_acceso = document.getElementById('close_acceso');
const opacoacceso = document.getElementById('opaco');
export default function disableScroll(){  
    window.scrollTo(0, 0);
  }

export {openf,open_dos,open_tres,closef,$formdemo,opaco,loading,listo,formcon,formEnviar,formCerrar,noListo,form2Cerrar,form,open_acceso,form_acceso,close_acceso,opacoacceso,open_acceso_mobil};

