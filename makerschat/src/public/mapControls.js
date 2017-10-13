


var controls = $('#mapControls'),

    zoomStep = 10,
    zoom = $('#zoomSlider'),
    zoomOut = $('#zoomScale'),

    panStep = 10,
    totalPanX = 10,
    totalPanY = 10,
    panXOut = $('#posX'),
    panYOut = $('#posY'),

    debug = $('#debug');

controls.on('click', '.pan-arrow, .zoom-control', function () {
console.log("ca marche");
    switch ($(this).attr('id')) {
        case 'panTop':
            console.log("Avance");
            ///Cast event Top
            break;

        case 'panRight':
            console.log("Tourne a droite");
            ///Cast event Right
            break;

        case 'panBottom':
            console.log("Recule");
            ///Cast event Down
            break;

        case 'panLeft':
            console.log("Tourne a gauche");
            ///Cast event Left
            break;

        case 'zoomIn':
            console.log("Lève la tête");
            zoom.slider('value', zoom.slider('value') + zoomStep);
            updateZoom(zoom.slider('value'));
            break;

        case 'zoomOut':
            console.log("Baisse la tête");
            zoom.slider('value', zoom.slider('value') - zoomStep);
            updateZoom(zoom.slider('value'));
            break;
    }
});

zoom.slider({
    orientation: 'vertical',
    range: 'min',
    min: 50,
    max: 200,
    step: 1,
    value: 100,
    disabled : true,
});


function updateZoom(rawZoom) {

    rawZoom /= 100;

    ///Cast changement d'inclinaison
    console.log("Nouvel Angle : " + rawZoom);

}
