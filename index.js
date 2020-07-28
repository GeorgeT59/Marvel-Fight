$(function())
{
  var alreadyFilled = false;
var people = [
{'Ironman'},
{'Spiderman'},
{'Hulk'},
{'Wolverine'},
{'Deadpool'},
{'Juggernaut'},
{'Storm'},
{'Venom'},
{'Mr. Fantastic'},
{'Invisible Woman'},
{'The Thing'},
{'Human Torch'},
{'Nightcrawler'},
{'She-Hulk'},
{'Titania'},
{'Thundra'},
{'Red She-Hulk'},
{'Red Hulk'},
{'Domino'},
{'Shocker'},
{'Big Bertha'},
{'Black Cat'},
{'Silver Surfer'},
{'Taskmaster'},
{'Black Widow'},
{'Apocalypse'},
{'Thor'},
{'Cyclops'},
{'Squirrel Girl'},
{'MODOK'},
{'Red Skull'},
{'Captain America'},
{'Jubilee'},
{'Colossus'},
{'X-23'},
{'Ultron'}
];

function initDialog() {
        clearDialog();
        for (var i = 0; i < states.length; i++) {
            $('.dialog').append('<div>' + states[i] + '</div>');
        }
    }
    function clearDialog() {
        $('.dialog').empty();
    }
    $('.autocomplete input').click(function() {
        if (!alreadyFilled) {
            $('.dialog').addClass('open');
        }

    });
    $('body').on('click', '.dialog > div', function() {
        $('.autocomplete input').val($(this).text()).focus();
        $('.autocomplete .close').addClass('visible');
        alreadyFilled = true;
    });
    $('.autocomplete .close').click(function() {
        alreadyFilled = false;
        $('.dialog').addClass('open');
        $('.autocomplete input').val('').focus();
        $(this).removeClass('visible');
    });

    function match(str) {
        str = str.toLowerCase();
        clearDialog();
        for (var i = 0; i < states.length; i++) {
            if (states[i].toLowerCase().startsWith(str)) {
                $('.dialog').append('<div>' + states[i] + '</div>');
            }
        }
    }
    $('.autocomplete input').on('input', function() {
        $('.dialog').addClass('open');
        alreadyFilled = false;
        match($(this).val());
    });
    $('body').click(function(e) {
        if (!$(e.target).is("input, .close")) {
            $('.dialog').removeClass('open');
        }
    });
    initDialog();
});