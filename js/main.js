$(document).ready(() => {
    const $button = $('#ingresar');
    const $right = $('.right');
    const $pass = $('#pass');
    const $uno = $('#uno');
    const $dos = $('#dos');
    const $tres = $('#tres');
    const $cuatro = $('#cuatro');
    const $cinco = $('#cinco');
    const $seis = $('#seis');
    const $siete = $('#siete');
    const $ocho = $('#ocho');
    const $nueve = $('#nueve');
    const $cero = $('#cero');
    const $borrar = $('#borrar');
    const $msj = $('#mensaje');
    const pin = "1209";
    var intentos = 0;
    var segundos = 10;
    var intervalo;
    var password = document.getElementById('pass').value;
    $button.on('click', () => {
        var actualPass = document.getElementById('pass').value;
        if (actualPass != pin) {
            intentos = intentos + 1;
            $msj.html("PIN incorrecto. <br /> Intenta nuevamente. <br />");
            if (intentos == 3) {
                $msj.html("PIN incorrecto. <br /> Ultimo intento. <br /> Tienes " + segundos + " segundos.");
                intervalo = setInterval(function(){
                segundos = segundos - 1;
                $msj.html("PIN incorrecto. <br /> Ultimo intento. <br /> Tienes " + segundos + " segundos.");
                if (segundos == 0){
                clearInterval(intervalo);
                $msj.html("Ingreso denegado.");
                pin = null;
            }
                }, 1000);
            }
            password = "";
            $pass.val("");
        }
        if (segundos == 0){
            clearInterval(intervalo);
            $msj.html("Ingreso denegado.");
            pin = null;
        }
        if (actualPass == pin) {
            $right.slideDown(1000);
            $msj.removeClass("shake-horizontal");
            $msj.removeClass("flip-in-hor-bottom");
            $msj.addClass("flip-out-hor-top");
            intentos = 0;
            segundos = 10;
            clearInterval(intervalo);
        }
    })
    
    window.onkeydown = function(event) {
        if ( event.keyCode == 13 ) {
            document.getElementById('ingresar').click();  
        }
        if ( event.keyCode == 27 ) {
            document.getElementById('borrar').click();
        }
        
        if ( event.keyCode == 49 ) {
            document.getElementById('uno').click();
        }
        if ( event.keyCode == 50 ) {
            document.getElementById('dos').click();
        }
        if ( event.keyCode == 51 ) {
            document.getElementById('tres').click();
        }
        if ( event.keyCode == 52 ) {
            document.getElementById('cuatro').click();
        }
        if ( event.keyCode == 53 ) {
            document.getElementById('cinco').click();
        }
        if ( event.keyCode == 54 ) {
            document.getElementById('seis').click();
        }
        if ( event.keyCode == 55 ) {
            document.getElementById('siete').click();
        }
        if ( event.keyCode == 56 ) {
            document.getElementById('ocho').click();
        }
        if ( event.keyCode == 57 ) {
            document.getElementById('nueve').click();
        }
        if ( event.keyCode == 48 ) {
            document.getElementById('cero').click();
        }
    };
    $uno.on('click', () => {
        password = password + "1";
        $pass.val(password);
    })
    $dos.on('click', () => {
        password = password + "2";
        $pass.val(password);
    })
    $tres.on('click', () => {
        password = password + "3";
        $pass.val(password);
    })
    $cuatro.on('click', () => {
        password = password + "4";
        $pass.val(password);
    })
    $cinco.on('click', () => {
        password = password + "5";
        $pass.val(password);
    })
    $seis.on('click', () => {
        password = password + "6";
        $pass.val(password);
    })
    $siete.on('click', () => {
        password = password + "7";
        $pass.val(password);
    })
    $ocho.on('click', () => {
        password = password + "8";
        $pass.val(password);
    })
    $nueve.on('click', () => {
        password = password + "9";
        $pass.val(password);
    })
    $cero.on('click', () => {
        password = password + "0";
        $pass.val(password);
    })
    $borrar.on('click', () => {
        $right.slideUp(1000);
        $msj.removeClass("flip-out-hor-top");
        $msj.addClass("flip-in-hor-bottom");
        $msj.removeClass("shake-horizontal");
        $msj.html("Ingrese el PIN.");
        $pass.val("");
        password = "";
        if (intentos == 3){
            $msj.html("No puedes ingresar.")
        }
    })
})