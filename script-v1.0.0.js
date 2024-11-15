document.addEventListener('DOMContentLoaded', function() {
    
    function MyRound10(val) {
      return Math.round(val * 10)/10;
    }
        
    setTimeout(function() { 
            let daily_valute = 1;
            let nominal = 1;
            let NumberFormats = 'ru-RU';
            if (window.location.href.indexOf("country=") > -1) {
                let params2 = new URLSearchParams(window.location.search);
                let myCountry2 = String(params2.get('country'));
                if( myCountry2 == 'belarus' ) {
                    NumberFormats = 'be-BY';
                    currency = 'BYN';
                }
                if( myCountry2 == 'kazahstan' ) {
                    NumberFormats = 'kk-KZ';
                    currency = 'тенге';
                }
                if( myCountry2 == 'uzbekistan' ) {
                    NumberFormats = 'uz-UZ';
                    currency = 'UZS';
                }
                if( myCountry2 == 'oae' ) {
                    NumberFormats = 'ar-ae';
                    currency = 'AED';
                }
                if( myCountry2 == 'argentina' ) {
                    NumberFormats = 'es-ar';
                    currency = 'ARS';
                }
                
                $.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function(data) {
                    if (window.location.href.indexOf("country=") > -1) {
                        let params2 = new URLSearchParams(window.location.search);
                        let myCountry2 = String(params2.get('country'));
                        if( myCountry2 == 'belarus' ) {
                            daily_valute = data.Valute.BYN.Value;
                            nominal = data.Valute.BYN.Nominal;
                        }
                        if( myCountry2 == 'kazahstan' ) {
                            daily_valute = data.Valute.KZT.Value;
                            nominal = data.Valute.KZT.Nominal;
                        }
                        if( myCountry2 == 'uzbekistan' ) {
                            daily_valute = data.Valute.UZS.Value;
                            nominal = data.Valute.UZS.Nominal;
                        }
                        if( myCountry2 == 'oae' ) {
                            daily_valute = data.Valute.AED.Value;
                            nominal = data.Valute.AED.Nominal;
                        }
                        if( myCountry2 == 'argentina' ) {
                            daily_valute = '0.098935';
                            nominal = '1';
                        }
                    }
                    
                    document.querySelector('input[name=daily_value]').value = daily_valute;
                    document.querySelector('input[name=daily_nominal]').value = nominal;
                });
            } else {
                NumberFormats = 'ru-RU';
                currency = '₽';
            }
    
    function investSearch(node) {
        const heroJSformCalc = document.querySelector('.js_form_calc');
        const investmentSearch = /%investment%/g;
        const resultNewInput = document.querySelector('input[name=investment]');
        const resultNew = resultNewInput.value;
        resultNewString = new Intl.NumberFormat('' + NumberFormats + '').format(resultNew);
        
        const defaultResultRange = document.querySelector('input[name=quantity]');
        const defaultResult = document.querySelector('input[name=quantity_3]');
        defaultResult.value = defaultResultRange.value;
        
        setTimeout(function() {
            document.querySelector('.t-input-group_rg label').click();
        }, 500)
        
        heroJSformCalc.innerHTML 
            = heroJSformCalc.innerHTML 
            .replace(investmentSearch, '<span id="investmentResult"><span style="opacity:0.5;">Выберите кол-во ПК</span></span>');
        
    }
    
        investSearch();
        
        function revenueSearch(node) {
            const heroJSformCalcRevenue = document.querySelector('.js_form_calc_revenue');
            const revenueTxtSearch = /%revenue%/g;
            const revenueValue = document.querySelector('input[name=revenue]').value;
            const revenueValueNew = new Intl.NumberFormat('' + NumberFormats + '').format(revenueValue);
            heroJSformCalcRevenue.innerHTML 
                = heroJSformCalcRevenue.innerHTML 
                .replace(revenueTxtSearch, '<span id="revenueResult">' + revenueValueNew + ' ' + currency + '</span>');
        }
        
        function paybackSearch(node) {
            const heroJSformCalcPayback = document.querySelector('.js_form_calc_payback');
            const paybackTxtSearch = /%payback%/g;
            const paybackValue = document.querySelector('input[name=payback]').value;
            heroJSformCalcPayback.innerHTML 
                = heroJSformCalcPayback.innerHTML 
                .replace(paybackTxtSearch, '<span id="paybackResult">' + paybackValue + '</span>');
        }
        
        function profitSearch(node) {
            const heroJSformCalcProfit = document.querySelector('.js_form_calc_profit');
            const profitTxtSearch = /%profit%/g;
            const profitValue = document.querySelector('input[name=profit]').value;
            const profitValueNew = new Intl.NumberFormat('' + NumberFormats + '').format(profitValue);
            heroJSformCalcProfit.innerHTML 
                = heroJSformCalcProfit.innerHTML 
                .replace(profitTxtSearch, '<span id="profitResult">' + profitValueNew + ' ' + currency + '</span>');
        }
        
        function dateSearch(node) {
            const heroJSformCalcDate = document.querySelector('.js_form_calc_date');
            const dateTxtSearch = /%date%/g;
            const dateValueNew = '3 месяца';
            heroJSformCalcDate.innerHTML 
                = heroJSformCalcDate.innerHTML 
                .replace(dateTxtSearch, '<span id="dateResult">' + dateValueNew + '</span>');
        }
        
        setTimeout(function() {
            revenueSearch();
            paybackSearch();
            profitSearch();
            dateSearch();
        }, 500)
        
        
    function divReplaceInput() {
        const inputQuantityValue = document.querySelector('input[name="quantity"]');
        const inputQuantityValueMin = inputQuantityValue.min
        const inputQuantityValueMax = inputQuantityValue.max
        const inputQuantityValueStep = inputQuantityValue.step
        const inputQuantityParent = document.querySelector('input[name="quantity"]').closest(".t-range__wrapper");
        const inputQuantityDiv = inputQuantityParent.querySelector('.t-range__value-txt')
        let inputQuantityDivValue = '';
        
        if(!inputQuantityDiv.innerHTML) {
            inputQuantityDivValue = '20';
        } else {
            inputQuantityDivValue = inputQuantityDiv.innerHTML;
        }
        
        var newInput = document.createElement('input');
        newInput.type = "number";
        newInput.value = inputQuantityDivValue;
        newInput.name = "quantity_2";
        newInput.min = inputQuantityValueMin;
        newInput.max = inputQuantityValueMax;
        newInput.step = inputQuantityValueStep;
        newInput.style.left = "98px";
    
        newInput.classList.add('t-input', 'js-tilda-rule', 't-input-inline-styles', 't-range__value-txt', 't-descr', 't-descr_xxs');

        inputQuantityDiv.parentNode.replaceChild(newInput,inputQuantityDiv);
        
    }
    divReplaceInput();
    
        const inputQuantity = document.querySelector('input[name="quantity"]')
        const inputQuantity2 = document.querySelector('input[name="quantity_2"]') 
        const inputQuantity3 = document.querySelector('input[name="quantity_3"]')
        inputQuantity.addEventListener('input', function () {
            inputQuantity2.value = this.value
            inputQuantity3.value = this.value
            document.querySelector('.t-input-group_rg label').click();
        })
        
        inputQuantity2.addEventListener('input', function () {
            inputQuantity.value = this.value
            
            var maxInput = Number(this.getAttribute('max'));
            var minInput = Number(this.getAttribute('min'));
            
            if (Number(this.value) >= minInput && Number(this.value) <= maxInput) {
                inputQuantity3.value = this.value;
                document.querySelector('.t-input-group_rg label').click();
                document.querySelector('.t-input-group_rg input[type="number"]').focus();
            }
            
            if (Number(this.value) >= maxInput) {
                this.value = maxInput;
                inputQuantity.value = maxInput;
                inputQuantity3.value = maxInput;
                document.querySelector('.t-input-group_rg label').click();
                document.querySelector('.t-input-group_rg input[type="number"]').focus();
            }
            
            if (Number(this.value) <= 0) {
                this.value = minInput;
                inputQuantity.value = minInput;
                inputQuantity3.value = minInput;
                document.querySelector('.t-input-group_rg label').click();
                document.querySelector('.t-input-group_rg input[type="number"]').focus();
            }
        })
        inputQuantity2.addEventListener('blur', function () {
            document.querySelector('.t-input-group_rg label').click();
            if (Number(this.value) <= Number(this.getAttribute('min'))) {
                this.value = Number(this.getAttribute('min'));
                inputQuantity2.value = Number(this.getAttribute('min'));
                inputQuantity3.value = Number(this.getAttribute('min'));
                document.querySelector('.t-input-group_rg label').click();
                document.querySelector('.t-input-group_rg input[type="number"]').focus();
            }
            if (Number(this.value) >= Number(this.getAttribute('max'))) {
                this.value = Number(this.getAttribute('max'));
                inputQuantity2.value = Number(this.getAttribute('max'));
                inputQuantity3.value = Number(this.getAttribute('max'));
            }
        })
        

  var heroFormCheckbox = document.querySelector(
		'#rec813400851 .t-checkbox__control'
	)
  if(heroFormCheckbox) {
    var heroFormLeasings = document.querySelector('input[name="leasings"]')
    heroFormLeasings.value = '1'
    heroFormCheckbox.addEventListener('click', function(e) {
      if (e.target.checked === true) {
        heroFormLeasings.value = '0.7'
			} else {
        heroFormLeasings.value = '1'
      }
    })
  }
  
  if(document.querySelector('.t-checkbox__control .t-checkbox__indicator')) {
      document.querySelector('.t-checkbox__control .t-checkbox__indicator').addEventListener('click', function() {
              if(document.querySelector('input[name=leasing]').checked === true) {
                document.querySelector('input[name=leasing]').setAttribute('checked', '');
              } else {
                  document.querySelector('input[name=leasing]').removeAttribute('checked');
              }
      })
  }
  

    let observer = new MutationObserver(mutationRecords => {
        
            document.querySelector('#investmentResult').classList.add('visible');
            const bodyHTML = document.querySelector('body')
            let investmentValue = document.querySelector('input[name=investment]').value;
            const quantityValue = document.querySelector('input[name=quantity]').value;
            let revenueValue = document.querySelector('input[name=revenue]').value;
            let paybackValue = document.querySelector('input[name=payback').value;
            let profitValue = document.querySelector('input[name=profit]').value;
            let leasingscheck = document.querySelector('input[name=leasing]');
            let dailyvalue = document.querySelector('input[name=daily_value]').value;
            let dailynominal = document.querySelector('input[name=daily_nominal]').value;
            
            let investpercent = '1.075';
            
            // ЗНАЧЕНИЯ ДЛЯ КАЛЬКУЛЯТОРА //
            // С какого месяца прибыль
            let profit_date = '2 месяца';
            // Окупаемость
            paybackValue = '20 месяцев';
            if(leasingscheck.checked === true) {
                paybackValue = '17 месяцев';
            }
            // Сумма расходов на PC Zone
            let investpc = 188900;
            // Сумма расходов на PS Zone
            let investlounge = 361000;
            let investlounge_var = 72750;
            // Общая сумма дополнительных расходов (помимо ПК и столов)
            let investsumm = 4265000;
            let investsumm_var = 733500;
            // Стоимость часа
            let costhour = 150;
            // Кол-во часов при полной загрузке
            let hours = 24;
            // Кол-во дней в месяце
            let days = 30;
            // Средняя загруженность в % процентах
            let workload = 36;
            // Средний расход в месяц
            let expenditure = 601145;
            let expenditure_var = 47876;
            // Расход на лизинг
            let costleasing = 150000;
            let costleasing_var = 37500;
            // Дополнительный доход от PS и снеков
            let addincome = 246240;
            let addincome_var = 45360;
            
            // Распределение инвестиций
            // Зарплата и взносы
            let salary = 3254400;
            let salary_var = 169500;
            
            // Паушальный взнос
            let payment = 700000;
            
            // Подготовка помещения
            let room = 4070000;
            let room_var = 718500;
            
            // PC Zone
            let pczone = 3778000;
            // let pczone = investpc * quantityValue;
            let pczone_var = 944500;
            
            // Lounge Zone
            let loungezone = 361000;
            let loungezone_var = 72750;
            
            // Зона админ
            let admin = 95000;
            let admin_var = 0;
            
            // Прочее
            let other = 100000;
            let other_var = 15000;
            
            if(quantityValue == '25') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 1);
                investsumm = investsumm + (investsumm_var * 1);
                expenditure = expenditure + (expenditure_var * 1);
                addincome = addincome + (addincome_var * 1);
                salary = salary + (salary_var * 1);
                costleasing = costleasing + (costleasing_var * 1);
                
                room = room + (room_var * 1);
                pczone = pczone + (pczone_var * 1);
                loungezone = loungezone + (loungezone_var * 1);
                admin = admin + (admin_var * 1);
                other = other + (other_var * 1);
                
                paybackValue = '17 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '14 месяцев';
                }
            }
            if(quantityValue == '30') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 2);
                investsumm = investsumm + (investsumm_var * 2);
                expenditure = expenditure + (expenditure_var * 2);
                addincome = addincome + (addincome_var * 2);
                salary = salary + (salary_var * 2);
                costleasing = costleasing + (costleasing_var * 2);
                
                room = room + (room_var * 2);
                pczone = pczone + (pczone_var * 2);
                loungezone = loungezone + (loungezone_var * 2);
                admin = admin + (admin_var * 2);
                other = other + (other_var * 2);
                
                paybackValue = '16 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '13 месяцев';
                }
            }
            if(quantityValue == '35') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 3);
                investsumm = investsumm + (investsumm_var * 3);
                expenditure = expenditure + (expenditure_var * 3);
                addincome = addincome + (addincome_var * 3);
                salary = salary + (salary_var * 3);
                costleasing = costleasing + (costleasing_var * 3);
                
                room = room + (room_var * 3);
                pczone = pczone + (pczone_var * 3);
                loungezone = loungezone + (loungezone_var * 3);
                admin = admin + (admin_var * 3);
                other = other + (other_var * 3);
                
                paybackValue = '14 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '11 месяцев';
                }
            }
            if(quantityValue == '40') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 4);
                investsumm = investsumm + (investsumm_var * 4);
                expenditure = expenditure + (expenditure_var * 4);
                addincome = addincome + (addincome_var * 4);
                salary = salary + (salary_var * 4);
                costleasing = costleasing + (costleasing_var * 4);
                
                room = room + (room_var * 4);
                pczone = pczone + (pczone_var * 4);
                loungezone = loungezone + (loungezone_var * 4);
                admin = admin + (admin_var * 4);
                other = other + (other_var * 4);
                
                paybackValue = '13 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '10 месяцев';
                }
            }
            if(quantityValue == '45') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 5);
                investsumm = investsumm + (investsumm_var * 5);
                expenditure = expenditure + (expenditure_var * 5);
                addincome = addincome + (addincome_var * 5);
                salary = salary + (salary_var * 5);
                costleasing = costleasing + (costleasing_var * 5);
                
                room = room + (room_var * 5);
                pczone = pczone + (pczone_var * 5);
                loungezone = loungezone + (loungezone_var * 5);
                admin = admin + (admin_var * 5);
                other = other + (other_var * 5);
                
                paybackValue = '13 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '10 месяцев';
                }
            }
            if(quantityValue == '50') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 6);
                investsumm = investsumm + (investsumm_var * 6);
                expenditure = expenditure + (expenditure_var * 6);
                addincome = addincome + (addincome_var * 6);
                salary = salary + (salary_var * 6);
                costleasing = costleasing + (costleasing_var * 6);
                
                room = room + (room_var * 6);
                pczone = pczone + (pczone_var * 6);
                loungezone = loungezone + (loungezone_var * 6);
                admin = admin + (admin_var * 6);
                other = other + (other_var * 6);
                
                paybackValue = '12 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '9 месяцев';
                }
            }
            if(quantityValue == '55') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 7);
                investsumm = investsumm + (investsumm_var * 7);
                expenditure = expenditure + (expenditure_var * 7);
                addincome = addincome + (addincome_var * 7);
                salary = salary + (salary_var * 7);
                costleasing = costleasing + (costleasing_var * 7);
                
                room = room + (room_var * 7);
                pczone = pczone + (pczone_var * 7);
                loungezone = loungezone + (loungezone_var * 7);
                admin = admin + (admin_var * 7);
                other = other + (other_var * 7);
                
                paybackValue = '12 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '9 месяцев';
                }
            }
            if(quantityValue == '60') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 8);
                investsumm = investsumm + (investsumm_var * 8);
                expenditure = expenditure + (expenditure_var * 8);
                addincome = addincome + (addincome_var * 8);
                salary = salary + (salary_var * 8);
                costleasing = costleasing + (costleasing_var * 8);
                
                room = room + (room_var * 8);
                pczone = pczone + (pczone_var * 8);
                loungezone = loungezone + (loungezone_var * 8);
                admin = admin + (admin_var * 8);
                other = other + (other_var * 8);
                
                paybackValue = '12 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '9 месяцев';
                }
            }
            if(quantityValue == '65') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 9);
                investsumm = investsumm + (investsumm_var * 9);
                expenditure = expenditure + (expenditure_var * 9);
                addincome = addincome + (addincome_var * 9);
                salary = salary + (salary_var * 9);
                costleasing = costleasing + (costleasing_var * 9);
                
                room = room + (room_var * 9);
                pczone = pczone + (pczone_var * 9);
                loungezone = loungezone + (loungezone_var * 9);
                admin = admin + (admin_var * 9);
                other = other + (other_var * 9);
                
                paybackValue = '12 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '9 месяцев';
                }
            }
            if(quantityValue == '70') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 10);
                investsumm = investsumm + (investsumm_var * 10);
                expenditure = expenditure + (expenditure_var * 10);
                addincome = addincome + (addincome_var * 10);
                salary = salary + (salary_var * 10);
                costleasing = costleasing + (costleasing_var * 10);
                
                room = room + (room_var * 10);
                pczone = pczone + (pczone_var * 10);
                loungezone = loungezone + (loungezone_var * 10);
                admin = admin + (admin_var * 10);
                other = other + (other_var * 10);
                
                paybackValue = '11 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '8 месяцев';
                }
            }
            if(quantityValue == '75') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 11);
                investsumm = investsumm + (investsumm_var * 11);
                expenditure = expenditure + (expenditure_var * 11);
                addincome = addincome + (addincome_var * 1);
                salary = salary + (salary_var * 11);
                costleasing = costleasing + (costleasing_var * 11);
                
                room = room + (room_var * 11);
                pczone = pczone + (pczone_var * 11);
                loungezone = loungezone + (loungezone_var * 11);
                admin = admin + (admin_var * 11);
                other = other + (other_var * 11);
                
                paybackValue = '11 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '8 месяцев';
                }
            }
            if(quantityValue == '80') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 12);
                investsumm = investsumm + (investsumm_var * 12);
                expenditure = expenditure + (expenditure_var * 12);
                addincome = addincome + (addincome_var * 12);
                salary = salary + (salary_var * 12);
                costleasing = costleasing + (costleasing_var * 12);
                
                room = room + (room_var * 12);
                pczone = pczone + (pczone_var * 12);
                loungezone = loungezone + (loungezone_var * 12);
                admin = admin + (admin_var * 12);
                other = other + (other_var * 12);
                
                paybackValue = '11 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '8 месяцев';
                }
            }
            if(quantityValue == '85') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 13);
                investsumm = investsumm + (investsumm_var * 13);
                expenditure = expenditure + (expenditure_var * 13);
                addincome = addincome + (addincome_var * 13);
                salary = salary + (salary_var * 13);
                costleasing = costleasing + (costleasing_var * 13);
                
                room = room + (room_var * 13);
                pczone = pczone + (pczone_var * 13);
                loungezone = loungezone + (loungezone_var * 13);
                admin = admin + (admin_var * 13);
                other = other + (other_var * 13);
                
                paybackValue = '11 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '8 месяцев';
                }
            }
            if(quantityValue == '90') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 14);
                investsumm = investsumm + (investsumm_var * 14);
                expenditure = expenditure + (expenditure_var * 14);
                addincome = addincome + (addincome_var * 14);
                salary = salary + (salary_var * 14);
                costleasing = costleasing + (costleasing_var * 14);
                
                room = room + (room_var * 14);
                pczone = pczone + (pczone_var * 14);
                loungezone = loungezone + (loungezone_var * 14);
                admin = admin + (admin_var * 14);
                other = other + (other_var * 14);
                
                paybackValue = '11 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '8 месяцев';
                }
            }
            if(quantityValue == '95') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 15);
                investsumm = investsumm + (investsumm_var * 15);
                expenditure = expenditure + (expenditure_var * 15);
                addincome = addincome + (addincome_var * 15);
                salary = salary + (salary_var * 15);
                costleasing = costleasing + (costleasing_var * 15);
                
                room = room + (room_var * 15);
                pczone = pczone + (pczone_var * 15);
                loungezone = loungezone + (loungezone_var * 15);
                admin = admin + (admin_var * 15);
                other = other + (other_var * 15);
                
                paybackValue = '11 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '8 месяцев';
                }
            }
            if(quantityValue == '100') {
                investpc = investpc;
                investlounge = investlounge + (investlounge_var * 16);
                investsumm = investsumm + (investsumm_var * 16);
                expenditure = expenditure + (expenditure_var * 16);
                addincome = addincome + (addincome_var * 16);
                salary = salary + (salary_var * 16);
                costleasing = costleasing + (costleasing_var * 16);
                
                room = room + (room_var * 16);
                pczone = pczone + (pczone_var * 16);
                loungezone = loungezone + (loungezone_var * 16);
                admin = admin + (admin_var * 16);
                other = other + (other_var * 16);
                
                paybackValue = '11 месяцев';
                if(leasingscheck.checked === true) {
                    paybackValue = '8 месяцев';
                }
            }
            
            if(quantityValue >= '25') {
                // paybackValue = '14 месяцев';
            }
            if(quantityValue >= '40') {
                // paybackValue = '16 месяцев';
            }
            if(quantityValue >= '60') {
                // paybackValue = '18 месяцев';
            }
            if(quantityValue >= '80') {
                // paybackValue = '20 месяцев';
            }
            if(quantityValue >= '95') {
                // paybackValue = '24 месяца';
            }
            
            ///// ФОРМУЛЫ /////
            
            if(leasingscheck.checked === true) {
                pczone = pczone * 0.15
                investlounge = investlounge * 0.15
                loungezone = loungezone * 0.15
            }
            
            // Доход от ПК в месяц при полной загрузке
            let income100 = quantityValue * costhour * hours * days;
            // Средняя выручка в месяц
            let revenue_month = income100 * (workload / 100) + addincome
            
            // Прибыль в месяц
            let profit_month = revenue_month - expenditure;
            // Формула получения общей суммы инвестиций
            let investfull = investsumm + pczone + investlounge;
            let investfull2 = investsumm + pczone + investlounge;
            
            if(leasingscheck.checked === true) {
                profit_month = profit_month - costleasing;
            }
            
            // Получение прочих расходов
            let expenses = investfull2 - (salary);
            
            // Получение процентов
            let salary_percent = MyRound10(salary / investfull2 * 100);
            let expenses_percent = MyRound10(expenses / investfull2 * 100);
            
            let payment_percent = MyRound10(payment / investfull2 * 100);
            let room_percent = MyRound10(room / investfull2 * 100);
            let pczone_percent = MyRound10(pczone / investfull * 100);
            let loungezone_percent = MyRound10(loungezone / investfull * 100);
            let admin_percent = MyRound10(admin / investfull2 * 100);
            let other_percent = MyRound10(other / investfull2 * 100);
            
            ///// END ФОРМУЛЫ /////

