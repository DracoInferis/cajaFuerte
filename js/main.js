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
    var password = document.getElementById('pass').value;
    
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

    window.onkeydown = function(event) {
        if ( event.keyCode == 13 ) {
            $right.slideDown(1000); 
            document.getElementById('ingresar').click();
        }
        if ( event.keyCode == 27 ) {
            $right.slideUp(1000);
            $pass.val("");
            password = "";
        }
        if ( event.keyCode == 49 ) {
            $right.slideUp(1000);
            document.getElementById('uno').click();
        }
        if ( event.keyCode == 50 ) {
            $right.slideUp(1000);
            document.getElementById('dos').click();
        }
        if ( event.keyCode == 51 ) {
            $right.slideUp(1000);
            document.getElementById('tres').click();
        }
        if ( event.keyCode == 52 ) {
            $right.slideUp(1000);
            document.getElementById('cuatro').click();
        }
        if ( event.keyCode == 53 ) {
            $right.slideUp(1000);
            document.getElementById('cinco').click();
        }
        if ( event.keyCode == 54 ) {
            $right.slideUp(1000);
            document.getElementById('seis').click();
        }
        if ( event.keyCode == 55 ) {
            $right.slideUp(1000);
            document.getElementById('siete').click();
        }
        if ( event.keyCode == 56 ) {
            $right.slideUp(1000);
            document.getElementById('ocho').click();
        }
        if ( event.keyCode == 57 ) {
            $right.slideUp(1000);
            document.getElementById('nueve').click();
        }
        if ( event.keyCode == 48 ) {
            $right.slideUp(1000);
            document.getElementById('cero').click();
        }
    };
})