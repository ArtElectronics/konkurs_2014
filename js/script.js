var footer, staticH;
$(document).ready(function(){
    MSIE8 = ($.browser.msie) && ($.browser.version == 8),
	$.fn.ajaxJSSwitch({
		topMargin: 0,//mandatory property for decktop
		bottomMargin: 0,//mandatory property for decktop
		topMarginMobileDevices: 0,//mandatory property for mobile devices
		bottomMarginMobileDevices: 0,//mandatory property for mobile devices
        delaySubMenuHide: 300,
        bodyMinHeight: 900,
		menuInit:function (classMenu, classSubMenu){
		},
		buttonOver:function (item){
		},
		buttonOut:function (item){
		},
		subMenuButtonOver:function (item){
		},
		subMenuButtonOut:function (item){
		},
		subMenuShow:function(subMenu){
        	subMenu.stop(true,true).animate({"opacity":"show"}, 400, "easeOutCubic");
		},
		subMenuHide:function(subMenu){
        	subMenu.stop(true,true).animate({"opacity":"hide"}, 500, "easeOutCubic");
		},
		pageInit:function (pages){
		},
		currPageAnimate:function (page){
			//$('#splash').stop(true).animate({'top':'-600px'})
			$('.bg').stop(true).delay(300).animate({"width":730}, 500, "easeOutExpo")
		    $('.logo_splash').stop(true).delay(300).animate({"margin-left":'-1131px'}, 500, function() {$('.logo_page').stop(true).fadeIn();})

			$('#leftPanel').stop(true).delay(300).animate({"width":'470px'}, 500, "easeOutExpo")


            page.css({"left":-1500}).stop(true).delay(500).animate({"left":0}, 600, "easeOutCubic");
		},
		prevPageAnimate:function (page){
            page.stop(true).animate({"display":"block", "left":-1500}, 700, "easeInCubic");
		},
		backToSplash:function (){
			//$('#splash').stop(true).delay(500).animate({'top':'168px'})
			$('.bg').stop(true).delay(300).animate({'width':'0'})
			$('.logo_splash').stop(true).delay(300).animate({"margin-left":'0'}, 500, "easeOutExpo")
			$('.logo_page').stop(true).fadeOut();
			$('#leftPanel').stop(true).delay(300).animate({"width":'544px'}, 500, "easeOutExpo")
		},
		pageLoadComplete:function (){

        }
	});
	
	footer = $('footer');
	staticH = parseInt($('header').outerHeight(true))
			+ parseInt(footer.outerHeight())
			+ parseInt($('#leftPanel .navbar').outerHeight(true));
})
$(window).load(function(){
    setTimeout(function (){ $(window).trigger('resize') },600)

    $("#galleryHolder").gallerySplash({
        autoPlayState:'false',
        paginationDisplay:'true',
        autoPlayTime: 12,
        alignIMG: 'center'
    }); 

	$("#webSiteLoader").delay(500).animate({opacity:0}, 600, "easeInCubic", function(){$("#webSiteLoader").remove()});
});

$(window).resize(function (e){
	
})