import { open_tres,form,opaco,ventpage } from "./modules/model.js";

ventpage();
open_tres.addEventListener('click',()=>{
	form.classList.remove('oculto');
	opaco.classList.add('opaco');
});
// menu responsive
let btnHambur = document.getElementById('btn_hambur');
let navHeader = document.getElementById('nav_header')

btnHambur.addEventListener('click',()=>{
	navHeader.classList.toggle('hamburoculto')
})
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