    window.onload = function () {
        var scr = $(".uc-scroll .t396__artboard");
        scr.mousedown(function () {
            var startX = this.scrollLeft + event.pageX;
            scr.mousemove(function () {
                this.scrollLeft = startX - event.pageX;
                return false;
            });
        });
        $(window).mouseup(function () {
            scr.off("mousemove"); 
        });
    }

    $(document).ready(function() {
        var blockIds = ['#rec826425465', '#rec826425474', '#rec826425472']; // массив идентификаторов блоков
        adjustScreenZoom(blockIds); 
    
        $(window).resize(function() {
            adjustScreenZoom(blockIds); 
        });
    });
    
    function adjustScreenZoom(blockIds) {
        var screenWidth = $(window).width();
        var zoomLevel;

        if (screenWidth <= 320) {
            zoomLevel = screenWidth / 320;
        } else if (screenWidth <= 480) {
            zoomLevel = screenWidth / 480; 
        } else if (screenWidth <= 768) {
            zoomLevel = screenWidth / 768; 
        } else {
            zoomLevel = screenWidth / 1200; 
        }
    
        blockIds.forEach(function(blockId) {
            $(blockId).css('zoom', zoomLevel);
        });
    }
