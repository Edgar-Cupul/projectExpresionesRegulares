//Declaración inicial
let modalGenerador = document.getElementById('modalGenerador');
let flexGenerador = document.getElementById('flexGenerador');
let cerrarGenerador = document.getElementById('closeGenerador');
let regresarGenerador = document.getElementById('regresarGenerador');

var animacionGenerador = new Animador(11, "img/animation/generador/Primer_Alfabeto/1_primera_expresion/aceptadas/palabra_a/", "generador", 'closeGenerador', 'generador')

cerrarGenerador.addEventListener('click', function () {
    modalGenerador.style.display = 'none';
});

regresarGenerador.addEventListener('click', function () {
    modalGenerador.style.display = 'none'
});

window.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target == flexGenerador) {
        modalGenerador.style.display = 'none';
    }
});

//Alfabeto 0
let abrirA0E1A1 = document.getElementById('A0E1A1');
abrirA0E1A1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(11);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/1_primera_expresion/aceptadas/palabra_a/");
    animacionGenerador.animate();
});

let abrirA0E1A2 = document.getElementById('A0E1A2');
abrirA0E1A2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(11);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/1_primera_expresion/aceptadas/palabra_aaaa/");
    animacionGenerador.animate();
});

let abrirA0E1A3 = document.getElementById('A0E1A3');
abrirA0E1A3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(11);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/1_primera_expresion/aceptadas/palabra_aabb/");
    animacionGenerador.animate();
});


let abrirA0E1R1 = document.getElementById('A0E1R1');
abrirA0E1R1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/1_primera_expresion/rechazadas/palabra_ba/");
    animacionGenerador.animate();
});

let abrirA0E1R2 = document.getElementById('A0E1R2');
abrirA0E1R2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/1_primera_expresion/rechazadas/palabra_aaba/");
    animacionGenerador.animate();
});

let abrirA0E1R3 = document.getElementById('A0E1R3');
abrirA0E1R3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/1_primera_expresion/rechazadas/palabra_bbba/");
    animacionGenerador.animate();
});



let abrirA0E2A1 = document.getElementById('A0E2A1');
abrirA0E2A1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/2_segunda_expresion/aceptadas/Palabra_ab/");
    animacionGenerador.animate();
});

let abrirA0E2A2 = document.getElementById('A0E2A2');
abrirA0E2A2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(14);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/2_segunda_expresion/aceptadas/Palabra_aaaab/");
    animacionGenerador.animate();
});

let abrirA0E2A3 = document.getElementById('A0E2A3');
abrirA0E2A3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/2_segunda_expresion/aceptadas/Palabra_aabbab/");
    animacionGenerador.animate();
});


let abrirA0E2R1 = document.getElementById('A0E2R1');
abrirA0E2R1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(14);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/2_segunda_expresion/rechazadas/palabra_ba/");
    animacionGenerador.animate();
});

let abrirA0E2R2 = document.getElementById('A0E2R2');
abrirA0E2R2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/2_segunda_expresion/rechazadas/palabra_ababa/");
    animacionGenerador.animate();
});

let abrirA0E2R3 = document.getElementById('A0E2R3');
abrirA0E2R3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/2_segunda_expresion/rechazadas/palabra_abbbba/");
    animacionGenerador.animate();
});



let abrirA0E3A1 = document.getElementById('A0E3A1');
abrirA0E3A1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(11);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/3_tercera_expresion/aceptadas/palabra_a/");
    animacionGenerador.animate();
});

let abrirA0E3A2 = document.getElementById('A0E3A2');
abrirA0E3A2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(18);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/3_tercera_expresion/aceptadas/palabra_baaba/");
    animacionGenerador.animate();
});

let abrirA0E3A3 = document.getElementById('A0E3A3');
abrirA0E3A3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(18);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/3_tercera_expresion/aceptadas/palabra_ababa/");
    animacionGenerador.animate();
});


