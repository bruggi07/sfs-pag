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