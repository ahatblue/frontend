$(document).ready(function(){


// OPEN AND CLOSE MODAL REGISTRATION WINDOW ON INDEX PAGE
$('.go_btn').click(function(){
	$('.modal_create_account_wrap').fadeIn(200);
});
$('.modal_create_account_close_btn').click(function(){
	$('.modal_create_account_wrap').fadeOut(200);
});


// RIGHT MENU HEIGHT AND INDEX BACKGROUND BLOCK HEIGHT
var document_height = $(document).height();
var cabinet_height = $('.cabinet').height();
// $('.cabinet_all_wrap').css('height', document_height);

$(window).resize(function(){
	var window_height = $(window).height();
	$('.main_wrapper').css('height', document_height);
  // $('.cabinet_all_wrap').css('height', document_height);
});


// OPEN AND CLOSE RIGHT MENU 
$('.right_menu_close_btn span').click(function(){
  $('.right_menu').toggleClass('right_menu_close');
  $(this).toggleClass('right_menu_close_btn_close');
  $('.trade_main_contant').toggleClass('trade_main_contant_plus');
  $('.cabinet').toggleClass('padding_left_35');
  
});
// RIGHT MENU SCROLL ADD CLASS FIXED
$(document).scroll(function(){
  var scroll = $(document).scrollTop();
  if(scroll > 50) {
    $('.right_menu').addClass('right_menu_scroll_fixed');
    $('.right_menu_close_btn').addClass('right_menu_button_scroll_fixed');
  }else{
    $('.right_menu').removeClass('right_menu_scroll_fixed');
    $('.right_menu_close_btn').removeClass('right_menu_button_scroll_fixed');
  }
});




// ion tabs
$.ionTabs("#tabs_1", {
  type: "storage"
});



// custom checkbox
$("input[type='radio'], input[type='checkbox']").ionCheckRadio();


// form submit if checkbox is checked
$('input[name="create_account_agree"]').click(function(){
    if($(this).prop('checked') == false){
         $('#create_account_submit_btn').attr("disabled","disabled");
    } else {
        $('#create_account_submit_btn').removeAttr('disabled');
    }
});








// FORM VALIDATION 
$("#create_account").validate({
  rules: {
    username: "required",
    email: {
      required: true,
      email: true
    },
    password: {
    	required: true,
    	minlength: 6
    }
  },
  messages: {
    username: "Please specify your name",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    password: {
    	minlength: "Your password must be at last 6 characters",
    	required: "Password is required"
    }

  }
});

$("#cabinet_profile_form").validate({
  rules: {
    first_name: "required",
    last_name: "required",
    city: "required",
    telephone: {
      required: true,
      number: true
    },
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      minlength: 6
    }
  },
  messages: {
    first_name: "<i class='fa fa-times'></i>",
    last_name: "<i class='fa fa-times'></i>",
    city: "<i class='fa fa-times'></i>",
    telephone: "<i class='fa fa-times'></i>",
    email: {
      required: "<i class='fa fa-times'></i>",
      email: "<i class='fa fa-times'></i>"
    },
    password: {
      minlength: "<i class='fa fa-times'></i>",
      required: "<i class='fa fa-times'></i>"
    }
  }
});

$('#cabinet_profile_form_password').validate({
  rules: {
    current_password: "required",
    new_password: "required",
    confirm_password: {
      required: true,
      equalTo: "#change_password"
      }
    },
    messages: {
      current_password: "<i class='fa fa-times'></i>",
      new_password: "<i class='fa fa-times'></i>",
      confirm_password: {
        required: "<i class='fa fa-times'></i>",
        equalTo: "<i class='fa fa-times'></i>"
      }
    }
});

$('.form_group input').keyup(function(){
  var check_ok = $(this).siblings('.valid_field');
  if($(this).valid()) {
    check_ok.css('opacity', 1);
  }else{
    check_ok.css('opacity', 0);
  }
});




// TOP RUN STRING ON INDEX PAGE 
$(function() {

    var marquee = $("#run_string"); 
    marquee.css({"overflow": "hidden", "width": "100%"});

    // wrap "My Text" with a span (IE doesn't like divs inline-block)
    marquee.wrapInner("<span>");
    marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" }); 
    marquee.append(marquee.find("span").clone()); // now there are two spans with "My Text"

    marquee.wrapInner("<div>");
    marquee.find("div").css("width", "200%");

    var reset = function() {
        $(this).css("margin-left", "0%");
        $(this).animate({ "margin-left": "-100%" }, 20000, 'linear', reset);
    };

    reset.call(marquee.find("div"));

});


// PROFILE PERSONAL LIST OPEN OTHER CURRENCIES
$('.your_profile_other_currencies').click(function(){
  $('.your_profile_balance_wrap').toggleClass('your_profile_balance_open');
});









//----------------------------------------------- TRADING PAGE SCRIPTS

// CLOSE TRADE PAGE BUY SELL BLOCK
$('.trade_page_buy_sell_close_btn_1').click(function(){

    var buy_block = $('#trade_page_buy');
    var sell_block = $('#trade_page_sell');
    var tab_block = $('.trade_page_bottom_tabs_block');
    var main_block = $('.trade_main_contant');

    $(this).siblings('.closing_state_bg').toggleClass('display_block');

    $(this).siblings('.trade_page_buy_sell_close_up_btn_1').toggleClass('display_none');

    $(this).find('i').toggleClass('rotate_180');

    $(buy_block).toggleClass('trade_page_buy_sell_closed');

        // main block
        if($(sell_block).hasClass('trade_page_buy_sell_closed')) {

            $(main_block).toggleClass('width_96');

        }else{

            $(main_block).toggleClass('width_78'); 
        }

        // tab block
        if (!$(main_block).hasClass('width_78') 
            && $(buy_block).hasClass('trade_page_buy_sell_closed_up') 
            && !$(buy_block).hasClass("trade_page_buy_sell_closed")) {
            $(tab_block).addClass('width_134');
        }else{
            $(tab_block).removeClass('width_134');
        };

        if($(sell_block).hasClass('trade_page_buy_sell_closed') && $(main_block).hasClass('width_78')){
            $(tab_block).removeClass('width_125');
        };

        if($(sell_block).hasClass('trade_page_buy_sell_closed') 
            && $(main_block).hasClass('width_78') 
            && !$(buy_block).hasClass('trade_page_buy_sell_closed')){

            $(tab_block).addClass('width_125');
        };

        if($(sell_block).hasClass('trade_page_buy_sell_closed') 
            && $(main_block).hasClass('width_78') 
            && !$(buy_block).hasClass('trade_page_buy_sell_closed') 
            && !$(buy_block).hasClass('trade_page_buy_sell_closed_up')) {

            $(tab_block).removeClass('width_125');
        };

        if($(buy_block).hasClass('trade_page_buy_sell_closed_up') 
            && $(sell_block).hasClass('trade_page_buy_sell_closed_up')
            && !$(sell_block).hasClass('trade_page_buy_sell_closed')) {

            $(tab_block).toggleClass('width_168');
            $(tab_block).toggleClass('width_125');
        };


});

$('.trade_page_buy_sell_close_btn_2').click(function(){

    var buy_block = $('#trade_page_buy');
    var sell_block = $('#trade_page_sell');
    var tab_block = $('.trade_page_bottom_tabs_block');
    var main_block = $('.trade_main_contant');

    $(this).siblings('.closing_state_bg').toggleClass('display_block');

    $(this).siblings('.trade_page_buy_sell_close_up_btn_2').toggleClass('display_none');

    $(this).find('i').toggleClass('rotate_180');

    // sell block up/down
    $(sell_block).toggleClass('trade_page_buy_sell_closed');

        // main block
        if($(buy_block).hasClass('trade_page_buy_sell_closed')) {

            $(main_block).toggleClass('width_96');

        }else{

            $(main_block).toggleClass('width_78');
        }

        // tab block
        
        if($(buy_block).hasClass('trade_page_buy_sell_closed_up')
            && !$(buy_block).hasClass('trade_page_buy_sell_closed')) {
                $(tab_block).addClass('width_125');
        };
        if($(main_block).hasClass('width_78')) {
            $(tab_block).removeClass('width_134');
        };
        if(!$(main_block).hasClass('width_78')) {
            $(tab_block).removeClass('width_125');
            $(tab_block).addClass('width_134');
        };
        if(!$(buy_block).hasClass('trade_page_buy_sell_closed_up')
            && !$(buy_block).hasClass('trade_page_buy_sell_closed')
            && !$(sell_block).hasClass('trade_page_buy_sell_closed')) {

            $(tab_block).removeClass('width_134');
        };

        if($(buy_block).hasClass('trade_page_buy_sell_closed_up') 
            && $(sell_block).hasClass('trade_page_buy_sell_closed_up')
            && !$(buy_block).hasClass('trade_page_buy_sell_closed')) {

            $(tab_block).toggleClass('width_168');
        }

        if($(buy_block).hasClass('trade_page_buy_sell_closed')
            && $(buy_block).hasClass('trade_page_buy_sell_closed_up')) {

            $(tab_block).toggleClass('width_125');
        };

        if($(buy_block).hasClass('trade_page_buy_sell_closed_up')
            && $(buy_block).hasClass('trade_page_buy_sell_closed')
            && !$(sell_block).hasClass('trade_page_buy_sell_closed_up')) {

            $(tab_block).toggleClass('width_125');
        }



});


// CLOSE      UP      TRADE PAGE BUY SELL BLOCK
$('.trade_page_buy_sell_close_up_btn_1').click(function(){

    var buy_block = $('#trade_page_buy');
    var sell_block = $('#trade_page_sell');
    var tab_block = $('.trade_page_bottom_tabs_block');
    var main_block = $('.trade_main_contant');

    $(this).find('i').toggleClass('rotate_0');

    // buy block up/down
    $(buy_block).toggleClass('trade_page_buy_sell_closed_up');

    // tab BLOCK
    if (!$(tab_block).hasClass('width_134') 
        && $(buy_block).hasClass('trade_page_buy_sell_closed_up')
        && !$(sell_block).hasClass('trade_page_buy_sell_closed')) 
    {
        $(tab_block).addClass('width_134');
    }else{
        $(tab_block).removeClass('width_134');
    };

    if($(main_block).hasClass('width_78') && $(sell_block).hasClass('trade_page_buy_sell_closed')) {
        $(tab_block).addClass('width_125');
    };

    if($(main_block).hasClass('width_78') && $(sell_block).hasClass('trade_page_buy_sell_closed') && !$(buy_block).hasClass('trade_page_buy_sell_closed_up')) {
        $(tab_block).removeClass('width_125');
    };

    if($(tab_block).hasClass('width_168')) {
        $(tab_block).removeClass('width_168');
    };

    if($(sell_block).hasClass('trade_page_buy_sell_closed_up') 
        && $(buy_block).hasClass('trade_page_buy_sell_closed_up') 
        && !$(main_block).hasClass('width_78')
        && !$(main_block).hasClass('width_96')) {

            $(tab_block).toggleClass('width_168');
    };
});


$('.trade_page_buy_sell_close_up_btn_2').click(function(){

    var buy_block = $('#trade_page_buy');
    var sell_block = $('#trade_page_sell');
    var tab_block = $('.trade_page_bottom_tabs_block');
    var main_block = $('.trade_main_contant');

    $(this).find('i').toggleClass('rotate_0');

    $(sell_block).toggleClass('trade_page_buy_sell_closed_up');

    // tab block

    if( !$(main_block).hasClass('width_78') 
        && !$(main_block).hasClass('width_96') 
        && $(buy_block).hasClass('trade_page_buy_sell_closed_up')
        && $(sell_block).hasClass('trade_page_buy_sell_closed_up')) {

        $(tab_block).toggleClass('width_168');
    }
    if(!$(sell_block).hasClass('trade_page_buy_sell_closed_up')) {
        $(tab_block).removeClass('width_168');
    }

    if($(buy_block).hasClass('trade_page_buy_sell_closed')
            && $(buy_block).hasClass('trade_page_buy_sell_closed_up')) {

            $(tab_block).toggleClass('width_125');
        };


});










// second menu open
$('.cabinet_top_line_menu .menu_button .text').click(function(){
    $('.cabinet_top_line_menu').addClass('cabinet_top_line_menu_open');
    $('.cabinet_top_line_menu .menu_button').addClass('display_none');
    $('.right_menu').addClass('top_69');
});

var start_hide_top_menu;

$('.cabinet_top_line_menu ul li').mouseleave(
 function(e){
  var element = $(e.target).parent().parent()[0]; 
  if ($(element).hasClass('cabinet_top_line_menu')) {
    start_hide_top_menu = setTimeout(function(){
      $('.cabinet_top_line_menu').removeClass('cabinet_top_line_menu_open');
      $('.cabinet_top_line_menu .menu_button').removeClass('display_none');
      $('.right_menu').removeClass('top_69');
    }, 2000);
  };
});


$('.cabinet_top_line_menu ul li').hover(function(e){
  clearTimeout(start_hide_top_menu);
}, function(){  });



function leaveBlock (element, target) {
  var target = target;
    while (!target.hasClass(element)) {
      target = target.parent();
    }

    if (target.hasClass(element)) {
      return true;
    }else{
      return false;
    }
}






// TRADING PAGE MAIN GRAFIC TOP PAIR ACTIVE CLASS CHANGE ON CLICK
$('.trade_top_pair_block ul li').click(function(){

  $('.trade_top_pair_block ul li').removeClass('active');

  $(this).addClass('active');

});



// TRADING PAGE BOTTOM TAB DELETE FUNCTION
$('.trade_page_bottom_tabs_block .ionTabs tbody').on('click', 'td', function(){
  $(this).closest('tr').remove();

});



// $(".nano").nanoScroller();










// TABLE BUY OR SELL CREATING LIST FUNCTION

//   function create_sell_buy_table_list () {

//     var table_sell_body = $('#sell_ tbody')[0];
//     var test;
//     function alldata() {
//       return  $.ajax({
//         url: 'https://api.coindesk.com/v1/bpi/currentprice.json',            
//         dataType : "json", 
//         // async: false,                   
//         success: function (data) { 
//           var arrayObj = data.bpi;
//           return arrayObj;
//         }
//       });
//     };
//     alldata().done(function(result){
//       test = result;
//     });
//     console.log(test);


// };

// function hellodata () {
//   var test = 10;
//     $.ajax({
//         url: 'https://api.coindesk.com/v1/bpi/currentprice.json',            
//         dataType : "json", 
//         // async: false,                   
//         success: function (data) { 
//           var arrayObj = data.bpi;
//         }
//     });
//   return test;
// };

// console.log(hellodata());
  
// create_sell_buy_table_list();





















// TRADING PAGE BUY SELL BLOCK FUNCTIONS

// table hover
$('.orders_to_sell_buy_wrap .table_wrapp table tbody tr').hover(function(){
  $(this).addClass('tr_hovered');
}, function(){
  $(this).removeClass('tr_hovered');
});

// table click

// =====================================================================// =====================================================================

(function (){

var up_array = [];

var buy_input_btc = $('#trade_page_buy').find('.balance_block_wrapp .summary_btc input')[0];
var buy_inputPrice = $('#trade_page_buy').find('.balance_block_wrapp .price_for_btc input')[0];
var sell_input_btc = $('#trade_page_sell').find('.balance_block_wrapp .summary_btc input')[0];
var sell_inputPrice = $('#trade_page_sell').find('.balance_block_wrapp .price_for_btc input')[0];
// add active classes
$('.orders_to_sell_buy_wrap .table_wrapp table tbody tr').click(function(){
  $('.orders_to_sell_buy_wrap .table_wrapp table tbody tr').removeClass('tr_clicked');
  $('.orders_to_sell_buy_wrap .table_wrapp table tbody tr').removeClass('dblclick_array');
  // clear up array on one click (set it on dubble click)
  up_array = [];
  $(this).addClass('tr_clicked');
  var this_el = $(this);

  // put numbers to calculate inputs
  if($(this).closest('table')[0].id === "buy_"){
    inputBuyCalculate();
  }else if($(this).closest('table')[0].id === "sell_"){
    inputSellCalculate();
  };

  function inputBuyCalculate() {
      var new_price_btc = $(this_el).find('td')[2].innerHTML;
      var new_sum_btc = $(this_el).find('td')[0].innerHTML;
      $(buy_input_btc).val(new_price_btc);
      $(buy_inputPrice).val(new_sum_btc);
  }

  function inputSellCalculate() {
    var new_price_btc = $(this_el).find('td')[2].innerHTML;
    var new_sum_btc = $(this_el).find('td')[0].innerHTML;
    $(sell_input_btc).val(new_price_btc);
    $(sell_inputPrice).val(new_sum_btc);
  }
});

// calculate on push calculate button
$('#trade_page_buy').find('.calculate_and_buy_btn .calculate').click(function(){
  buyCalculate();
});
$('#trade_page_sell').find('.calculate_and_buy_btn .calculate').click(function(){
  sellCalculate();
});

function buyCalculate() {
  var total_price_out = $('#trade_page_buy .balance_block_wrapp .total .price')[0];
  var commision_out = $('#trade_page_buy .balance_block_wrapp .commision .price')[0];
  var btc_summ = parseFloat($(buy_input_btc).val());
  var btc_price = parseFloat($(buy_inputPrice).val());
  var total_usd = btc_summ * btc_price;

  $(total_price_out).text(total_usd + " USD");
  $(commision_out).text((btc_summ/100*0.2) + " BTC");
}

function sellCalculate() {
  var total_price_out = $('#trade_page_sell .balance_block_wrapp .total .price')[0];
  var commision_out = $('#trade_page_sell .balance_block_wrapp .commision .price')[0];
  var btc_summ = parseFloat($(sell_input_btc).val());
  var btc_price = parseFloat($(sell_inputPrice).val());
  var total_usd = btc_summ * btc_price;

  $(total_price_out).text(total_usd + " USD");
  $(commision_out).text((btc_summ/100*0.2) + " BTC");
}

// GET ALL LIST OF TD ON DUBLE CLICK and AND CLASS TO THEM

function get_all_td(element) {

  // set selected class and get array of all selected tr's
  $(element).dblclick(function(){
    var new_sum_btc = 0;
    var tbody = $(this).closest('tbody')[0];
    var tr = $(tbody).find('tr');
    for (var i = 0; i <= tr.length; i++) {
      up_array.push(tr[i]);
      $(tr[i]).addClass('dblclick_array');
      if($(tr[i]).hasClass('tr_clicked')) { break }
    };

    // put in calculator inputs summary number from all tr's
    for (var i = 0; i < up_array.length; i++) {
      var each_number = parseFloat($(up_array[i]).find('td')[2].innerHTML);
      new_sum_btc = new_sum_btc + each_number;
    };
    console.log(new_sum_btc);
    var new_price_btc = $(this).find('td')[0].innerHTML;

    // put to sell or buy calculate inputs
    if ($(this).closest('table')[0].id === "sell_") {

      $(sell_input_btc).val(parseFloat(new_sum_btc));
      $(sell_inputPrice).val(parseFloat(new_price_btc));

    }else if($(this).closest('table')[0].id === "buy_"){

      $(buy_input_btc).val(parseFloat(new_sum_btc));
      $(buy_inputPrice).val(parseFloat(new_price_btc));
    }

  });

}

get_all_td('.orders_to_sell_buy_wrap .table_wrapp table tbody tr');






}());


// =====================================================================// =====================================================================

// OPEN NEW WINDOW SINGLE BUY SELL BLOCK
$('.trade_page_buy_sell .icon_02').click(function(){
    var new_win_height = $(window).height();
    var new_win_sell_buy = window.open("http://bitcoin/single_buy_sell.html", "_blank", "resizable=yes, top=100, left=100, width=850, height=" + new_win_height + '"');
    new_win_sell_buy.moveTo(100, 100);  
});





// FUNCTION TO GET DATA FROM API AND CREATE LIST

function get_data_history() {

    $.ajax({
    url: 'https://api.coindesk.com/v1/bpi/historical/close.json',            
    dataType : "json",                    
    success: function (data) { 
        var arrayObj = data.bpi;
        var arrayPrice = [];
        var arrayTime = [];
        for(var e in arrayObj){
            arrayPrice.push(arrayObj[e]);
            arrayTime.push(e);
            $('#active_orders_tab tbody').append(
                "<tr>" +
                    "<td>" + "Type" + "</td>" +
                    "<td class='active_orders_tab_price_td'>" + arrayObj[e] + "</td>" +
                    "<td>" + "Amount" + "BTC" + "</td>" +
                    "<td>" + "otal" + "USD" + "</td>" +
                    "<td class='active_orders_tab_date_td'>" + e + "</td>" +
                    "<td>" + "Actions"  + "<span class='delete'>" + "x" + "</span>" + "</td>" +
                "</tr>"
            );
        }

        var active_orders_tab_price = $('#active_orders_tab').find('.active_orders_tab_price_td');
        var active_orders_tab_date = $('#active_orders_tab').find('.active_orders_tab_date_td');

        arrayPrice.reverse();
        arrayTime.reverse();

        for(var i = 0; i < active_orders_tab_price.length; i++){
            $(active_orders_tab_price[i]).text(arrayPrice[i]);
            $(active_orders_tab_date[i]).text(arrayTime[i]);
        }
    } 
});
}

get_data_history();

function getRealTimeData() {
    $.ajax({
    url: 'https://api.coindesk.com/v1/bpi/currentprice.json',            
    dataType : "json",                    
    success: function (data) {
        console.log(data.bpi);
    }

});
}

// var test_001 = setInterval(getRealTimeData, 1000);

$('.scrollbar-macosx').scrollbar();


// MINING PAGE GRAPHIC ACTIVE CLASS TOGGLE
$('.mining_graphic ul').on('click', 'li', function(){
  $('.mining_graphic ul li').removeClass('active');
  $(this).addClass('active');
});




/************************************************************************************************************/
/*****************************************   TEST HELP WINDOW    ********************************************/
/************************************************************************************************************/


function help_window_settings(){

// $(window).load(function(){
//   $('.preloader').hide();
//   $('.first_help_window').show();
// });


// help windows wrapp block
$('.test_help_window_wrap').css({
  'width': $(window).width(),
  'height': $(document).height()
});

// first help window
var first_window_ref = $('.main_grafic_widget_block');
var first_help_window = $('.first_help_window');

// second help window
var second_window_ref = $('.trade_top_pair_block'),
    second_help_window = $('.second_help_window');

// close all on skip button 
$('.help_skip').click(function(){
  $('.test_help_window_wrap').hide(200);
});

// close to next button 
$('.second_help_window button').click( function() {
  var button = $(this);
  console.log(button.attr('class'));
  // $('.second_help_window').show(200);
  // $(this).parent().hide(200);
});

// set size's function
function set_Help_Windows_Size(help_window, ref_window) {
  var ref_width = ref_window.width();
  var ref_height = ref_window.height();
  help_window.css({ 
    'width': ref_width, 
    'height' : ref_height,
    // 'left': ref_window.offset().left,
    // 'top' : ref_window.offset().top

  });
}


// set first help window size
set_Help_Windows_Size(first_help_window, first_window_ref);

// set second help window seze
set_Help_Windows_Size(second_help_window, second_window_ref);

}


// first start
help_window_settings();

// redraw when resize
$(window).resize(function(){
  help_window_settings();
});



// Cabinet.html - add min height to ion tabs to make bg on full screen
if($('.ionTabs').parent().hasClass('cabinet container')) {
  $('.ionTabs').css('minHeight', $(window).height()-135);
}







});



