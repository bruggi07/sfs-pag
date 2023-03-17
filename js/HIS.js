window.onload = function(){
	let load = document.getElementById('loading');
	let contcarga = document.getElementById('contcarga');
	load.classList.add('cargahide');
	contcarga.classList.add('imghide');
}
// formu acceso -------->
let open_acceso = document.getElementById('open_acceso');
let form_acceso = document.getElementById('container_form_acceso');
let close_acceso = document.getElementById('close_acceso');
let opacoacceso = document.getElementById('opaco');
// formu demo------>
let open = document.getElementById('open');
let open_dos = document.getElementById('open2');
let open_tres = document.getElementById('open3');
let form = document.getElementById('container_form');
let close = document.getElementById('close');
let opaco = document.getElementById('opacodemo');
// menu responsive
let btnHambur = document.getElementById('btn_hambur');
let navHeader = document.getElementById('nav_header')

btnHambur.addEventListener('click',()=>{
	navHeader.classList.toggle('hamburoculto')
})
// // formu demo------>
 open.addEventListener('click',()=>{
	form.classList.remove('oculto');
	opaco.classList.add('opaco');
})
open_tres.addEventListener('click',()=>{
	form.classList.remove('oculto');
	opaco.classList.add('opaco');
})
close.addEventListener('click',()=>{
	form.classList.add('oculto');
	opaco.classList.remove('opaco')
})

// formu acceso -------->
open_acceso.addEventListener('click',()=>{
	form_acceso.classList.remove('oculto-acc')
	opacoacceso.classList.add('opaco');
})
close_acceso.addEventListener('click',()=>{
	form_acceso.classList.add('oculto-acc')
	opacoacceso.classList.remove('opaco');
})
// envío de datos a correo desde el form DEMO-------------->

// https://formspree.io/f/mzbwlyjr

let $form = document.getElementById('form-demo');
let loading = document.getElementById('load');
let listo = document.getElementById('env');
let formcon = document.getElementById('formc');
let formEnviar = document.getElementById('btn__enviar');
let formCerrar = document.getElementById('correctoCerrar');
let noListo = document.getElementById('noenv');
let form2Cerrar = document.getElementById('incorrectoCerrar');

formEnviar.addEventListener('click',()=>{
	formcon.classList.add('hide');
	loading.classList.add('show');
})
async	function enviar (event){
		event.preventDefault();
		let fd = new FormData(this)
		let response = await fetch('https://formspree.io/f/mzbwlyjr',{
		method: 'POST',
		body: fd,
		headers: {
			Accept: 'application/json'
		}
	});
	if (response.ok){
		loading.classList.remove('show');
		listo.classList.add('show');
		this.reset();
	}
	else{
		loading.classList.remove('show');
		noListo.classList.add('show');
	}
	};
	formCerrar.addEventListener('click',()=>{
		formcon.classList.remove('hide');
		loading.classList.remove('show');
		listo.classList.remove('show');
		form.classList.add('oculto');
		opaco.classList.remove('opaco')
	})
	form2Cerrar.addEventListener('click',()=>{
		formcon.classList.remove('hide');
		loading.classList.remove('show');
		noListo.classList.remove('show');
	})

$form.addEventListener('submit',enviar);

// Slider ------------------------------------->
//botones externos hacia slider
let btncheck11 = document.getElementById('btnchk11');
let btncheck22 = document.getElementById('btnchk22');
let btncheck33 = document.getElementById('btnchk33');
let btncheck44 = document.getElementById('btnchk44');
let btncheck55 = document.getElementById('btnchk55');
let btncheck66 = document.getElementById('btnchk66');
let btncheck77 = document.getElementById('btnchk77');
let btncheck88 = document.getElementById('btnchk88');
// botones slider
let btncheck1 = document.getElementById('btnchk1');
let btncheck2 = document.getElementById('btnchk2');
let btncheck3 = document.getElementById('btnchk3');
let btncheck4 = document.getElementById('btnchk4');
let btncheck5 = document.getElementById('btnchk5');
let btncheck6 = document.getElementById('btnchk6');
let btncheck7 = document.getElementById('btnchk7');
let btncheck8 = document.getElementById('btnchk8');
let btnMas = document.getElementById('btn-slider-mas');
let btnMenos = document.getElementById('btn-slider-menos');
// input radios
let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let radio3 = document.getElementById('radio3');
let radio4 = document.getElementById('radio4');
let radio5 = document.getElementById('radio5');
let radio6 = document.getElementById('radio6');
let radio7 = document.getElementById('radio7');
let radio8 = document.getElementById('radio8');
// contenidos
let cont1 = document.getElementById('cont1');
let cont2 = document.getElementById('cont2');
let cont3 = document.getElementById('cont3');
let cont4 = document.getElementById('cont4');
let cont5 = document.getElementById('cont5');
let cont6 = document.getElementById('cont6');
let cont7 = document.getElementById('cont7');
let cont8 = document.getElementById('cont8');