let abrirA0E3R1 = document.getElementById('A0E3R1');
abrirA0E3R1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(17);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/3_tercera_expresion/rechazadas/palabra_baaa/");
    animacionGenerador.animate();
});

let abrirA0E3R2 = document.getElementById('A0E3R2');
abrirA0E3R2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(16);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/3_tercera_expresion/rechazadas/palabra_aaaba/");
    animacionGenerador.animate();
});

let abrirA0E3R3 = document.getElementById('A0E3R3');
abrirA0E3R3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(15);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/3_tercera_expresion/rechazadas/palabra_abaab/");
    animacionGenerador.animate();
});



let abrirA0E4A1 = document.getElementById('A0E4A1');
abrirA0E4A1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/4_cuarta_expresion/aceptadas/palabra_e/");
    animacionGenerador.animate();
});

let abrirA0E4A2 = document.getElementById('A0E4A2');
abrirA0E4A2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(14);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/4_cuarta_expresion/aceptadas/palabra_aaaa/");
    animacionGenerador.animate();
});

let abrirA0E4A3 = document.getElementById('A0E4A3');
abrirA0E4A3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(14);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/4_cuarta_expresion/aceptadas/palabra_abbbbb/");
    animacionGenerador.animate();
});


let abrirA0E4R1 = document.getElementById('A0E4R1');
abrirA0E4R1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(17);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/4_cuarta_expresion/rechazadas/palabra_aaabc/");
    animacionGenerador.animate();
});

let abrirA0E4R2 = document.getElementById('A0E4R2');
abrirA0E4R2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(26);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/4_cuarta_expresion/rechazadas/palabra_abcd/");
    animacionGenerador.animate();
});

let abrirA0E4R3 = document.getElementById('A0E4R3');
abrirA0E4R3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(16);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/4_cuarta_expresion/rechazadas/palabra_adbb/");
    animacionGenerador.animate();
});


let abrirA0E5A1 = document.getElementById('A0E5A1');
abrirA0E5A1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/5_quinta_expresion/aceptadas/palabra_baa/");
    animacionGenerador.animate();
});

let abrirA0E5A2 = document.getElementById('A0E5A2');
abrirA0E5A2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/5_quinta_expresion/aceptadas/palabra_aaa/");
    animacionGenerador.animate();
});

let abrirA0E5A3 = document.getElementById('A0E5A3');
abrirA0E5A3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/5_quinta_expresion/aceptadas/palabra_aaabbbb/");
    animacionGenerador.animate();
});


let abrirA0E5R1 = document.getElementById('A0E5R1');
abrirA0E5R1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/5_quinta_expresion/rechazadas/palabra_aa/");
    animacionGenerador.animate();
});

let abrirA0E5R2 = document.getElementById('A0E5R2');
abrirA0E5R2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/5_quinta_expresion/rechazadas/palabra_aaaab/");
    animacionGenerador.animate();
});

let abrirA0E5R3 = document.getElementById('A0E5R3');
abrirA0E5R3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Primer_Alfabeto/5_quinta_expresion/rechazadas/palabra_abbbb/");
    animacionGenerador.animate();
});


//ALFABETO 1
let abrirA1E1A1 = document.getElementById('A1E1A1');
abrirA1E1A1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(16);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/1_primera_expresion/aceptadas/Palabra_aa/");
    animacionGenerador.animate();
});

let abrirA1E1A2 = document.getElementById('A1E1A2');
abrirA1E1A2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(16);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/1_primera_expresion/aceptadas/Palabra_bbba/");
    animacionGenerador.animate();
});

let abrirA1E1A3 = document.getElementById('A1E1A3');
abrirA1E1A3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(15);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/1_primera_expresion/aceptadas/Palabra_abbbbbba/");
    animacionGenerador.animate();
});

let abrirA1E1R1 = document.getElementById('A1E1R1');
abrirA1E1R1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(17);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/1_primera_expresion/rechazadas/Palabra_bcc/");
    animacionGenerador.animate();
});

