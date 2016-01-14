// (function(){

var popupReg = document.getElementsByClassName('popupReg')[0],
    popupLogin = document.getElementsByClassName('popupLogin')[0],
    darkshim = document.getElementsByClassName('dark-shim')[0],
    buttonReg = document.getElementsByClassName('button-reg')[0];
buttonLogin = document.getElementsByClassName('button-login')[0];

buttonReg.onclick = function () {
    popupReg.className += ' show';
    darkshim.className += ' show';
};

popupReg.onclick = function (e) {
    if (e.target.tagName == 'TABLE') {
        popupReg.className = 'popup popupReg';
        darkshim.className = 'dark-shim';
    }
};

buttonLogin.onclick = function () {
    popupLogin.className += ' show';
    darkshim.className += ' show';
};

popupLogin.onclick = function (e) {
    console.log(e.target);
    if (e.target.tagName == 'TABLE') {
        popupLogin.className = 'popup popupLogin';
        darkshim.className = 'dark-shim';
        console.log('hello');
    }
};


var TwinsPlugin = function (blockId) {
    this.block = document.getElementById(blockId);
    this.twinBlocks = this.block.getElementsByClassName('header__twins__twin');
    this.blockWidth = 0;
    this.BLOCK_WIDTH = 0;
    this.blocksCount = 0;
    this.blockSize = 0;
    this.slideWidth = 0;
    this.regroupFlag = true;
    return this;
};


(function ($) {

    $.fn.bbPairSlider = function () {
        var that = $(this);
        var pairUl = that.find('ul');
        var pairs = that.find('li');
        var blockWidth = parseInt(190 * pairs.length);
        var pairsCount = 0;
        var pairWidth = 0;
        var pairUlMargin = 0;
        var animPairUl;
        var timer;


        calcPairsSize();
        window.onresize = function () {
            calcPairsSize();
        };

        ulClone();


        function ulClone() {
            that.append(pairUl.clone());
            that.append(pairUl.clone());
        }

        function calcPairsSize() {
            var windowWidth = document.documentElement.clientWidth;
            if (windowWidth < blockWidth) {


                pairsCount = (windowWidth - windowWidth % 190) / 190;
                pairWidth = parseInt(windowWidth / pairsCount);
                that.find('li').width(pairWidth + 'px');
                that.css({
                    width: blockWidth * 3 + 'px',
                    textAlign: 'left'
                });


                animPairUl = that.find('ul').eq(0);

                try{
                    animPairUl.stop(true);
                }catch(e){

                }


                var animPairLi = that.find('li');
                var pairFirstLi;

                animPairLi.each(function () {

                    if ($(this).offset().left >= 0) {
                        pairFirstLi = $(this);
                        return false;
                    }

                });


                var result = pairFirstLi.parent().offset().left - pairFirstLi.offset().left;
                //pairFirstLi.parent().css({marginLeft: result});
                pairUlMargin = result;

                animPairUl.animate({
                    marginLeft: result
                }, 1000, animation);



                //console.log(result);


                //console.log(timer);
                //if (timer != undefined) {
                //    clearTimeout(timer);
                //    animPairUl.stop(true);
                //}
                //timer = setTimeout(function () {
                //
                //    var animPairLi = that.find('li');
                //    var pairFirstLi;
                //
                //    animPairLi.each(function () {
                //
                //        if ($(this).offset().left >= 0) {
                //            pairFirstLi = $(this);
                //            return false;
                //        }
                //
                //    });
                //
                //
                //    var result = pairFirstLi.parent().offset().left - pairFirstLi.offset().left;
                //    //pairFirstLi.parent().css({marginLeft: result});
                //    pairUlMargin = result;
                //
                //    pairFirstLi.parent().animate({
                //        marginLeft: result
                //    }, 1000, animation);
                //    console.log(result);
                //
                //    //animation();
                //}, 1000);




                //var ulOffset =

                //pairs.css({marginLeft: '0px'});

                //animationFlag = true;

            } else {
                try{
                    animPairUl.stop(true);
                }catch(e){

                }
                that.find('li').width(190 + 'px');
                that.width(blockWidth + 'px');
                that.css({
                    width: blockWidth + 'px',
                    textAlign: 'center'
                });

                that.find('ul').css({marginLeft: '0px'});
                //animationFlag = false;
            }
        }

        function animation() {

            //if(!animationFlag){
            //    animationFlag = false;
            //    return;
            //}
            //
            //console.log('ergegergre');

            animPairUl = that.find('ul').eq(0);

            var animPairLi = that.find('li');
            animPairLi.each(function () {

                if ($(this).offset().left >= document.documentElement.clientWidth - pairs.width() / 2) {
                    pairUlMargin -= $(this).offset().left;
                    return false;
                }

            });

            //pairUlMargin -= document.documentElement.clientWidth;

            //console.log(pairUlMargin,  -pairs.eq(0).width() * pairs.length);

            animPairUl.delay(2000).animate({
                marginLeft: pairUlMargin
            }, 3000, function () {

                console.log(pairUlMargin);


                if (pairUlMargin <= -parseInt(that.find('li').eq(0).width() * pairs.length)) {

                    //console.log(that.find('ul').eq(1));


                    var pairUl2 = that.find('ul').eq(1);


                    var left = pairUl2.offset().left;

                    //console.log(left);

                    pairUl2.css({marginLeft: parseInt(left) + 'px'});
                    pairUlMargin = parseInt(left);

                    var slide = animPairUl.detach();
                    slide.css({marginLeft: '0px'});
                    that.append(slide);


                }
                animation();
            });


        }

    };





    $("#phone").mask("+9 (999) 999-9999");



})(jQuery);


