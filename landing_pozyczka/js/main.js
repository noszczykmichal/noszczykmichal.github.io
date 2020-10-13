$(function () {
    //launching of the counters bound with a scroll event + code for the counters animation

    $(document).bind('scroll', function (ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $('.counter').offset().top - window.innerHeight;
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

    // const settings = {
    //     'async': true,
    //     'crossDomain': true,
    //     'url': 'https://bloomberg-market-and-financial-news.p.rapidapi.com/market/get-cross-currencies?id=chf%252Ceur%252Cgbp%252Cpln%252Cusd',
    //     'method': 'GET',
    //     'headers': {
    //         'x-rapidapi-host': 'bloomberg-market-and-financial-news.p.rapidapi.com',
    //         'x-rapidapi-key': 'ba18d7ebc0msh4cd6e446bb748d3p1d8e2djsna317ec0460a1'
    //     }
    // }

    // $.ajax(settings).done(function (response) {
    //     const eur = response.result['eurpln:cur'];
    //     const usd = response.result['usdpln:cur'];
    //     const chf = response.result['chfpln:cur'];
    //     const gbp = response.result['gbppln:cur'];

    //     //an array created from the response for a given currency

    //     const currencies = [eur, usd, chf, gbp];

    //     //setting text for the element with value of the last quotes

    //     $('.quote').each(function (index) {
    //         $(this).text(currencies[index].last);
    //     })

    //     //setting the date of the last quote
    //     $('.date').each(function (index) {
    //         const date = new Date(currencies[index].lastPriceTime * 1000);
    //         if (date.getUTCDate() < 10) {
    //             $(this).text('0' + date.getUTCDate() + '-' + (date.getUTCMonth() + 1));
    //         } else {
    //             $(this).text(date.getUTCDate() + '-' + (date.getUTCMonth() + 1));
    //         }

    //     })

    //     //setting the percentage change for a given currency

    //     $('.pctChange').each(function (index) {
    //         const pctChange = parseFloat(currencies[index].pctChange);

    //         if (pctChange < 0) {
    //             $(this).css('color', 'red').text(pctChange + '%');
    //         } else if (pctChange == 0) {
    //             $(this).css('color', 'black').text(pctChange + '%');
    //         } else {
    //             $(this).css('color', 'green').text(pctChange + '%');
    //         }
    //     })

    // });

})