let abrirA1E1R2 = document.getElementById('A1E1R2');
abrirA1E1R2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(17);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/1_primera_expresion/rechazadas/Palabra_abc/");
    animacionGenerador.animate();
});

let abrirA1E1R3 = document.getElementById('A1E1R3');
abrirA1E1R3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(17);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/1_primera_expresion/rechazadas/Palabra_acccc/");
    animacionGenerador.animate();
});


let abrirA1E2A1 = document.getElementById('A1E2A1');
abrirA1E2A1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(14);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/2_segunda_expresion/aceptadas/Palabra_abc/");
    animacionGenerador.animate();
});

let abrirA1E2A2 = document.getElementById('A1E2A2');
abrirA1E2A2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(15);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/2_segunda_expresion/aceptadas/Palabra_abbcc/");
    animacionGenerador.animate();
});

let abrirA1E2A3 = document.getElementById('A1E2A3');
abrirA1E2A3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(14);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/2_segunda_expresion/aceptadas/Palabra_bbbbbc/");
    animacionGenerador.animate();
});


let abrirA1E2R1 = document.getElementById('A1E2R1');
abrirA1E2R1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(15);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/2_segunda_expresion/rechazadas/Palabra_abbbac/");
    animacionGenerador.animate();
});

let abrirA1E2R2 = document.getElementById('A1E2R2');
abrirA1E2R2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(15);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/2_segunda_expresion/rechazadas/Palabra_aabbcc/");
    animacionGenerador.animate();
});

let abrirA1E2R3 = document.getElementById('A1E2R3');
abrirA1E2R3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(16);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/2_segunda_expresion/rechazadas/Palabra_aaaacccbbb/");
    animacionGenerador.animate();
});


let abrirA1E3A1 = document.getElementById('A1E3A1');
abrirA1E3A1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(10);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/3_tercera_expresion/aceptadas/Palabra_ac/");
    animacionGenerador.animate();
});

let abrirA1E3A2 = document.getElementById('A1E3A2');
abrirA1E3A2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(10);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/3_tercera_expresion/aceptadas/Palabra_abc/");
    animacionGenerador.animate();
});

let abrirA1E3A3 = document.getElementById('A1E3A3');
abrirA1E3A3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(10);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/3_tercera_expresion/aceptadas/Palabra_abbbbbc/");
    animacionGenerador.animate();
});

let abrirA1E3R1 = document.getElementById('A1E3R1');
abrirA1E3R1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(11);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/3_tercera_expresion/rechazadas/Palabra_baaac/");
    animacionGenerador.animate();
});

let abrirA1E3R2 = document.getElementById('A1E3R2');
abrirA1E3R2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(11);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/3_tercera_expresion/rechazadas/Palabra_caaab/");
    animacionGenerador.animate();
});

let abrirA1E3R3 = document.getElementById('A1E3R3');
abrirA1E3R3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(11);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/3_tercera_expresion/rechazadas/Palabra_bcaa/");
    animacionGenerador.animate();
});


let abrirA1E4A1 = document.getElementById('A1E4A1');
abrirA1E4A1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/4_cuarta_expresion/aceptadas/Palabra_bab/");
    animacionGenerador.animate();
});

let abrirA1E4A2 = document.getElementById('A1E4A2');
abrirA1E4A2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/4_cuarta_expresion/aceptadas/Palabra_aabab/");
    animacionGenerador.animate();
});

let abrirA1E4A3 = document.getElementById('A1E4A3');
abrirA1E4A3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/4_cuarta_expresion/aceptadas/Palabra_babcccc/");
    animacionGenerador.animate();
});

let abrirA1E4R1 = document.getElementById('A1E4R1');
abrirA1E4R1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/4_cuarta_expresion/rechazadas/Palabra_baac/");
    animacionGenerador.animate();
});

let abrirA1E4R2 = document.getElementById('A1E4R2');
abrirA1E4R2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/4_cuarta_expresion/rechazadas/Palabra_aaababc/");
    animacionGenerador.animate();
});

