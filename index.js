let odrag = document.querySelector('.drag-container');
let ospin = document.querySelector('.container');
let carousel = document.querySelector('.carousel-block');
let aImg = ospin.querySelectorAll('.carousel-item');


function applyTranform(obj) {
    obj.style.transform = " rotateY(" + tX + "deg)";
}
function playSpin(yes) {
    ospin.style.animationPlayState = yes ? "running" : "paused";
}
let sX,
nX,
desX = 0,
tX = 0;
carousel.onpointerdown = function(e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    let sX = e.clientX;

    this.onpointermove = function(e) {
        e = e || window.event;
        let nX = e.clientX,
        desX = nX - sX;
        tX += desX * 0.1;
        applyTranform(odrag);
        sX = nX;
    };
    this.onpointerup = function(e) {
        odrag.timer = setInterval(function() {
            desX *= 0.95;
            tX += desX * 0.1;
            applyTranform(odrag);
            playSpin(false);
            if (Math.abs(desX) < 0.5) {
                clearInterval(odrag.timer);
                playSpin(true);
            }
        }, 17);
        this.onpointermove = null;
    };
    return false;
};




