  $(function(){
        const blockId = '#rec826425372';
        let timerRemoveSubmit = setInterval(function() {
            $(blockId + ' .tn-form__submit').remove(); 
            $('script#t-zero-range-script').remove();
            $('#t-zero-range-styles').remove();
        }, 100);
        setTimeout(function() { 
            clearInterval(timerRemoveSubmit); 
        }, 2000);
    })

    document.addEventListener('DOMContentLoaded', function() {
        // setTimeout(function() {
        //     const preloaderShow = document.querySelector('.uc-n-show')
        //     if(preloaderShow.classList.contains('n-show')) {
        //         preloaderShow.classList.remove('n-show')
        //         preloaderShow.classList.add('n-hide')
        //         setTimeout(function() {
        //             preloaderShow.style.display = 'none'
        //         }, 500)
        //     }
        // }, 5500)
        setTimeout(function() {
            document.querySelectorAll('.t-rec').forEach(trec => {
                trec.classList.add('visibled')
            })
            var evt = document.createEvent('UIEvents');
            evt.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(evt);
            window.dispatchEvent(new Event('resize'));
        }, 1000)
    });

    if (window.location.href.indexOf("country=") > -1) {
    } else {
        $.getJSON('https://ipinfo.io/json', function (response) {
            var ipcountry = response.country;
            if(ipcountry == 'BY') {
                window.location = "/?country=belarus";
            }
            if(ipcountry == 'KZ') {
                window.location = "/?country=kazahstan";
            }
            if(ipcountry == 'UZ') {
                window.location = "/?country=uzbekistan";
            }
        });  
    };