let abrirA1E4R3 = document.getElementById('A1E4R3');
abrirA1E4R3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/4_cuarta_expresion/rechazadas/Palabra_aaaaab/");
    animacionGenerador.animate();
});

let abrirA1E5A1 = document.getElementById('A1E5A1');
abrirA1E5A1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/5_quinta_expresion/aceptadas/Palabra_a/");
    animacionGenerador.animate();
});

let abrirA1E5A2 = document.getElementById('A1E5A2');
abrirA1E5A2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(14);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/5_quinta_expresion/aceptadas/Palabra_b/");
    animacionGenerador.animate();
});

let abrirA1E5A3 = document.getElementById('A1E5A3');
abrirA1E5A3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(14);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/5_quinta_expresion/aceptadas/Palabra_aaaac/");
    animacionGenerador.animate();
});


let abrirA1E5R1 = document.getElementById('A1E5R1');
abrirA1E5R1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(15);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/5_quinta_expresion/rechazadas/Palabra_bca/");
    animacionGenerador.animate();
});

let abrirA1E5R2 = document.getElementById('A1E5R2');
abrirA1E5R2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(15);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/5_quinta_expresion/rechazadas/Palabra_aaacb/");
    animacionGenerador.animate();
});

let abrirA1E5R3 = document.getElementById('A1E5R3');
abrirA1E5R3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(15);
    animacionGenerador.setDirec("img/animation/generador/Segundo_Alfabeto/5_quinta_expresion/rechazadas/Palabra_aabbcc/");
    animacionGenerador.animate();
});

//ALFABETO 2
let abrirA2E1A1 = document.getElementById('A2E1A1');
abrirA2E1A1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(14);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/1_primera_expresion/aceptadas/Palabra_c/");
    animacionGenerador.animate();
});

let abrirA2E1A2 = document.getElementById('A2E1A2');
abrirA2E1A2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(14);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/1_primera_expresion/aceptadas/Palabra_abcd/");
    animacionGenerador.animate();
});

let abrirA2E1A3 = document.getElementById('A2E1A3');
abrirA2E1A3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(14);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/1_primera_expresion/aceptadas/Palabra_ababdddd/");
    animacionGenerador.animate();
});

let abrirA2E1R1 = document.getElementById('A2E1R1');
abrirA2E1R1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(15);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/1_primera_expresion/rechazadas/Palabra_bacd/");
    animacionGenerador.animate();
});

let abrirA2E1R2 = document.getElementById('A2E1R2');
abrirA2E1R2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(15);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/1_primera_expresion/rechazadas/Palabra_abccd/");
    animacionGenerador.animate();
});

let abrirA2E1R3 = document.getElementById('A2E1R3');
abrirA2E1R3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(15);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/1_primera_expresion/rechazadas/Palabra_acccddd/");
    animacionGenerador.animate();
});


let abrirA2E2A1 = document.getElementById('A2E2A1');
abrirA2E2A1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(14);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/2_segunda_expresion/aceptadas/Palabra_bc/");
    animacionGenerador.animate();
});

let abrirA2E2A2 = document.getElementById('A2E2A2');
abrirA2E2A2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(14);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/2_segunda_expresion/aceptadas/Palabra_bbd/");
    animacionGenerador.animate();
});

let abrirA2E2A3 = document.getElementById('A2E2A3');
abrirA2E2A3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(14);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/2_segunda_expresion/aceptadas/Palabra_aaabcddd/");
    animacionGenerador.animate();
});

let abrirA2E2R1 = document.getElementById('A2E2R1');
abrirA2E2R1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(15);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/2_segunda_expresion/rechazadas/Palabra_bbbc/");
    animacionGenerador.animate();
});

let abrirA2E2R2 = document.getElementById('A2E2R2');
abrirA2E2R2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(15);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/2_segunda_expresion/rechazadas/Palabra_abbbd/");
    animacionGenerador.animate();
});

