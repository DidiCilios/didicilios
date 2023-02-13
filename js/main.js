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
        mexebaixo.style.height = "100vh";
        
    } else {
        mexebaixo.style.height = "120vh";
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";

    }

}
/*<!------------------------------------------------------------------------- Dúvidas  ----------------------------------------------------------------->*/



function leiaMais() {
    let menuMobile = document.querySelector('.primeiraduvida');
    let menuMobileDois = document.querySelector('#mais');
    let btnmenu = document.querySelector('#btnLeiaMais');

    if (menuMobile.classList.contains('openspan')) {
        menuMobile.classList.remove('openspan');
        menuMobileDois.style.overflow="hidden";
        btnmenu.classList.remove('openbtnum');
        btnLeiaMais.innerHTML = '<i class="fa-solid fa-regular fa-circle-arrow-down fa-2x color-primary"></i>';
        
    } else {
        menuMobile.classList.add('openspan');
        menuMobileDois.style.overflow="visible";
        menuMobileDois.style.animation = "fadeIn 2s";
        btnmenu.classList.add('openbtnum');
        btnLeiaMais.innerHTML = '<i class="fa-solid fa-regular fa-circle-arrow-up fa-2x color-primary"></i>';
    }
}

function leiaMaisDois() {
    let menuMobile = document.querySelector('.segundaduvida');
    let menuMobileDois = document.querySelector('#mais_dois');
    let btnmenu = document.querySelector('#btnLeiaMais_dois');

    if (menuMobile.classList.contains('openspan_dois')) {
        menuMobile.classList.remove('openspan_dois');
        menuMobileDois.style.overflow="hidden";
        btnmenu.classList.remove('openbtndois');
        btnLeiaMais_dois.innerHTML = '<i class="fa-solid fa-regular fa-circle-arrow-down fa-2x color-primary"></i>';
        
    } else {
        menuMobile.classList.add('openspan_dois');
        menuMobileDois.style.overflow="visible";
        menuMobileDois.style.animation = "fadeIn 2s";
        btnmenu.classList.add('openbtndois');
        btnLeiaMais_dois.innerHTML = '<i class="fa-solid fa-regular fa-circle-arrow-up fa-2x color-primary"></i>';
    }
}

function leiaMaisTres() {
    let menuMobile = document.querySelector('.terceiraduvida');
    let menuMobileDois = document.querySelector('#mais_tres');
    let btnmenu = document.querySelector('#btnLeiaMais_tres');

    if (menuMobile.classList.contains('openspan_tres')) {
        menuMobile.classList.remove('openspan_tres');
        menuMobileDois.style.overflow="hidden";
        btnmenu.classList.remove('openbtntres');
        btnLeiaMais_tres.innerHTML = '<i class="fa-solid fa-regular fa-circle-arrow-down fa-2x color-primary"></i>';
        
    } else {
        menuMobile.classList.add('openspan_tres');
        menuMobileDois.style.overflow="visible";
        menuMobileDois.style.animation = "fadeIn 2s";
        btnmenu.classList.add('openbtntres');
        btnLeiaMais_tres.innerHTML = '<i class="fa-solid fa-regular fa-circle-arrow-up fa-2x color-primary"></i>';
    }
}


function leiaMaisQuatro() {
    let menuMobile = document.querySelector('.quartaduvida');
    let menuMobileDois = document.querySelector('#mais_quatro');
    let btnmenu = document.querySelector('#btnLeiaMais_quatro');

    if (menuMobile.classList.contains('openspan_quatro')) {
        menuMobile.classList.remove('openspan_quatro');
        menuMobileDois.style.overflow="hidden";
        btnmenu.classList.remove('openbtnquatro');
        btnLeiaMais_quatro.innerHTML = '<i class="fa-solid fa-regular fa-circle-arrow-down fa-2x color-primary"></i>';
        
    } else {
        menuMobile.classList.add('openspan_quatro');
        menuMobileDois.style.overflow="visible";
        btnmenu.classList.add('openbtnquatro');
        menuMobileDois.style.animation = "fadeIn 2s";
        btnLeiaMais_quatro.innerHTML = '<i class="fa-solid fa-regular fa-circle-arrow-up fa-2x color-primary"></i>';
    }
}

function leiaMaisCinco() {
    let menuMobile = document.querySelector('.quintaduvida');
    let menuMobileDois = document.querySelector('#mais_cinco');
    let btnmenu = document.querySelector('#btnLeiaMais_cinco');

    if (menuMobile.classList.contains('openspan_cinco')) {
        menuMobile.classList.remove('openspan_cinco');
        menuMobileDois.style.overflow="hidden";
        btnmenu.classList.remove('openbtncinco');
        btnLeiaMais_cinco.innerHTML = '<i class="fa-solid fa-regular fa-circle-arrow-down fa-2x color-primary"></i>';
        
    } else {
        menuMobile.classList.add('openspan_cinco');
        menuMobileDois.style.overflow="visible";
        menuMobileDois.style.animation = "fadeIn 2s";
        btnmenu.classList.add('openbtncinco');
        btnLeiaMais_cinco.innerHTML = '<i class="fa-solid fa-regular fa-circle-arrow-up fa-2x color-primary"></i>';
    }
}