function transla (num){
	let arr = [cont1,cont2,cont3,cont4,cont5,cont6,cont7,cont8];
	let i = 1;
	arr.forEach(function(cont){
		if(i<9){
			cont.style.transform='translateX('+(i-num)+'00%)';
		}
		i++
	});
	let cla =[btncheck1,btncheck2,btncheck3,btncheck4,btncheck5,btncheck6,btncheck7,btncheck8];
	cla.forEach(function(clase){
		clase.classList.remove('seleccionado');
	})
	cla[num-1].classList.add('seleccionado');
}
let cambio = 1
btnMas.addEventListener('click', function(){
	let rad =[radio1,radio2,radio3,radio4,radio5,radio6,radio7,radio8];
	if(cambio<8){
		transla(cambio+1);
		rad[cambio-1].checked=false;
		cambio=cambio+1;
	}
	else{
		transla(1);
		cambio=1;
	}
});
btnMenos.addEventListener('click', function(){
	let rad =[radio1,radio2,radio3,radio4,radio5,radio6,radio7,radio8];
	if(cambio>1){
		transla(cambio-1);
		rad[cambio-1].checked=false;
		cambio=cambio-1;
	}
	else{
		transla(8);
		cambio=8;
	}
});
btncheck1.addEventListener('click',function(){
	if(radio1.checked===false){
		transla(1);
		radio1.checked=true;
		cambio=1;
	}
});
btncheck2.addEventListener('click',function(){
	if(radio2.checked===false){
		transla(2);
		radio2.checked=true;
		cambio=2;
	}
});
btncheck3.addEventListener('click',function(){
	if(radio3.checked===false){
		transla(3);
		radio3.checked=true;
		cambio=3;
	}
});
btncheck4.addEventListener('click',function(){
	if(radio4.checked===false){
		transla(4);
		radio4.checked=true;
		cambio=4;
	}
});
btncheck5.addEventListener('click',function(){
	if(radio5.checked===false){
		transla(5);
		radio5.checked=true;
		cambio=5;
	}
});
btncheck6.addEventListener('click',function(){
	if(radio6.checked===false){
		transla(6);
		radio6.checked=true;
		cambio=6;
	}
});
btncheck7.addEventListener('click',function(){
	if(radio7.checked===false){
		transla(7);
		radio7.checked=true;
		cambio=7;
	}
});
btncheck8.addEventListener('click',function(){
	if(radio8.checked===false){
		transla(8);
		radio8.checked=true;
		cambio=8;
	}
});
btncheck11.addEventListener('click',function(){
	if(radio1.checked===false){
		transla(1);
		radio1.checked=true;
		cambio=1;
	}
});
btncheck22.addEventListener('click',function(){
	if(radio2.checked===false){
		transla(2);
		radio2.checked=true;
		cambio=2;
	}
});
btncheck33.addEventListener('click',function(){
	if(radio3.checked===false){
		transla(3);
		radio3.checked=true;
		cambio=3;
	}
});
btncheck44.addEventListener('click',function(){
	if(radio4.checked===false){
		transla(4);
		radio4.checked=true;
		cambio=4;
	}
});
btncheck55.addEventListener('click',function(){
	if(radio5.checked===false){
		transla(5);
		radio5.checked=true;
		cambio=5;
	}
});
btncheck66.addEventListener('click',function(){
	if(radio6.checked===false){
		transla(6);
		radio6.checked=true;
		cambio=6;
	}
});
btncheck77.addEventListener('click',function(){
	if(radio7.checked===false){
		transla(7);
		radio7.checked=true;
		cambio=7;
	}
});
btncheck88.addEventListener('click',function(){
	if(radio8.checked===false){
		transla(8);
		radio8.checked=true;
		cambio=8;
	}
});

//smooth links con jquery
$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".link").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 650, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });