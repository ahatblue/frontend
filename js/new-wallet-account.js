(function($){

    $.fn.bitPopup = function( content ){
        var button = $(this);
        var darkShim = $('.dark-shim');
        var popup = $('.popup-wrapper');

        button.click(function(e) {
            e.preventDefault();

            popup.find('.popup-block').html(content);

            darkShim.addClass('show');
            popup.addClass('show');

        });

        popup.click(function(e) {
            if( $(e.target).hasClass('popup-wrapper') || $(e.target).hasClass('cancel-btn')){
                popup.removeClass('show');
                darkShim.removeClass('show');
            }
        });

        return this;
    };


})(jQuery);


var popupContents = {
    transferContent: $('.transfer-bitcoin-popup').detach().css('display', 'block'),
    addWalletcontent: $('.add-wallet-popup').detach().css('display', 'block')
};

$('.buy-page').css('minHeight', $(document).height()-140);

$('.transfer-bit-button button').bitPopup( popupContents.transferContent );
$('.support-tab__buttons .addWallet').bitPopup( popupContents.addWalletcontent );

