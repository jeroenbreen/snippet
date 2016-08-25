$(window).ready(function(){

    var container = document.getElementById('infographic');

    window.app = new App(container);
    app.init();

    $(window).scrollTop(0);
    addPhaseListeners();

});

function addPhaseListeners() {
    $(window).scroll(function(e){
        var top = $(document).scrollTop();
        app.scroll(top);
    });

    // document.addEventListener('keydown', function(e) {
    //     if (e.keyCode == '49') {
    //         $(document).scrollTop(0);
    //     } else if (e.keyCode == '50') {
    //         $(document).scrollTop(3000);
    //     }
    // });
}

function openDisclaimer() {
    $('.disclaimer').fadeIn(100);
}

function closeDisclaimer() {
    $('.disclaimer').fadeOut(100);
}
