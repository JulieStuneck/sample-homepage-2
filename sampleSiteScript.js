$(document).ready(function(){
    let $sticky = $('.sticky');
    let stickyOffsetTop = $sticky.offset().top;
    
    $(window).scroll(function(e){
        e.preventDefault();
        
        let scrollTop = $(window).scrollTop();
        
        if(scrollTop > stickyOffsetTop){
            $sticky.addClass('is-fixed');
        }else{
            $sticky.removeClass('is-fixed');
        }
    });
});