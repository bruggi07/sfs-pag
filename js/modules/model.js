// const y var y funciones globales en la página

const openf = document.getElementById('open');
const open_dos = document.getElementById('open2');
const open_tres = document.getElementById('open3');
const open_cuatro = document.getElementById('open4');
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
const btn__enviar_acceso = document.getElementById('btn__acceso');
const header = document.getElementById('header');
const imglogo = document.querySelector('.logo-header > .imglogo');
const fontsizebtnacceso = document.querySelector('.btn-acceso');
const fonsizebtnpresent = document.querySelector('.btn-demo')
const nav = document.querySelector('.logo-header');
const navFontSize = document.querySelector('.nav');
const imgmini = document.getElementById('minilogo');
const imggrande = document.getElementById('logogrande');
const transitionop = document.querySelector('.header-transition');

export function ventpage (){
  var ventana = screen.width;
  if(ventana > 500){
    nav.classList.add('navscroll');
    fontsizebtnacceso.classList.add('scrollbtnacceso');
    fonsizebtnpresent.classList.add('scrollbtnacceso');
    header.classList.add('menuscroll');
    transitionop.classList.add('menuscroll');
    navFontSize.classList.add('nav-scroll');
    imggrande.style.opacity='0';
    imggrande.style.left='-70px';
    imggrande.style.scale='0.6';
    imgmini.style.scale='0.6';
    imgmini.style.top='-5px';
    transitionop.style.opacity="1";
  }
}

export {openf,open_dos,open_tres,closef,$formdemo,opaco,loading,listo,formcon,formEnviar,formCerrar,noListo,form2Cerrar,form,open_acceso,form_acceso,close_acceso,opacoacceso,open_acceso_mobil,btn__enviar_acceso,open_cuatro,header,imglogo,fontsizebtnacceso,fonsizebtnpresent,nav,navFontSize,imgmini,imggrande,transitionop};