setTimeout(function() {
// Сумма инвестиций
if(document.querySelector('#investmentResult')) {
    document.querySelector('#investmentResult').innerHTML = new Intl.NumberFormat(''+ NumberFormats +'').format(((investfull / dailyvalue) * dailynominal).toFixed()) + ' <span class="currency">'+ currency +'</div>';
}
// Выручка 
if(document.querySelector('#revenueResult')) {
    document.querySelector('#revenueResult').innerHTML = new Intl.NumberFormat(''+ NumberFormats +'').format(((revenue_month / dailyvalue) * dailynominal).toFixed()) + ' <span class="currency">'+ currency +'</div>';
}
// Прибыль  
if(document.querySelector('#profitResult')) {
    document.querySelector('#profitResult').innerHTML = new Intl.NumberFormat(''+ NumberFormats +'').format(((profit_month / dailyvalue) * dailynominal).toFixed()) + ' <span class="currency">'+ currency +'</div>';
}
if(document.querySelector('#paybackResult')) {
    document.querySelector('#paybackResult').innerHTML = paybackValue;
}
if(document.querySelector('#dateResult')) {
    document.querySelector('#dateResult').innerHTML = profit_date;
}
    
}, 200);            

document.querySelector('.invest_number_2 .tn-atom').innerHTML = new Intl.NumberFormat(''+ NumberFormats +'').format(((room / dailyvalue) * dailynominal).toFixed()) + ' <span class="currency">'+ currency +'</div>';
document.querySelector('.invest_percent_2 .tn-atom').innerHTML = '(' + room_percent + '%)';
document.querySelector('.invest_diagram_2').style.paddingTop = (80 - room_percent) * (1 / 100) * 110 + 'px';

