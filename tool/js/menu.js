var redrawTimer = null,
    windowWidth;


getScreenWidth();

$(window).ready(function(){
    initHamburger();
    initKeys();
});

$(window).resize(function(){
    getScreenWidth();
    clearTimeout(redrawTimer);
    if (windowWidth !== $(window).outerWidth()) { // prevent firing when only height changes
        redrawTimer = setTimeout(function () {
            window.app.redraw();
        }, 500)
    }


});

function initKeys() {
    $('body').keypress(function(e){
        console.log(e);
        if(e.keyCode == 27){
            for (var i = 0, l = window.app.valorisations.length; i < l; i++) {
                valorisation = window.app.valorisations[i];
                valorisation.closePopup();
            }
            closeDisclaimer();
        }
    });
}

function getScreenWidth() {
    var width = $(window).outerWidth();
    windowWidth = width;
    if (width <= 700) {
        window.device = 0; // smartphone
    } else if (width <= 768) {
        window.device = 1; // tablet portrait
    } else if (width <= 1024) {
        window.device = 2; // tablet landscape
    } else {
        window.device = 3; // desktop
    }
}


function initHamburger() {
    var hamburgerOpen = false;

    $('#hamburger').click(function() {
        if (hamburgerOpen) {
            hamburgerHide();
        } else {
            hamburgerShow();
        }

    });

    $('body').click(function(event) {
        if (window.device === 0) {
            if (isHamburger(event.target)) {
                hamburgerHide();
            }
        }
    });

    function hamburgerHide() {
        $('.menu').hide();
        $('body').removeClass('hamburger-open');
        hamburgerOpen = false;
    }

    function hamburgerShow() {
        $('.menu').show();
        $('body').addClass('hamburger-open');
        hamburgerOpen = true;

    }

    function isHamburger(element) {
        if ($(element).attr('id') === 'hamburger' || $(element).parents('#hamburger').length > 0) {
            return false;
        } else {
            return true;
        }
    }
}
