

const animation = document.querySelector('#header');
animation.addEventListener('animationend', () => {
    document.body.style.overflow = 'visible';
})