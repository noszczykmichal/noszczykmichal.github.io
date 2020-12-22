$(function () {
    //form validation

    $('.form-control[type="submit"]').click(function (event) {
        //grabbing all inputs of type: text, email and tel
        const inputVal = $('.form-control[type="text"],[type="email"], [type="tel"]');

        inputVal.each(function () {
            if ($(this).val().trim() == "") {
                //getting the old value of input's placeholder
                const placeholderVal = $(this).attr('placeholder');
                //changing placeholder's color and value for inputs that after use of trim turn out to be empty
                $(this).addClass('invalidValueChrome invalidValueIE10_11 invalidValueEdge').attr('placeholder', 'Uzupełnij pole: ' + placeholderVal);
                event.preventDefault()
            }
        })
    })

    //launching of the counters bound with a scroll event + code for the counters animation

    $(document).bind('scroll', function (event) {
        let scrollOffset = $(document).scrollTop();
        let containerOffset = $('.counter').offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            $('.counter-count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            $(document).unbind('scroll');
        }
    });


    //options for the request to the api
    let newError = null;

    const settings = {
        'async': true,
        'crossDomain': true,
        'url': 'https://bloomberg-market-and-financial-news.p.rapidapi.com/market/get-cross-currencies?id=chf%252Ceur%252Cgbp%252Cpln%252Cusd',
        'method': 'GET',
        'headers': {
            'x-rapidapi-host': 'bloomberg-market-and-financial-news.p.rapidapi.com',
            'x-rapidapi-key': 'ba18d7ebc0msh4cd6e446bb748d3p1d8e2djsna317ec0460a1'
        },
        'error': function (error) {
            newError = error.status;
            // console.log('error: ', error)
        }
    }

    function requestToApi() {

        $.ajax(settings).done(function (response) {
            const eur = response.result['eurpln:cur'];
            const usd = response.result['usdpln:cur'];
            const chf = response.result['chfpln:cur'];
            const gbp = response.result['gbppln:cur'];
            
            if(response){
                $('.preloader').addClass('preloaderDispNone');
            }
            
            //an array created from the response for a given currency

            const currencies = [eur, usd, chf, gbp];

            //setting text for the element with value of the last quotes

            $('.quote').each(function (index) {
                $(this).text(currencies[index].last);
            })

            //setting the date of the last quote
            $('.date').each(function (index) {
                const date = new Date(currencies[index].lastPriceTime * 1000);
                if (date.getUTCDate() < 10) {
                    $(this).text('0' + date.getUTCDate() + '-' + (date.getUTCMonth() + 1));
                } else {
                    $(this).text(date.getUTCDate() + '-' + (date.getUTCMonth() + 1));
                }

            })

            //setting the percentage change for a given currency

            $('.pctChange').each(function (index) {
                const pctChange = parseFloat(currencies[index].pctChange);

                if (pctChange < 0) {
                    $(this).css('color', 'red').text(pctChange + '%');
                } else if (pctChange == 0) {
                    $(this).css('color', 'black').text(pctChange + '%');
                } else {
                    $(this).css('color', 'green').text(pctChange + '%');
                }
            })

        });
    }        

        //error handling and showing to the user messages depending on the context and error status

        if (newError == 429) {
            $('.backdrop').addClass('backdropVisible');

            function convertMiliseconds() {
                //current date
                let currentDate = new Date();

                //creating a date object with time set to the renewal of the api subscription
                let subscripDate = new Date();
                subscripDate.setDate(10)
                subscripDate.setHours(20) //subscription renews every tenth day of the month on 19:53 UTC which means according to Poland's local time zone is 20:53
                subscripDate.setMinutes(53);
                subscripDate.setSeconds(0);
                subscripDate.setMilliseconds(0);
                
                 // checking if we have not run out of quotes in the present month; if present day of month is after tenth of month and we get error status '429' it means we run out of quotes for the present month and next quotes will be available on tenth day of the next month at 19:53 UTC; 
                if(currentDate.getDate()>=10){
                subscripDate.setMonth(subscripDate.getMonth()+1);//according to above, for the counter to display the proper time to subscription renewal we need to add 1 month to the present date
                }
                
                //calculating how many milliseconds are there left to the renewal of subscription
                let milliseconds = subscripDate - currentDate;

                let days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

                //calculating the total number of seconds that left to the renewal of subscription/// tutaj skończyłem zrobić tylko commit + dorzucić poprawioną wersję na GH Pages
                total_seconds = parseInt(Math.floor(milliseconds / 1000));
                //minutes that left
                total_minutes = parseInt(Math.floor(total_seconds / 60));
                //hours that left
                total_hours = parseInt(Math.floor(total_minutes / 60));
                //days that left
                days = parseInt(Math.floor(total_hours / 24));


                seconds = parseInt(total_seconds % 60);
                minutes = parseInt(total_minutes % 60);
                hours = parseInt(total_hours % 24);

                let newText = `Aktualne kursy zostaną pobrane za: </br>
                ${days} d. ${hours} godz. ${minutes} min. i ${seconds} sek.`;

                $('.backdropInfo').text('Przepraszamy za utrudnienia, wyczerpaliśmy limit zapytań na serwer.');

                $('.backdropDisplay').html(newText);
            }

            setInterval(convertMiliseconds, 1000)

            //in case error status isn't 429(Too many request), the default message should appear

        } else if (newError !== null && newError !== 429) {
            $('.preloader').addClass('preloaderDispNone');
            $('.backdrop').addClass('backdropVisible');
            $('.backdropInfo').text('Przepraszamy, coś poszło nie tak...')
        }
    

    setInterval(requestToApi, 8000);

})




