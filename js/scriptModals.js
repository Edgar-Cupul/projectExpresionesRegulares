let modalUnion1 = document.getElementById('modalUnion1');
let flex1 = document.getElementById('flex1');
let abrir1 = document.getElementById('abrir1');
let cerrar1 = document.getElementById('close1');
var animacionUnion1 = new Animador(23, "img/animation/union/dosCaminos/", "dosCaminos", 'close1');

abrir1.addEventListener('click', function(){
    modalUnion1.style.display = 'block';
    animacionUnion1.animate();

});

cerrar1.addEventListener('click', function(){
    modalUnion1.style.display = 'none';

});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex1){
        modalUnion1.style.display = 'none';
    }
});



let modalUnion2 = document.getElementById('modalUnion2');
let flex2 = document.getElementById('flex2');
let abrir2 = document.getElementById('abrir2');
let cerrar2 = document.getElementById('close2');
var animacionUnion2 = new Animador(15, "img/animation/union/dosExpresionesConUnion/", "dosExpresionesConUnion",'close2');

abrir2.addEventListener('click', function(){
    modalUnion2.style.display = 'block';
    animacionUnion2.animate();

});

cerrar2.addEventListener('click', function(){
    modalUnion2.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex2){
        modalUnion2.style.display = 'none';
    }
});



let modalUnion3 = document.getElementById('modalUnion3');
let flex3 = document.getElementById('flex3');
let abrir3 = document.getElementById('abrir3');
let cerrar3 = document.getElementById('close3');
var animacionUnion3 = new Animador(13, "img/animation/union/dosExpresionesSinUnion/", "dosExpresionesSinUnion",'close3');

abrir3.addEventListener('click', function(){
    modalUnion3.style.display = 'block';
    animacionUnion3.animate();

});

cerrar3.addEventListener('click', function(){
    modalUnion3.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex3){
        modalUnion3.style.display = 'none';
    }
});



let modalConcatenacion = document.getElementById('modalConcatenacion');
let flex4 = document.getElementById('flex4');
let abrir4 = document.getElementById('abrir4');
let cerrar4 = document.getElementById('close4');
var animacionConcatenacion = new Animador(19, "img/animation/expresionesConcatenadas/", "expresionesConcatenadas",'close4');

abrir4.addEventListener('click', function(){
    modalConcatenacion.style.display = 'block';
    animacionConcatenacion.animate();
});

cerrar4.addEventListener('click', function(){
    modalConcatenacion.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex4){
        modalConcatenacion.style.display = 'none';
    }
});



let modalCierreEstrella = document.getElementById('modalCierreEstrella');
let flex5 = document.getElementById('flex5');
let abrir5 = document.getElementById('abrir5');
let cerrar5 = document.getElementById('close5');
var animacionCierreDeEstrella = new Animador(30, "img/animation/cierreDeEstrella/", "cierreDeEstrella",'close5');

abrir5.addEventListener('click', function(){
    modalCierreEstrella.style.display = 'block';
    animacionCierreDeEstrella.animate();

});

cerrar5.addEventListener('click', function(){
    modalCierreEstrella.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex5){
        modalCierreEstrella.style.display = 'none';
    }
});



let modalPrecedencia = document.getElementById('modalPrecedencia');
let flex6 = document.getElementById('flex6');
let abrir6 = document.getElementById('abrir6');
let cerrar6 = document.getElementById('close6');
var animacionPrecedenciaDeOperadores = new Animador(40, "img/animation/precedenciaDeOperadores/", "precedenciaDeOperadores",'close6');

abrir6.addEventListener('click', function(){
    modalPrecedencia.style.display = 'block';
    animacionPrecedenciaDeOperadores.animate();
});

cerrar6.addEventListener('click', function(){
    modalPrecedencia.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex6){
        modalPrecedencia.style.display = 'none';
    }
});



let modalCompletez1 = document.getElementById('modalCompletez1');
let flex7 = document.getElementById('flex7');
let abrir7 = document.getElementById('abrir7');
let cerrar7 = document.getElementById('close7');
var animacionCompletez1 = new Animador(56, "img/animation/condiciones/completez1/", "completez1",'close7');

