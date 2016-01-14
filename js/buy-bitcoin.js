var secondsBlock = document.querySelector('.timer');
var progressLines = document.querySelectorAll('.progress-line__inner');
var seconds = 60;
var progressStep = 100 / 60;

var timer = setInterval(progress, 1000);

function progress() {

    if (seconds >= 0) {

        for (var i = 0; progressLines.length > i; i++) {
            progressLines[i].style.width = (progressStep * seconds) + '%';
        }

        secondsBlock.innerHTML = seconds;
        seconds--;

    } else {
        seconds = 60;
    }

}

secondsBlock.addEventListener('click', function () {
    seconds = 60;
});

var buyPrise = 514.95;
var sellPrise = 10;

var price = 514.95;

var buttons = $('.buy-sell-btns button');
var operationButton = $('.operation-button');

$('.buy-sell-btns').click(function (e) {
    buttons.removeClass('active');
    $(e.target).addClass('active');

    if ($(e.target).hasClass('buy')) {
        price = buyPrise;
        calcPrise();
        operationButton.html('Buy bitcoin');
    }
    if ($(e.target).hasClass('sell')) {
        price = sellPrise;
        calcPrise();
        operationButton.html('Sell bitcoin');
    }
});


var bitCountInput = $('.bit-count');
var moneyCountInput = $('.money-count');
calcPrise();


bitCountInput.keypress(function (e) {
    e = e || event;

    if (e.ctrlKey || e.altKey || e.metaKey) return;

    var chr = getChar(e);

    if (chr == null) return;

    if (chr < '0' || chr > '9') {
        return false;
    }
});

moneyCountInput.keypress(function (e) {
    e = e || event;

    if (e.ctrlKey || e.altKey || e.metaKey) return;

    var chr = getChar(e);

    if (chr == null) return;

    if (chr < '0' || chr > '9') {
        return false;
    }
});


bitCountInput.keyup(function () {
    calcPrise();
});


function calcPrise() {
    var number = (bitCountInput.val() * price).toFixed(2) - Math.floor(bitCountInput.val() * price);
    if (number > 0) {
        moneyCountInput.val((bitCountInput.val() * price).toFixed(2));
    } else {
        moneyCountInput.val((bitCountInput.val() * price).toFixed(0));
    }
}

function getChar(event) {
    if (event.which == null) { // IE
        if (event.keyCode < 32) return null; // спец. символ
        return String.fromCharCode(event.keyCode)
    }

    if (event.which != 0 && event.charCode != 0) { // все кроме IE
        if (event.which < 32) return null; // спец. символ
        return String.fromCharCode(event.which); // остальные
    }

    return null; // спец. символ
}


jQuery("#SliderSingle").slider({
    from: 0.1,
    to: 100,
    step: 0.01,
    round: 2,
    dimension: '&nbsp;B',
    heterogeneity: ['10/0.2', '20/0.5', '30/1', '40/2', '50/5', '60/10', '70/25', '80/50', '90/75', '99.99/100.0'],
    limits: false,
    scale: [0.1, '|', 0.2, '|', 0.5, '|', 1, '|', 2, '|', 5, '|', 10, '|', 25, '|', 50, '|', 75, '|', 100],
    onstatechange: function(value) {
        bitCountInput.val(value);
        calcPrise();
    }
});