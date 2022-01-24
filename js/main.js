$(function () {

    $('.tab').on('click', function (event) {
        event.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tab__wrapper').siblings()).removeClass('tabs__content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs__content--active');

    });

});