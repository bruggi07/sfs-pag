function disableScroll(){  
    window.scrollTo(0, 0);
  }
  window.addEventListener('scroll', disableScroll);  
  window.onload = function(){
	      let load = document.getElementById('loading');
	      let contcarga = document.getElementById('contcarga');
	      load.classList.add('cargahide');
	      contcarga.classList.add('imghide');
        window.removeEventListener('scroll', disableScroll);
};