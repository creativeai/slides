/*
var noise = null, click = null;

document.addEventListener("impress:stepenter", function(event) {
    if ($(event.target).hasClass('section')) {
        noise = noise || new Audio('noise.ogg');
        noise.volume = 0.0;
        $(noise).animate({volume: 1.0}, 1000);
        noise.play();
    }
    else {
        if (noise != null) {
            $(noise).animate({volume: 0.0}, 1000);
        }
    }
});

document.addEventListener("impress:stepleave", function(event) {
    click = new Audio('click.ogg');
    click.playbackRate = 0.75 + 0.5 * Math.random();
    click.play();
});
*/

function jump(id)
{
    slide = document.getElementById(id);
    impress().goto(slide, 0.0);
}

$('div.fullscreen > h1').each(function () {
    var angle = -1.0 + 2.0 * Math.random();
    $(this).css('transform', 'rotate('+angle+'deg)');
});

$('body').keypress(function(evt)
{
    evt = evt.originalEvent;

    var index = evt.charCode - 49;
    if (evt.charCode >= 49  &&  evt.charCode <= 57) 
    {
        var label = $('.section').eq(index).attr('id');
        if (label === undefined) {
            label = 'section-'+index;
        }
        jump(label);
    }

    if (evt.keyCode == 13)
    {
        jump('splash');
    }
});