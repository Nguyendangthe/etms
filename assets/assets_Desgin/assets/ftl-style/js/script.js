$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
    elems.forEach(function(html) {
      var switchery = new Switchery(html, { size: 'small', secondaryColor: '#ddd' });
    });
    function filePreview(input) {
    	if(input.files && input.files[0]) {
    		var reader = new FileReader();
    		reader.onload = function(e) {
    			$('.photo-content').attr('src', this.result);
    		}
    		reader.readAsDataURL(input.files[0]);
    	}
    }
    $('.dropdown-multi-select .dropdown-menu').click(function(e) {
        e.stopPropagation();
    });

    $(".dropdown-scroll").slimScroll({
        height: '150px',
        color: '#b3b3b3',
        size: '5px',
        distance: '5px',
        wheelStep: 5,
        allowPageScroll: true,
    });

    function toggleSearchSmallDevice() {
        $('.dropdown-search').on('click', function() {
            if(!$(this).hasClass('open')) {
                $('.page-search-block').addClass('visible-xs').removeClass('hidden-xs');
            } else {
                $('.page-search-block').addClass('hidden-xs').removeClass('visible-xs');
            }
        });
        $('.dropdown-user, .dropdown-notification, .dropdown-lang').on('click', function() {
            if(!$(this).hasClass('open')) {
                $('.page-search-block').addClass('hidden-xs').removeClass('visible-xs');
            }
        });
        $(document).on("click", function(e) {
            if (!$(e.target).is(".page-search-block *") && !$(e.target).is(".page-search-block")
                && !$(e.target).is(".dropdown-search") && !$(e.target).is(".dropdown-search *")) {
                $('.page-search-block').addClass('hidden-xs').removeClass('visible-xs');
            }
            if ($(e.target).is(".page-search-block *") || $(e.target).is(".page-search-block") ||
                $(e.target).is(".page-search-dropdown .dropdown-menu") || $(e.target).is(".page-search-dropdown .dropdown-menu *")) {
                $('.dropdown-search').addClass('open');
            }
        });
    }

    function changeLanguage() {
        $(document).on('click', '.lang-item', function(e) {
            e.preventDefault();
            var img_link = $(this).find('.menu-icon').children().attr("src");
            var lang_name = $(this).find('span').not('.menu-icon').text();
            var check_lang = $("<i class='fas fa-check lang-check'></i>")
            $('.dropdown-lang').find('.wrap-img-icon').children().attr("src", img_link);
            $('.dropdown-lang').find('.dropdown-toggle span').text(lang_name);
            $('.lang-check').remove();
            $(this).find('a').append(check_lang);
            $('.lang-item').removeClass('active')
            $(this).addClass("active");
        });
    }

    function fullScreen() {

        // open in fullscreen
        $('.fullscreen').click(function() {
            $('body').fullscreen();
            $(this).addClass("fullscreened");
            return false;
        });

        // exit fullscreen
        $(document).on('click', '.exitfullscreen', function() {
            $.fullscreen.close();
            return false;
        });

        $(document).on('keyup',function(evt) {
            if (evt.keyCode == 122) {
                $('.fullscreen').addClass('fullscreened');
            }
        });
        // document's event
        $(document).bind('fscreenchange', function(e, state, elem) {
            // if we currently in fullscreen mode
            if ($.fullscreen.isFullScreen()) {
                $('.fullscreen').hide();
                $('.exitfullscreen').show();
            } else {
                $('.fullscreen').show();
                $('.exitfullscreen').hide();
            }

            $('#state').text($.fullscreen.isFullScreen() ? '' : 'not');
        });
    }
    changeLanguage();
    fullScreen();
});