$('#bb-pairs').bbPairSlider();


//TwinsPlugin.prototype = {
//    run: function () {
//
//        this.blockWidth = 190 * this.twinBlocks.length;
//        this.block.style.width = this.blockWidth + 'px';
//        this.BLOCK_WIDTH = this.blockWidth;
//        this.twinBlocksSize();
//
//        window.onresize = function () {
//            twins.twinBlocksSize();
//        };
//
//        setInterval(this.animate, 1000);
//    },
//    twinBlocksSize: function () {
//        var windowSize = document.documentElement.clientWidth;
//        if (windowSize < twins.blockWidth) {
//            twins.blocksCount = (windowSize - windowSize % 190) / 190;
//            twins.blockSize = windowSize / twins.blocksCount;
//            for (var i = 0; i < twins.twinBlocks.length; i++) {
//                twins.twinBlocks[i].style.width = twins.blockSize + 'px';
//            }
//        } else {
//            for (var i = 0; i < twins.twinBlocks.length; i++) {
//                twins.twinBlocks[i].style.width = 190 + 'px';
//            }
//        }
//    },
//    animate: function () {
//        //console.log('dgdgdgf');
//
//        if (document.documentElement.clientWidth < twins.BLOCK_WIDTH /*&& twins.regroupFlag*/) {
//            twins.regroup();
//        } else {
//            twins.block.style.width = twins.BLOCK_WIDTH;
//        }
//
//        twins.slide();
//    },
//    regroup: function () {

//var countBlocks = twins.blocksCount - ( this.twinBlocks.length - twins.blocksCount );
//countBlocks = countBlocks >= 0? countBlocks : 0;

//var blockSize = parseInt(this.block.style.width) + countBlocks * 190;
//this.block.style.width = blockSize + 'px';
//
//
//for(var i = 0; i < countBlocks; i++){
//    var clone = twins.twinBlocks[i].cloneNode(true);
//    twins.block.appendChild( clone );
//}

//twins.blocksCount = false;


//var windowSize = document.documentElement.clientWidth;
//if(windowSize < this.blockWidth){
//    this.blocksCount = (windowSize - windowSize % 190) / 190;
//    this.blockSize = windowSize / this.blocksCount;
//    for(var i = 0; i < this.twinBlocks.length; i++){
//        this.twinBlocks[i].style.width = this.blockSize + 'px';
//    }
//}
//    },
//    slide: function () {
//        var slideSize = this.blocksCount * this.blockSize;
//        //var firstTwin = document.querySelector('#twins > div');
//        //this.slideWidth -= slideSize;
//        //this.block.style.marginLeft = this.slideWidth + 'px';
//        //console.log(this.block.style.marginLeft);
//    }
//
//};

//var twins = new TwinsPlugin('twins');
//twins.run();

//})();

