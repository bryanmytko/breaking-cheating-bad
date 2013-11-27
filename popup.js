
$('#sell_div').append('<h3 style="color:#fff">Cheat:</h3>');

$('#sell_div').append('<input type="text" id="cash" placeholder="How much cash?"/><button onclick="gm.add_cash(parseInt($(\'#cash\').val()))" id="get_cash">Gimme Cash!</button>');

$('#sell_div').append('<input type="text" id="meth" placeholder="How much meth?"/><button onclick="gm.add_widgets(parseInt($(\'#meth\').val()))" id="get_meth">Gimme Meth!</button>');

console.log(chrome.extension.getURL('hector.png'));
i = chrome.extension.getURL('hector.png');

$('#sell_div').css({'background' : 'url(' + i + ')', 'padding':'0 0 96px 0'});
$('#sell_div input[type=text]').css({
  'border-radius': '5px',
  'border': '1px solid #ccc',
  'padding': '5px'
});