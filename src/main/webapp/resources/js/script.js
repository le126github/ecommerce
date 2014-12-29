var noticeN3Volume = 100;
function setN3Volume(vol) {
    noticeN3Volume = vol;
    jQuery('.jBoxN3-volume').removeClass('active');
    jQuery('#jBoxN3-volume' + vol).addClass('active')
}

jQuery(document).ready(function() {
    new jBox('Tooltip', {
        id: 'jBoxT1',
        attach: jQuery('#demoT1'),
        content: 'sgnbs@qq.com'
    });
    new jBox('Tooltip', {
        id: 'jBoxT2',
        attach: jQuery('#demoT2'),
        content: 'sgnbs@qq.com'
    });
    new jBox('Tooltip', {
        id: 'jBoxT3',
        attach: jQuery('#demoT3'),
        content: 'sgnbs@qq.com'
    });
    new jBox('Tooltip', {
        id: 'jBoxT4',
        attach: jQuery('#demoT4'),
        content: 'sgnbs@qq.com'
    });
    new jBox('Tooltip', {
        id: 'jBoxT5',
        attach: jQuery('#demoT5'),
        content: 'sgnbs@qq.com'
    });
	
    var colorsN2 = ['red', 'green', 'blue', 'yellow'];
    var currentColorN2 = 0;
    jQuery('#demoN2').click(function() {
        new jBox('Notice', {
            animation: 'flip',
            position: {
                x: 15,
                y: 65
            },
            content: 'Oooh! They also come in colors!',
            onInit: function() {
                this.options.color = colorsN2[currentColorN2];
                currentColorN2++; (currentColorN2 >= colorsN2.length) && (currentColorN2 = 0)
            },
            zIndex: 12000
        })
    });
	
	
    var colorsN3 = ['red', 'green', 'blue', 'yellow'];
    var titlesN3 = ['Oops', 'Well done', 'Reminder', 'Attention'];
    var contentsN3 = ['Sorry, something went wrong', 'You perfectly clicked a button', 'Don\'t forget to click the button one more time', 'Take care out there'];
    var currentColorN3 = 0;
    jQuery('#demoN3').click(function() {
        new jBox('Notice', {
            attributes: {
                x: 'left',
                y: 'bottom'
            },
            theme: 'NoticeBorder',
            color: 'black',
            audio: '/plugins/jBox/Source/audio/blob',
            volume: noticeN3Volume,
            animation: {
                open: 'slide:bottom',
                close: 'slide:left'
            },
            onInit: function() {
                this.options.color = colorsN3[currentColorN3];
                this.options.title = titlesN3[currentColorN3];
                this.options.content = contentsN3[currentColorN3];
                currentColorN3++; (currentColorN3 >= colorsN3.length) && (currentColorN3 = 0)
            },
        })
    });
	
	
    var colorsN4 = ['black', 'red', 'green', 'blue', 'yellow'];
    var currentColorN4 = 0;
    jQuery('#demoN4').click(function() {
        new jBox('Notice', {
            autoClose: 10000,
            attributes: {
                x: 'right',
                y: 'bottom'
            },
            stack: false,
            animation: {
                open: 'tada',
                close: 'zoomIn'
            },
            title: 'Tadaaa! I\'m single!',
            content: 'Open another notice to close me!',
            onInit: function() {
                this.options.color = colorsN4[currentColorN4];
                currentColorN4++; (currentColorN4 >= colorsN4.length) && (currentColorN4 = 0)
            },
        })
    })
	
});