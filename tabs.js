$(document).ready(function() {
    $('[class*="uc-maps"]').not('.uc-maps_1').fadeOut(0);
    $('[href="#maps_1"]').addClass('tab_maps_active');
    $('.tabs_maps_btn a').click(function() {
        var slide = $(this).attr('href').slice(1);
        if ($(this).attr('href').indexOf('on') == -1) {
            $('.tabs_maps_btn a').removeClass('tab_maps_active');
            $('.tabs_maps_btn a[href="#' + slide + '"').addClass('tab_maps_active');
        }
        
        $('[class*="uc-maps"]').fadeOut(0);
        $('.uc-' + slide + '').fadeIn(0); 
        t_lazyload_update();
    });
    $('[class*="uc-tab"]').not('.uc-tab1').fadeOut(0);
    $('[href="#tab1"]').addClass('tab_active');
    $('.tabs_formats_btn a').click(function() {
        var slide = $(this).attr('href').slice(1);
        if ($(this).attr('href').indexOf('on') == -1) {
            $('.tabs_formats_btn a').removeClass('tab_active');
            $('.tabs_formats_btn a[href="#' + slide + '"').addClass('tab_active');
        }
        
        $('[class*="uc-tab"]').fadeOut(0);
        $('.uc-' + slide + '').fadeIn(0); 
        t_lazyload_update();
    });
});
