// hovers cards------------------
var item = document.querySelectorAll('.item');
item.forEach(function(card){
    card.addEventListener('mouseenter',()=>{
        card.firstElementChild.classList.add('rotar');
    })
    card.addEventListener('mouseleave',()=>{
        setTimeout(()=>{card.firstElementChild.classList.remove('rotar');},1200);
    })
})
let cardInner = document.querySelectorAll('.card__inner');
let contenedor = document.querySelector('.contItemsApp');
let tarjetas = ()=>{
    cardInner.forEach(function(card){
        card.classList.add('rotar');
        setTimeout(()=>{card.classList.remove('rotar');},1500);
    })
}
const observador = new IntersectionObserver(tarjetas,{
    root:null,
    rootMargin:'100px',
    threshold:0.3
})
observador.observe(contenedor);