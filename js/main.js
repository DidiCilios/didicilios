/* Carrosel */

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider(){
    slider[currentSlide].classList.add('on');
}

function nextSlider(){
    hideSlider()
    if(currentSlide === slider.length -1) {
        currentSlide = 0;
    }else{
        currentSlide++;
    }
    showSlider();
}

function prevSlider(){
    hideSlider()
    if(currentSlide === 0) {
        currentSlide = slider.length -1;
    }else{
        currentSlide--;
    }
    showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

setInterval(nextSlider, 2000);



/*<!------------------------------------------------------------------------- scrollreveal  ----------------------------------------------------------------->*/
window.sr = ScrollReveal ({reset: true});
sr.reveal('', {duration: 1000});


/*Quem sou eu*/ 

sr.reveal('.headline1',{
    rotate: {x: 0, y: 80, z: 0},
    duration:400,
    delay:100
});


sr.reveal('.headline2',{
    rotate: {x: 0, y: 80, z: 0},
    duration:400,
    delay:100
});

sr.reveal('#testimonials-container',{
    rotate: {x: 0, y: 80, z: 0},
    duration:400,
    delay:100
});


/*Quer mais clientes*/ 
sr.reveal('.itens', {
    rotate: {x: 0, y: 80, z: 0},
    duration:700
});

/*Quer mais clientes?*/ 
sr.reveal('#features-container',{
    rotate: {x: 0, y: 80, z: 0},
    duration:400,
    delay:100
});

sr.reveal('.headline',{
    rotate: {x: 0, y: 80, z: 0},
    duration:400,
    delay:100
});

/*Nosso serviço*/
sr.reveal('#product-container',{
    rotate: {x: 0, y: 80, z: 0},
    duration:400,
    delay:100
});

sr.reveal('#importante-container',{
    rotate: {x: 0, y: 80, z: 0},
    duration:400,
    delay:100
});


/*Serviços adicionais*/ 

sr.reveal('.titulo_do_servico',{
    rotate: {x: 0, y: 80, z: 0},
    duration:400,
    delay:100
});

sr.reveal('#servico-container',{
    rotate: {x: 0, y: 80, z: 0},
    duration:400,
    delay:100
});
/*Formulário*/ 
sr.reveal('.formuesquerda',{
    rotate: {x: 0, y: 80, z: 0},
    duration:400,
    delay:100
});

sr.reveal('.formu',{
    rotate: {x: 0, y: 80, z: 0},
    duration:400,
    delay:100
});


/*<!------------------------------------------------------------------------- Navbar  ----------------------------------------------------------------->*/



function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    let mexebaixo = document.getElementById('showcase');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        mexebaixo.style.height = "80vh";
        document.querySelector('.icon-menu').src = "img/menu_white_36dp.svg";
        
    } else {
        mexebaixo.style.height = "100vh";
        menuMobile.classList.add('open');
        document.querySelector('.icon-menu').src = "img/close_white_36dp.svg";

    }

}





