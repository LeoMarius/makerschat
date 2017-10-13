var domain = "10.126.18.24";
var options = {
    roomName: "makerslab",
    parentNode: document.querySelector('#meet'),
    interfaceConfigOverwrite: {
        TOOLBAR_BUTTONS: ['camera', 'fullscreen'],
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        filmStripOnly: false,
        VERTICAL_FILMSTRIP: false,
        FILM_STRIP_MAX_HEIGHT:"100%",
        MOBILE_APP_PROMO : false,
    }

}
var api = new JitsiMeetExternalAPI(domain, options);
