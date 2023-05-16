function disableScroll(){  
    window.scrollTo(0, 0);
  }
  window.addEventListener('scroll', disableScroll);  
  window.onload = function(){
      document.getElementById('loading').classList.add('cargahide');
      document.getElementById('contcarga').classList.add('imghide');
      window.removeEventListener('scroll', disableScroll);
};