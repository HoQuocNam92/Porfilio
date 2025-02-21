const BarOpen = document.querySelector('.menu-icons');
const Nav = document.querySelector('#nav');
const BarClose = document.querySelector('.remove-icon');

function barToggle(){    
        [BarClose , Nav].forEach((e)=>{
        e.classList.toggle('active');
    })
}

[BarClose, BarOpen].forEach((e)=>{
    e.addEventListener('click', () => {
    barToggle();
    })
})