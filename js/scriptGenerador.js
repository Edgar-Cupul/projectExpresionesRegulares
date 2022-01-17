//Declaración inicial
let modalGenerador = document.getElementById('modalGenerador');
let flexGenerador = document.getElementById('flexGenerador');
let cerrarGenerador = document.getElementById('closeGenerador');

//Declaraciones por botón
let abrirA0E1A1 = document.getElementById('A0E1A1');
var animA0E1A1 = new Animador(11,"img/animation/generador/Primer_Alfabeto/1_primera_expresion/aceptadas/palabra_a/","generador",'closeGenerador');

abrirA0E1A1.addEventListener('click', function(){
    modalGenerador.style.display = 'block';
    animA0E1A1.animate();
});

cerrarGenerador.addEventListener('click', function(){
    modalGenerador.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flexGenerador){
        modalGenerador.style.display = 'none';
    }
});



let abrirA0E1A2 = document.getElementById('A0E1A2');
var animA0E1A2 = new Animador(12,"img/animation/generador/Primer_Alfabeto/1_primera_expresion/aceptadas/palabra_aaaa/","generador",'closeGenerador');

abrirA0E1A2.addEventListener('click', function(){
    modalGenerador.style.display = 'block';
    animA0E1A2.animate();
});

cerrarGenerador.addEventListener('click', function(){
    modalGenerador.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flexGenerador){
        modalGenerador.style.display = 'none';
    }
});



let abrirA0E1A3 = document.getElementById('A0E1A3');
let animA0E1A3 = new Animador(11,"img/animation/generador/Primer_Alfabeto/1_primera_expresion/aceptadas/palabra_aabb/","generador",'closeGenerador');

abrirA0E1A3.addEventListener('click', function(){
    modalGenerador.style.display = 'block';
    animA0E1A3.animate();
});

cerrarGenerador.addEventListener('click', function(){
    modalGenerador.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flexGenerador){
        modalGenerador.style.display = 'none';
    }
});



let abrirA0E1R1 = document.getElementById('A0E1R1');
var animA0E1R1 = new Animador(12,"img/animation/generador/Primer_Alfabeto/1_primera_expresion/rechazadas/palabra_ba/","generador",'closeGenerador');

abrirA0E1R1.addEventListener('click', function(){
    modalGenerador.style.display = 'block';
    animA0E1R1.animate();
});

cerrarGenerador.addEventListener('click', function(){
    modalGenerador.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flexGenerador){
        modalGenerador.style.display = 'none';
    }
});



let abrirA0E1R2 = document.getElementById('A0E1R2');
var animA0E1R2 = new Animador(12,"img/animation/generador/Primer_Alfabeto/1_primera_expresion/rechazadas/palabra_aaba/","generador",'closeGenerador');

abrirA0E1R2.addEventListener('click', function(){
    modalGenerador.style.display = 'block';
    animA0E1R2.animate();
});

cerrarGenerador.addEventListener('click', function(){
    modalGenerador.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flexGenerador){
        modalGenerador.style.display = 'none';
    }
});



let abrirA0E1R3 = document.getElementById('A0E1R3');
var animA0E1R3 = new Animador(12,"img/animation/generador/Primer_Alfabeto/1_primera_expresion/rechazadas/palabra_bbba/","generador",'closeGenerador');

abrirA0E1R3.addEventListener('click', function(){
    modalGenerador.style.display = 'block';
    animA0E1R3.animate();
});

cerrarGenerador.addEventListener('click', function(){
    modalGenerador.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flexGenerador){
        modalGenerador.style.display = 'none';
    }
});
///////////


let abrirA0E2A1 = document.getElementById('A0E2A1');
var animA0E2A1 = new Animador(12,"img/animation/generador/Primer_Alfabeto/2_segunda_expresion/aceptadas/palabra_ab/","generador",'closeGenerador');

abrirA0E2A1.addEventListener('click', function(){
    modalGenerador.style.display = 'block';
    animA0E2A1.animate();
});

cerrarGenerador.addEventListener('click', function(){
    modalGenerador.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flexGenerador){
        modalGenerador.style.display = 'none';
    }
});

/*
let abrirA0E2A2 = document.getElementById('A0E2A2');
var animA0E2A1 = new Animador(14,"img/animation/generador/Primer_Alfabeto/2_segunda_expresion/aceptadas/Palabra_aaaab/","generador",'closeGenerador');
*/