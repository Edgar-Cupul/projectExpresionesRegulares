
class Timer {
    constructor(fn, t) {
        var timerObj = setInterval(fn, t);

        this.stop = function () {
            if (timerObj) {
                clearInterval(timerObj);
                timerObj = null;
            }
            return this;
        };

        // start timer using current settings (if it's not already running)
        this.start = function () {
            if (!timerObj) {
                this.stop();
                timerObj = setInterval(fn, t);
            }
            return this;
        };

        // start with new interval, stop current interval
        this.reset = function (newT) {
            t = newT;
            return this.stop().start();
        };

        //alert("Ready function timer");
    }
}//Funciona como una clase.

/**
 * 
 * @param {*} frames Número de frames de la animacion
 * @param {*} direc Dirección de la animacion
 * @param {*} animacion Nombre de la animación
 * @param {*} closer Nombre de el icono que cierra la ventana modal.
 */
function Animador(frames, direc, animacion, closer, regresar) {

    this.frames = frames;
    this.direc = direc;
    this.animacion = animacion;
    this.closer = closer;
    this.regresar = regresar;


    var canvas = document.getElementById(animacion + "c");
    var ctx = canvas.getContext('2d');

    this.animate = function () {
        var diapositiva = new Image();

        //Variables para contar
        var contadorDeFrames = 1;

        const inputVelocidad = document.querySelector("#" + animacion + "v");
        //const salidaVelocidad = document.querySelector("#out-" + animacion + "v"); //Se completa con out, debe ser similar a la entrada.
        const botonStoper = document.getElementById('' + closer);
        const botonRegresar = document.getElementById('regresar' + regresar);

        //Control de reproducción
        const botonAvanzar = document.querySelector("#boton-" + animacion + "-toFront");
        const botonVelocidad = document.querySelector("#boton-" + animacion);
        const botonRetroceder = document.querySelector("#boton-" + animacion + "-toBack");
        const botonRepetir = document.querySelector("#boton-" + animacion + "-repeat");

        //Control de estado
        let reproduciendo = true;

        botonStoper.onclick = () => {
            contadorDeFrames = 1;
            control.reset();
            control.stop();
        };

        botonRegresar.onclick = () => {
            contadorDeFrames = 1;
            control.reset();
            control.stop();
        };

        inputVelocidad.oninput = () => {
            control.stop();
            //reiniciamos el contador de frames al mover algo acá.
            contadorDeFrames = 1;

            //salidaVelocidad.innerHTML = inputVelocidad.value;
            velocidadAnimacion = parseInt(inputVelocidad.value * -1);
            control.reset(parseInt(inputVelocidad.value * -1));
        };


        botonVelocidad.onclick = () => {
            if (contadorDeFrames == frames || contadorDeFrames >= frames) {
                contadorDeFrames = 1;
            }
            botonVelocidad.classList.toggle("paused");
            if (reproduciendo == true) { //Debe pausar
                control.stop();
                botonVelocidad.value = 'reanudar'; //Debe reanudar
                reproduciendo = false;
            } else {
                control.start();
                botonVelocidad.value = 'pausar'; //Debe pausar
                reproduciendo = true;
            }
        };


        botonAvanzar.onclick = () => {
            if (contadorDeFrames == frames) {
                contadorDeFrames = contadorDeFrames;
            } else if (contadorDeFrames <= frames) {
                contadorDeFrames += 3;
            }
        };

        botonRetroceder.onclick = () => {
            if (contadorDeFrames > 5) {
                contadorDeFrames = contadorDeFrames - 5;
            } else {
                contadorDeFrames = 1;
            }
        };

        botonRepetir.onclick = () => {
            contadorDeFrames = 1;

            if (reproduciendo == false) {
                control.start();
                reproduciendo = true;
            }
        };

        var maxValue = parseInt(inputVelocidad.max);
        var minValue = parseInt(inputVelocidad.min);

        var defaultValue = (maxValue < minValue) ? minValue
            : minValue + (maxValue - minValue) / 2;

        inputVelocidad.value = defaultValue;

        var velocidadAnimacion = parseInt(defaultValue);

        //Estableciendo un timer
        var control = new Timer(function animador() {

            if (contadorDeFrames > frames) {
                control.stop();
                reproduciendo = false;
            }
            console.log("Mostrando este mensaje cada:" + velocidadAnimacion + " Con contador en: " + contadorDeFrames);

            if (contadorDeFrames > frames + 2) {
                alert("Ha habido un error de conteo. Recarga la página por favor.");
            }

            diapositiva.src = direc + contadorDeFrames + ".PNG";
            ctx.drawImage(diapositiva, 60, 0, 700, 393);

            contadorDeFrames += 1;

        }, velocidadAnimacion * -1);

    };


    this.setFrames = function (newFrames) {
        frames = newFrames;
    }

    this.setDirec = function (newDirec) {
        direc = newDirec;
    }

    this.getFrames = function () {
        return frames;
    }

    this.getDirec = function () {
        return direc;
    }

}