$(document).ready(function() {
    function tableCollpase() {
        if ($('.tableCollapse').length > 0) {
            $('.tableCollapse').children().children().each(function(i) {
                $('.parent-' + i).on('click', function() {
                    $('.child-' + i).toggle();
                    $('.parent-' + i).find('.fa').toggleClass('fa-arrow-circle-down fa-arrow-circle-up');
                });
            });
        }
    }

    tableCollpase();
});
