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
    const $msj = $('#mensaje');
    const pin = "1209";
    var password = document.getElementById('pass').value;
    $button.on('click', () => {
        var actualPass = document.getElementById('pass').value;
        var plen = Math.ceil(Math.log(actualPass) / Math.LN10);
        if (plen != 4 && actualPass != pin) {
            $msj.html("Intenta de nuevo.");
        }
        if (actualPass != pin && plen == 4) {
            $msj.html("PIN incorrecto.")
        }
        if (actualPass == pin) {
            $right.slideDown(1000);
            $msj.removeClass("flip-in-hor-bottom");
            $msj.addClass("flip-out-hor-top");
        }
    })
    
    window.onkeydown = function(event) {
        if ( event.keyCode == 13 ) {
            document.getElementById('ingresar').click();  
        }
        if ( event.keyCode == 27 ) {
            $right.slideUp(1000);
            $msj.removeClass("flip-out-hor-top");
            $msj.addClass("flip-in-hor-bottom");
            $msj.html("Ingrese PIN");
            $pass.val("");
            password = "";
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
})