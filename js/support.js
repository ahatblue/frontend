//popup 'more'
var moreButton = document.querySelector('.more');

moreButton.onclick = function () {
    this.style.overflow = this.style.overflow == 'hidden' ? 'visible' : 'hidden';
};
moreButton.onmouseleave = function (e) {

    var target = e.target;
    while (target.className != 'more') {
        target = target.parentNode;
    }

    if (target.className == 'more' && e.relatedTarget.className != 'more-inner-block') {
        target.style.overflow = 'hidden';
    }
};

//Checkboxes and starboxes
ppChecker('check', '.write-message-block__header .check-all input', '.write-message-block__body .check-all input', '.write-message-block__body');
ppChecker('star', '.write-message-block__header .check-star input', '.write-message-block__body .check-star input', '.write-message-block__body');

function ppChecker(type, checkAll, allCheckLines, allCheckWrapper) {
    var checkAll = document.querySelector(checkAll);
    var allCheckLines = document.querySelectorAll(allCheckLines);
    var allCheckWrapper = document.querySelector(allCheckWrapper);

    checkAll.addEventListener('change', function () {
        this.checked ? doCheckallTrue() : doCheckallFalse();

    });
    allCheckWrapper.addEventListener('change', function (e) {
        if (e.target.className == type) {
            findCheckedEl();
        }
    });

    function doCheckallTrue() {
        for (var i = 0; i < allCheckLines.length; i++) {
            allCheckLines[i].checked = true;
        }
    }

    function doCheckallFalse() {
        for (var i = 0; i < allCheckLines.length; i++) {
            allCheckLines[i].checked = false;
        }
    }

    function findCheckedEl() {
        for (var i = 0; i < allCheckLines.length; i++) {
            if (!allCheckLines[i].checked) {
                checkAll.checked = false;
                return;
            } else {
                checkAll.checked = true;
            }
        }
    }
}

//messsages hightlighter
var messageBlock = document.querySelector('.write-message-block__body');

var messageHightlighter = (function () {
    var oldEl = false;

    function setColor(e) {
        if (e.target.parentNode.className == 'title') {
            if (oldEl) {
                oldEl.style.backgroundColor = '#696868';
            }
            e.target.style.backgroundColor = '#555';
            oldEl = e.target;
        }
    }

    return setColor;
})();

messageBlock.onclick = function (e) {
    messageHightlighter(e);
};


//Sort