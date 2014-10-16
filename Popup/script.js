/**
 * Created by Таника on 15.10.14.
 */
function Popup(method) {
    var $el = $(method);

    function hide() {
        $el.addClass("popup-hide");
        $('html,body').css('overflow', 'auto');
    }

    function show() {
        $el.removeClass("popup-hide");
        $('html,body').css('overflow', 'hidden');
        console.log(show)
    }

    $el.find('.popup-close').click(function () {
        hide();
    });

    $el.find('.popup-shadow').click(function () {
        hide();
    });

    hide();

    this.hide = hide;
    this.show = show;
    this.$el = $el;
};

var popup1 = new Popup(".popup1");
var popup2 = new Popup(".popup2");

$('#method1').click(function () {
    popup1.show();
});

$('#method2').click(function () {
    popup2.show();
    centerBox(popup2.$el)
});


function centerBox($el) {

    var winWidth = $(window).width();
    var winHeight = $(window).height();


    var boxWidth = winWidth * 0.5;
    var disWidth = (winWidth - boxWidth) / 2;


    $el.css({'width': winWidth + 'px', 'height': winHeight + 'px'});
    $el.find('.popup-content').css({'width': boxWidth + 'px', 'left': disWidth + 'px'});
    $el.find('.popup-shadow').css({'width': winWidth + 'px', 'height': winHeight + 'px'});

    var disHeight;
    var elHeight = $el.find('.popup-content').height();

    if (winHeight > elHeight) {
        disHeight = (winHeight - elHeight) / 2;
    }
    else {
        disHeight = 0;
    }

//    console.log(winHeight);
//    console.log(elHeight);
//    console.log((winHeight - elHeight) / 2);

    $el.find('.popup-content').css({'top': disHeight + 'px'});
    return false;
}