let abrirA2E2R3 = document.getElementById('A2E2R3');
abrirA2E2R3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(15);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/2_segunda_expresion/rechazadas/Palabra_cddddd/");
    animacionGenerador.animate();
});


let abrirA2E3A1 = document.getElementById('A2E3A1');
abrirA2E3A1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/3_tercera_expresion/aceptadas/Palabra_ac/");
    animacionGenerador.animate();
});

let abrirA2E3A2 = document.getElementById('A2E3A2');
abrirA2E3A2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/3_tercera_expresion/aceptadas/Palabra_abc/");
    animacionGenerador.animate();
});

let abrirA2E3A3 = document.getElementById('A2E3A3');
abrirA2E3A3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/3_tercera_expresion/aceptadas/Palabra_acddd/");
    animacionGenerador.animate();
});

let abrirA2E3R1 = document.getElementById('A2E3R1');
abrirA2E3R1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/3_tercera_expresion/rechazadas/palabra_bcd/");
    animacionGenerador.animate();
});

let abrirA2E3R2 = document.getElementById('A2E3R2');
abrirA2E3R2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/3_tercera_expresion/rechazadas/Palabra_aabccd/");
    animacionGenerador.animate();
});

let abrirA2E3R3 = document.getElementById('A2E3R3');
abrirA2E3R3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/3_tercera_expresion/rechazadas/Palabra_abdddb/");
    animacionGenerador.animate();
});


let abrirA2E4A1 = document.getElementById('A2E4A1');
abrirA2E4A1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/4_cuarta_expresion/aceptadas/Palabra_acd/");
    animacionGenerador.animate();
});

let abrirA2E4A2 = document.getElementById('A2E4A2');
abrirA2E4A2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/4_cuarta_expresion/aceptadas/Palabra_bcccd/");
    animacionGenerador.animate();
});

let abrirA2E4A3 = document.getElementById('A2E4A3');
abrirA2E4A3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/4_cuarta_expresion/aceptadas/Palabra_accccd/");
    animacionGenerador.animate();
});

let abrirA2E4R1 = document.getElementById('A2E4R1');
abrirA2E4R1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/4_cuarta_expresion/rechazadas/Palabra_ccccd/");
    animacionGenerador.animate();
});

let abrirA2E4R2 = document.getElementById('A2E4R2');
abrirA2E4R2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/4_cuarta_expresion/rechazadas/Palabra_accdc/");
    animacionGenerador.animate();
});

let abrirA2E4R3 = document.getElementById('A2E4R3');
abrirA2E4R3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/4_cuarta_expresion/rechazadas/Palabra_cd/");
    animacionGenerador.animate();
});


let abrirA2E5A1 = document.getElementById('A2E5A1');
abrirA2E5A1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/5_quinta_expresion/aceptadas/Palabra_bc/");
    animacionGenerador.animate();
});

let abrirA2E5A2 = document.getElementById('A2E5A2');
abrirA2E5A2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/5_quinta_expresion/aceptadas/Palabra_abc/");
    animacionGenerador.animate();
});

let abrirA2E5A3 = document.getElementById('A2E5A3');
abrirA2E5A3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(12);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/5_quinta_expresion/aceptadas/Palabra_bcddd/");
    animacionGenerador.animate();
});

let abrirA2E5R1 = document.getElementById('A2E5R1');
abrirA2E5R1.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/5_quinta_expresion/rechazadas/Palabra_aacb/");
    animacionGenerador.animate();
});

let abrirA2E5R2 = document.getElementById('A2E5R2');
abrirA2E5R2.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/5_quinta_expresion/rechazadas/Palabra_cbddd/");
    animacionGenerador.animate();
});

let abrirA2E5R3 = document.getElementById('A2E5R3');
abrirA2E5R3.addEventListener('click', function () {
    modalGenerador.style.display = 'block';
    animacionGenerador.setFrames(13);
    animacionGenerador.setDirec("img/animation/generador/Tercer_Alfabeto/5_quinta_expresion/rechazadas/Palabra_abcccd/");
    animacionGenerador.animate();
});