abrir7.addEventListener('click', function(){
    modalCompletez1.style.display = 'block';
    animacionCompletez1.animate();

});

cerrar7.addEventListener('click', function(){
    modalCompletez1.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex7){
        modalCompletez1.style.display = 'none';
    }
});



let modalCompletez2 = document.getElementById('modalCompletez2');
let flex8 = document.getElementById('flex8');
let abrir8 = document.getElementById('abrir8');
let cerrar8 = document.getElementById('close8');
var animacionCompletez2 = new Animador(56, "img/animation/condiciones/completez2/", "completez2",'close8');

abrir8.addEventListener('click', function(){
    modalCompletez2.style.display = 'block';
    animacionCompletez2.animate();
});

cerrar8.addEventListener('click', function(){
    modalCompletez2.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex8){
        modalCompletez2.style.display = 'none';
    }
});


let modalCorreccion= document.getElementById('modalCorreccion');
let flex9 = document.getElementById('flex9');
let abrir9 = document.getElementById('abrir9');
let cerrar9 = document.getElementById('close9');
var animacionCorreccion = new Animador(29, "img/animation/condiciones/correccion/", "correccion",'close9');

abrir9.addEventListener('click', function(){
    modalCorreccion.style.display = 'block';
    animacionCorreccion.animate();
});

cerrar9.addEventListener('click', function(){
    modalCorreccion.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex9){
        modalCorreccion.style.display = 'none';
    }
});



let modalEjemplo1= document.getElementById('modalEjemplo1');
let flex10 = document.getElementById('flex10');
let abrir10 = document.getElementById('abrir10');
let cerrar10 = document.getElementById('close10');
var animacionEjemplo1 = new Animador(10, "img/animation/ejemplo1/", "ejemplo1",'close10');

abrir10.addEventListener('click', function(){
        modalEjemplo1.style.display = 'block';
        animacionEjemplo1.animate();
});

cerrar10.addEventListener('click', function(){
    modalEjemplo1.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex10){
        modalEjemplo1.style.display = 'none';
    }
});



let modalEjemplo2= document.getElementById('modalEjemplo2');
let flex11 = document.getElementById('flex11');
let abrir11 = document.getElementById('abrir11');
let cerrar11 = document.getElementById('close11');
var animacionEjemplo2 = new Animador(10, "img/animation/ejemplo2/", "ejemplo2",'close11');

abrir11.addEventListener('click', function(){
    modalEjemplo2.style.display = 'block';
    animacionEjemplo2.animate();
});

cerrar11.addEventListener('click', function(){
    modalEjemplo2.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex11){
        modalEjemplo2.style.display = 'none';
    }
});



let modalEjemplo3= document.getElementById('modalEjemplo3');
let flex12 = document.getElementById('flex12');
let abrir12 = document.getElementById('abrir12');
let cerrar12 = document.getElementById('close12');
var animacionEjemplo3 = new Animador(13, "img/animation/ejemplo3/", "ejemplo3",'close12');

abrir12.addEventListener('click', function(){
    modalEjemplo3.style.display = 'block';
    animacionEjemplo3.animate();
});

cerrar12.addEventListener('click', function(){
    modalEjemplo3.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex12){
        modalEjemplo3.style.display = 'none';
    }
});



let modalEjemplo4= document.getElementById('modalEjemplo4');
let flex13 = document.getElementById('flex13');
let abrir13 = document.getElementById('abrir13');
let cerrar13 = document.getElementById('close13');
var animacionEjemplo4 = new Animador(13, "img/animation/ejemplo4/", "ejemplo4",'close13');

abrir13.addEventListener('click', function(){
    modalEjemplo4.style.display = 'block';
    animacionEjemplo4.animate();
});

cerrar13.addEventListener('click', function(){
    modalEjemplo4.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex13){
        modalEjemplo4.style.display = 'none';
    }
});


///////////////////////////////////////////////////////
/* ESTA SECCIÓN ES PARA MODIFICAR MODALES PARA ANIMAR*/

