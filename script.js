$(document).ready(function () {
    // const nav_list = $('body > div.container_1 > div.header > div.nav > div');
    // const nav_list_1 = $('body > div.container_1 > div.header > div.nav > div > li:nth-child(1)');
    // const nav_list_2 = $('body > div.container_1 > div.header > div.nav > div > li:nth-child(2)');
    // const nav_list_3 = $('body > div.container_1 > div.header > div.nav > div > li:nth-child(3)');
    // $(window).scroll(function () {
    //     if ($(document).scrollTop() >= 425) {
    //         nav_list.css('position', 'fixed');
    //         nav_list.css('top', '0');
    //         nav_list.css('left', '0');
    //         nav_list.css('margin', '0');
    //         nav_list.css('border', 'none');
    //         nav_list.css('width', '100%');
    //         nav_list_1.css('border-radius', '0');
    //         nav_list_3.css('border-radius', '0');
    //     } else {
    //         nav_list.css('position', 'static');
    //         nav_list.css('margin', '40px auto');
    //         nav_list.css('border', '2px solid black');
    //         nav_list.css('width', '70%');
    //         nav_list_1.css('border-top-right-radius', '0');
    //         nav_list_1.css('border-bottom-right-radius', '0');
    //         nav_list_3.css('border-top-left-radius', '0');
    //         nav_list_3.css('border-bottom-left-radius', '0');
    //     }
    //     if (425 <= $(document).scrollTop() && $(document).scrollTop() < 1089) {
    //         nav_list_1.css('background-color', '#333030');
    //         nav_list_2.css('background-color', 'white');
    //         nav_list_3.css('background-color', 'white');
    //     } else if (1089 <= $(document).scrollTop() && $(document).scrollTop() < 2178) {
    //         nav_list_1.css('background-color', 'white');
    //         nav_list_2.css('background-color', '#333030');
    //         nav_list_3.css('background-color', 'white');
    //     } else if (2178 <= $(document).scrollTop() && $(document).scrollTop() < 3267) {
    //         nav_list_1.css('background-color', 'white');
    //         nav_list_2.css('background-color', 'white');
    //         nav_list_3.css('background-color', '#333030');
    //     }
    // });

    $('body > div.container_1 > div.header > div.nav > div > li:nth-child(1)').click(() => {
        $('body').animate(
            {
                scrollTop: $('.container_2').offset().top,
            },
            500
        );
    });
    $('body > div.container_1 > div.header > div.nav > div > li:nth-child(2)').click(() => {
        $('body').animate(
            {
                scrollTop: $('.container_3').offset().top,
            },
            500
        );
    });
    $('body > div.container_1 > div.header > div.nav > div > li:nth-child(3)').click(() => {
        $('body').animate(
            {
                scrollTop: $('.container_4').offset().top,
            },
            500
        );
    });
    // $('.container_1').on('mousewheel', () => {
    //     $('body').animate(
    //         {
    //             scrollTop: $('.container_2').offset().top,
    //         },
    //         500
    //     );
    // });
});
