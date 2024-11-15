$(document).ready(function() {
    setTimeout(function() {
        (function($) {
            $.fn.populate = function(list) {
                return [
                    this.append(Object.entries(list).map(([item, value]) => $('<option>', {
                      text  : item,
                      value : item
                    }).attr('data-calc-value', value))),
                    this.prepend('<option value="" selected disabled>Choose your city</option>')
                ];
            };
        })(jQuery);
        
        var belarus = {
          Minsk: 2,
          Gomel: 2,
          Other : 2,
        };
        var kazahstan = {
Aktobe: 2,
Aktau: 2,
Almaty: 2,
Atyrau: 2,
Astana: 2,
Karaganda: 2,
Kokshetau: 2,
Kostanay: 2,
Kyzylorda: 2,
Petropavlovsk: 2,
Semey: 2,
Taraz: 2,
Turkestan: 2,
Ustkamenogorsk: 2,
Uralsk: 2,
Shymkent: 2,
Ekibastuz: 2,
Other: 2,
        };
        var uzbekistan = {
Tashkent: 2,
Namangan: 2,
Samarkand: 2,
Andijan: 2,
Other: 2,
        };
        var oae = {
Dubai: 3,
Other: 3,
        };
        var argentina = {
BuenosAires: 3,
Cordoba: 3,
Rosario: 3,
Mendoza: 3,
LaPlata: 3,
Salta: 3,
Other: 3,
        };

        
        $('.country_btn .tn-atom[href="/"]').addClass('selected')
        
        if (window.location.href.indexOf("country=") > -1) {
            $('.country_btn .tn-atom[href="/"]').removeClass('selected')
            let params = new URLSearchParams(window.location.search);
            let myCountry = String(params.get('country'));
            $('.country_btn .tn-atom[href="/en/?country=' + myCountry + '"]').addClass('selected')
            if( myCountry == 'belarus' ) {
                $('.head_country .tn-atom a').text('Belarus');
                $('select[name="GOROD"], select[name="city"]').empty().populate(belarus);
                $('.t-input-phonemask__options-item[data-phonemask-name="Belarus (Беларусь)"]').each(function() {
                  $( this ).click();
                });
            }
            if( myCountry == 'kazahstan' ) {
                $('.head_country .tn-atom a').text('Kazakhstan');
                $('select[name="GOROD"], select[name="city"]').empty().populate(kazahstan);
                $('.t-input-phonemask__options-item[data-phonemask-name="Kazakhstan (Казахстан)"]').each(function() {
                  $( this ).click();
                });
            }
            if( myCountry == 'uzbekistan' ) {
                $('.head_country .tn-atom a').text('Uzbekistan');
                $('select[name="GOROD"], select[name="city"]').empty().populate(uzbekistan);
                $('.t-input-phonemask__options-item[data-phonemask-name="Uzbekistan (Oʻzbekiston)"]').each(function() {
                  $( this ).click();
                });
            }
            if( myCountry == 'oae' ) {
                $('.head_country .tn-atom a').text('UAE');
                $('select[name="GOROD"], select[name="city"]').empty().populate(oae);
                $('.t-input-phonemask__options-item[data-phonemask-name="United Arab Emirates (الإمارات العربية المتحدة)"]').each(function() {
                  $( this ).click();
                });
            }
            if( myCountry == 'argentina' ) {
                $('.head_country .tn-atom a').text('Argentina');
                $('select[name="GOROD"], select[name="city"]').empty().populate(argentina);
                $('.t-input-phonemask__options-item[data-phonemask-name="Argentina"]').each(function() {
                  $( this ).click();
                });
            }
        }
        
    }, 1000);
});
