
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
function Animador(frames, direc, animacion, closer) {
    this.frames = frames;
    this.direc = direc;
    this.animacion = animacion;
    this.closer = closer;

    this.testFunct = function () {
        console.log("You have now: " + frames + "," + direc + ", " + animacion);

        //alert("Passed!");
    }


    this.animate = function () {
        var diapositiva = new Image();

        //Variables para contar
        var contadorDeFrames = 1;

        const inputVelocidad = document.querySelector("#" + animacion + "v");
        //const salidaVelocidad = document.querySelector("#out-" + animacion + "v"); //Se completa con out, debe ser similar a la entrada.
        const botonStoper = document.getElementById('' + closer);

        //Control de reproducción
        const botonAvanzar = document.querySelector("#boton-" + animacion + "-toFront");
        const botonVelocidad = document.querySelector("#boton-" + animacion);
        const botonRetroceder = document.querySelector("#boton-" + animacion + "-toBack");

        botonStoper.onclick = () => {
            contadorDeFrames = 1;
            control.reset();
            control.stop();
        }

        inputVelocidad.oninput = () => {
            //reiniciamos el contador de frames al mover algo acá.
            contadorDeFrames = 1;

            //salidaVelocidad.innerHTML = inputVelocidad.value;
            velocidadAnimacion = parseInt(inputVelocidad.value);
            control.reset(parseInt(inputVelocidad.value));
        }

        botonVelocidad.onclick = () => {
            if (botonVelocidad.innerHTML == "Pausa") {
                control.stop();
                botonVelocidad.innerHTML = "Reanudar";
            } else {
                control.start();
                botonVelocidad.innerHTML = "Pausa";
            }
        }

        botonAvanzar.onclick = () => {
            contadorDeFrames = contadorDeFrames + 1;
        }

        botonRetroceder.onclick = () => {
            contadorDeFrames = contadorDeFrames - 1;
        }

        var maxValue = parseInt(inputVelocidad.max);
        var minValue = parseInt(inputVelocidad.min);

        var defaultValue = (maxValue < minValue) ? minValue
            : minValue + (maxValue - minValue) / 2;

        inputVelocidad.value = defaultValue;

        var velocidadAnimacion = parseInt(defaultValue);


        var control = new Timer(function animador() {
            console.log("Mostrando este mensaje cada:" + velocidadAnimacion);
            var limite = 0;
            var intervalo

            var canvas = document.getElementById(animacion + "c");
            var ctx = canvas.getContext('2d');

            if (contadorDeFrames == frames + 2) {
                alert("Ha habido un error de conteo. Recarga la página por favor.");
            }

            diapositiva.src = direc + contadorDeFrames + ".png";
            ctx.drawImage(diapositiva, 60, 0, 700, 393);

            contadorDeFrames += 1;

            if (contadorDeFrames > frames + 1) {
                control.stop();
                //alert(velocidadAnimacion);
                //alert("Proceso concluido.")
            }

        }, velocidadAnimacion);

    }

}