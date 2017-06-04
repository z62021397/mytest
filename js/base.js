$.fn.placeholder = function() {
	var $obj = this;
	var v=$(this).val();
	$obj.focus(function(event) {
		if ($obj.val() == v) {
			$obj.val("");
		}
	});
	$obj.blur(function(event) {
		if($obj.val() == ""){
			$obj.val(v);
		}
	});
}
$.fn.tabs = function() {
	var $obj = this;
	var $tabs = $obj.find(".ts >.t");
	var $cnts = $obj.find(".cs >.c");

	$tabs.click(function(event) {
		var i = $tabs.index(this);
		$cnts.hide();
		$cnts.eq(i).show();

		$tabs.removeClass('on');
		$(this).addClass('on');

		return false;
	});
	$tabs.first().click();
}


$(document).ready(function () {
    

    jQuery.fn.shake = function (times, offset, delay) {//����,ƫ��,���
        this.stop().each(function () {
            var Obj = $(this);
            if (typeof (marginLeft) == 'undefined')//��ֹ���ٵ��ʱ���Ƶ�bug
                marginLeft = parseInt(Obj.css('margin-left'));
            var delay = delay > 20 ? delay : 20;
            if ($(Obj).is(":animated"))
                return;
            Obj.animate({ 'margin-left': marginLeft + offset }, delay, function () {
                Obj.animate({ 'margin-left': marginLeft-10}, delay, function () {
                    times = times - 1;
                    if (times > 0)
                        Obj.shake(times, offset, delay);
                    else if(times==0)
                        Obj.animate({ 'margin-left': marginLeft},delay);
                })
            });
        });
        return this;
    }
    jQuery.fn.shake2 = function (times, offset, delay) {//����,ƫ��,���
        this.stop().each(function () {
            var Obj = $(this);
            if (typeof (marginRight) == 'undefined')//��ֹ���ٵ��ʱ���Ƶ�bug
                marginRight = parseInt(Obj.css('margin-right'));
            var delay = delay > 20 ? delay : 20;
            if ($(Obj).is(":animated"))
                return;
            Obj.animate({ 'margin-right': marginRight + offset }, delay, function () {
                Obj.animate({ 'margin-right': marginRight-10}, delay, function () {
                    times = times - 1;
                    if (times > 0)
                        Obj.shake2(times, offset, delay);
                    else if(times==0)
                        Obj.animate({ 'margin-right': marginRight},delay);
                })
            });
        });
        return this;
    }

    //$(".arrow-left").click(function () {
    //    $(".arrow-left img").shake(5, 6, 100);

    //});
    //$(".arrow-right").click(function () {

    //    $(".arrow-right img").shake2(5, 6, 100);

    //});

    

    $(".home_a").click(function () {

        $(".home_a img").shake2(4, 6, 100);

    });
});