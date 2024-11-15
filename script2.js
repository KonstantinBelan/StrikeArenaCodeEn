$(document).ready(function() {
    setTimeout(function() {
        (function($) {
            $.fn.populate = function(list) {
                return [
                    this.append(Object.entries(list).map(([item, value]) => $('<option>', {
                      text  : item,
                      value : item
                    }).attr('data-calc-value', value))),
                    this.prepend('<option value="" selected disabled>Укажите город</option>')
                ];
            };
        })(jQuery);
        
        var belarus = {
          Минск: 2,
          Гомель: 2,
          Другое : 2,
        };
        var kazahstan = {
            Актобе: 2,
            Актау: 2,
            Алматы: 2,
            Атырау: 2,
            Астана: 2,
            Караганда: 2,
            Кокшетау: 2,
            Костанай: 2,
            Кызылорда: 2,
            Петропавловск: 2,
            Семей: 2,
            Тараз: 2,
            Туркестан: 2,
            УстьКаменогорск: 2,
            Уральск: 2,
            Шымкент: 2,
            Экибастуз: 2,
            Другое: 2,
        };
        var uzbekistan = {
          Ташкент: 2,
          Наманган: 2,
          Самарканд: 2,
          Андижан: 2,
          Другое: 2,
        };
        var oae = {
          Дубай: 3,
          Другое: 3,
        };
        var argentina = {
          БуэносАйрес: 3,
          Кордова: 3,
          Росарио: 3,
          Мендоса: 3,
          ЛаПлата: 3,
          Сальта: 3,
          Другое: 3,
        };

        
        $('.country_btn .tn-atom[href="/"]').addClass('selected')
        
        if (window.location.href.indexOf("country=") > -1) {
            $('.country_btn .tn-atom[href="/"]').removeClass('selected')
            let params = new URLSearchParams(window.location.search);
            let myCountry = String(params.get('country'));
            $('.country_btn .tn-atom[href="/?country=' + myCountry + '"]').addClass('selected')
            if( myCountry == 'belarus' ) {
                $('.head_country .tn-atom a').text('Беларусь');
                $('select[name="GOROD"], select[name="city"]').empty().populate(belarus);
                $('.t-input-phonemask__options-item[data-phonemask-name="Belarus (Беларусь)"]').each(function() {
                  $( this ).click();
                });
            }
            if( myCountry == 'kazahstan' ) {
                $('.head_country .tn-atom a').text('Казахстан');
                $('select[name="GOROD"], select[name="city"]').empty().populate(kazahstan);
                $('.t-input-phonemask__options-item[data-phonemask-name="Kazakhstan (Казахстан)"]').each(function() {
                  $( this ).click();
                });
            }
            if( myCountry == 'uzbekistan' ) {
                $('.head_country .tn-atom a').text('Узбекистан');
                $('select[name="GOROD"], select[name="city"]').empty().populate(uzbekistan);
                $('.t-input-phonemask__options-item[data-phonemask-name="Uzbekistan (Oʻzbekiston)"]').each(function() {
                  $( this ).click();
                });
            }
            if( myCountry == 'oae' ) {
                $('.head_country .tn-atom a').text('ОАЭ');
                $('select[name="GOROD"], select[name="city"]').empty().populate(oae);
                $('.t-input-phonemask__options-item[data-phonemask-name="United Arab Emirates (الإمارات العربية المتحدة)"]').each(function() {
                  $( this ).click();
                });
            }
            if( myCountry == 'argentina' ) {
                $('.head_country .tn-atom a').text('Аргентина');
                $('select[name="GOROD"], select[name="city"]').empty().populate(argentina);
                $('.t-input-phonemask__options-item[data-phonemask-name="Argentina"]').each(function() {
                  $( this ).click();
                });
            }
        }
        
    }, 1000);
});