document.querySelector('.invest_number_3 .tn-atom').innerHTML = new Intl.NumberFormat(''+ NumberFormats +'').format(((pczone / dailyvalue) * dailynominal).toFixed()) + ' <span class="currency">'+ currency +'</div>';
document.querySelector('.invest_percent_3 .tn-atom').innerHTML = '(' + pczone_percent + '%)';
document.querySelector('.invest_diagram_3').style.paddingTop = (80 - pczone_percent) * (1 / 100) * 110 + 'px';

document.querySelector('.invest_number_4 .tn-atom').innerHTML = new Intl.NumberFormat(''+ NumberFormats +'').format(((loungezone / dailyvalue) * dailynominal).toFixed()) + ' <span class="currency">'+ currency +'</div>';
document.querySelector('.invest_percent_4 .tn-atom').innerHTML = '(' + loungezone_percent + '%)';
document.querySelector('.invest_diagram_4').style.paddingTop = (80 - loungezone_percent) * (1 / 100) * 110 + 'px';

document.querySelector('.invest_number_5 .tn-atom').innerHTML = new Intl.NumberFormat(''+ NumberFormats +'').format(((admin / dailyvalue) * dailynominal).toFixed()) + ' <span class="currency">'+ currency +'</div>';
document.querySelector('.invest_percent_5 .tn-atom').innerHTML = '(' + admin_percent + '%)';
document.querySelector('.invest_diagram_5').style.paddingTop = (80 - admin_percent) * (1 / 100) * 110 + 'px';

