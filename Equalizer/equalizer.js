/**
 * Created by Таника on 19.10.14.
 */
(function ($) {
    $.fn.equalizer = function(options){
        return this.each(function(){
            var default_ = {
                timeout: 1000,
                colWidth: 1
            };

            var settings = $.extend(default_, options);
            var $selector = $(this);
            setEqualizer($selector, settings.timeout, settings.colWidth);
        });

    };

    function setEqualizer($selector, timeout, colWidth) {
        if (!colWidth) {
            colWidth = 1;
        }

// cache selector
        $selector.css({
            verticalAlign: 'bottom',
            lineHeight: $selector.height() + 'px'
        });

// Кол-во столбиков
        var colQuantity = Math.ceil($selector.width() / colWidth);
        var cols = new Array(colQuantity);
        for (var i = 0; i < colQuantity; i++) {
            var span = $('<span/>').css({
                verticalAlign: 'bottom',
                display: 'inline-block',

                fontSize: 0,
                lineHeight: 0,

                width: colWidth,
                background: 'pink',
                borderTop: '2px solid red'
            });
            $selector.append(span);
            cols[i] = span;
            console.log(span);
        }
        var $cols = $selector.children();
        var height = $selector.height();
        console.log($cols);
        run_equalizer(height, timeout, $cols, cols);
    }

    function run_equalizer(height, timeout, $cols, cols) {
        var _animations_counter = cols.length;

        function after_end_animations() {
            _animations_counter--;
            if (_animations_counter === 0) {
                // timeout is necessary for end animation
                setTimeout(function () {
                    run_equalizer(height, timeout, $cols, cols);
                }, 0);
            }
        }

        $.each(cols, function (i, col_i_value) {
            var colHeight = Math.round(height * Math.random());
            col_i_value.animate({height: colHeight}, timeout, 'linear', function () {
                col_i_value.animate({height: height / 2}, timeout, 'linear', after_end_animations);
            });
        });

    };
}(jQuery));