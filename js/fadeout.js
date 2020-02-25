    $(window).scroll(function() {
        var $el = $('.section');

        if ($(this).scrollTop() >= 20) $el.addClass('section0');
        else $el.removeClass('section0');
    });







    $(window).scroll(function() {
        var $el = $('::-webkit-scrollbar');

        if ($(this).scrollTop() >= 20) $el.addClass('bold');
        else $el.removeClass('bold');
    });







	$(document).ready(function (e){
		
		$(document).on("click","img",function(){
			var path = $(this).attr('src')
			showImage(path);
		});//end click event
		
		function showImage(fileCallPath){
		    
		    $(".bigPictureWrapper").css("display","flex").show();
		    
		    $(".bigPicture")
		    .html("<img src='"+fileCallPath+"' >")
		    .animate({width:'100%', height: '100%'}, 400);
		    
		  }//end fileCallPath
		  
		$(".bigPictureWrapper").on("click", function(e){
		    $(".bigPicture").animate({width:'0%', height: '0%'}, 200);
		    setTimeout(function(){
		      $('.bigPictureWrapper').hide();
		    }, 200);
		  });//end bigWrapperClick event
	});







 function goBack() {
        window.history.back();
    }


    $(document).ready(function() {

        $('.gotop').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    });
    
    $(document).ready(function() {

        $('.gobottom').click(function() {
            $('html, body').animate({
                scrollbottom: 0
            }, 400);
            return false;
        });
    });