document.querySelector('.invest_number_6 .tn-atom').innerHTML = new Intl.NumberFormat(''+ NumberFormats +'').format(((other / dailyvalue) * dailynominal).toFixed()) + ' <span class="currency">'+ currency +'</div>';
document.querySelector('.invest_percent_6 .tn-atom').innerHTML = '(' + other_percent + '%)';
document.querySelector('.invest_diagram_6').style.paddingTop = (80 - other_percent) * (1 / 100) * 110 + 'px';

        setTimeout(function () {
                if(document.querySelector('.range-813400851-1728419670561')) {
                    document.querySelector('.range-813400851-1728419670561').remove();
                }
            }, 200);

    });
    observer.observe(document.querySelector(".hero_form .tn-atom__form"), {
        attributes: true,
        childList: true,
        subtree: true,
        characterDataOldValue: true
    });
}, 700);
})
  
  if ('loading' in HTMLIFrameElement.prototype) {
      setTimeout(function () {
        const iframes = document.querySelectorAll('iframe[loading="lazy"]');
    
        iframes.forEach(iframe => {
          iframe.src = iframe.dataset.src;
        });
      }, 100);

  }
  
    document.addEventListener('DOMContentLoaded', function () {
	/* Header Sticky */
	let headerContainer = document.querySelector('#rec826425369 .t396__artboard')
	if (headerContainer) {
		let sticky = headerContainer.offsetTop + 40
		document.addEventListener('scroll', scrollMenu)
		function scrollMenu() {
			if (window.scrollY > sticky) {
				headerContainer.classList.add('sticky')
			} else {
				headerContainer.classList.remove('sticky')
			}
		}
	}
  });
