// hovers cards------------------
let cardInner = document.querySelectorAll('.card__inner');
cardInner.forEach(card => {

    card.addEventListener('mouseover', () => {
        card.classList.add('rotar');
        card.addEventListener('mouseleave', () => {
            setTimeout(() => { card.classList.remove('rotar') }, 1500);
        });
    });
});

let contenedor = document.querySelector('.contItemsApp');
let tarjetas = (entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            cardInner.forEach(card => {
                card.classList.add('rotar');
                setTimeout(() => { card.classList.remove('rotar'); }, 1500);
            });
        };
    };
};
const observador = new IntersectionObserver(tarjetas, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.9
});
observador.observe(contenedor);