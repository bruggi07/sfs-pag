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
