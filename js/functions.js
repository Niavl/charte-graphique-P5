/* ============================================================
 NAO <Nos amis les oiseaux> Javascript function
 @author    JÃ©rÃ©my Bouhour <csfrance_noob@hotmail.fr>
 ==================================================================*/
(function($){
    $(function(){

        /* ==================================================
         IOS COMPATIBILITY
         ===========================================================*/
        /*var _iOSDevice = !!navigator.platform.match(/iPhone|iPod|iPad/);*/

        /**
         * safari on iOS >= 9 ignore user-scalable meta
         */
        document.documentElement.addEventListener('touchstart', function (event) {
            if (event.touches.length > 1) { event.preventDefault(); }
        }, false);

        /**
         * Safari mobile know the true height of elements
         * Only when page is loading
         */
        /*if(_iOSDevice){
            $(window).on('load',function() {
                fixContainerPosition();
            });
        }*/
        /* ==================================================
         NAVIGATION
         ===========================================================*/
        var buttonCollapse      = $('.button-collapse');
        var scrollTo            = $('.scroll-to');
        var scrollTop           = $('#scroll-top');
        var header              = $('header');
        var navbar              = $('nav');
        var subSearch           = $('#sub-search');
        var dropdownControl     = $('.dropdown-button');
        var navLogo             = $('#nav-logo');
        var to_top_offset       = 40;

        _init_navigation();

        /**
         * Let's init navigation system
         * @private
         */
        function _init_navigation(){

            // side menu
            buttonCollapse.sideNav();

            // Load navigation style
            switchNavigationStyle($(this).scrollTop());

            // Dropdown
            dropdownControl.dropdown({
                constrainWidth: false,
                belowOrigin: true
            });
        }

        /**
         * Go to anchor, he will be apply to all 'scroll-to" class
         */
        scrollTo.on('click', function(event) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: $( $(this).attr('href') ).offset().top - 70
            }, 700)
        });

        /**
         * the navigation style changes when the user scrolls through the page
         */
        $(window).scroll(function(){
            switchNavigationStyle($(this).scrollTop());
            return false;
         });

        /**
         * Switch heading and navigation style
         * @param scroll
         */
        function switchNavigationStyle(scroll){

            /*if(header.hasClass('full-height')){
                navLogo.hide();
                if(!header.children('div').hasClass('navbar-fixed')){
                    header.children('div').removeClass('navbar').addClass('navbar-fixed');
                }
            }*/

            if(header.hasClass('collapse')){

            }else{
                if(scroll > to_top_offset ){
                    navbar.addClass('sticky');
                }else{
                    navbar.removeClass('sticky');
                }
            }
        }

        /**
         * Prevents search dropdown from disappearing
         */
        subSearch.on('click', function(event){
            event.stopPropagation();
        });

        /**
         * Scroll to the top of page
         */
        scrollTop.on('click', function(event){
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop : 0
            },700);
        });



        /* ==================================================
         NAVIGATION
         ===========================================================*/
        /*var navMainTitle          = $('header .nav-content .nav-title');
        var buttonCollapse        = $('.button-collapse');
        var container             = $('.container');
        var header                = $('header');
        var to_top_offset         = 40;
        var offsetToTop           = $(this).scrollTop();*/

        /**
         * let's ini some elements
         */
        /*fixContainerPosition();
        switchNavigationStyle(offsetToTop);*/

        /**
         * Change margin-top container to keep container
         * position after fixed header
         */
        /*function fixContainerPosition(addToOffset){
            var offset = addToOffset  ? header.height() + to_top_offset : header.height();
            container.css('margin-top', offset + 'px');
        }*/

        /**
         * Switch header and navigation style
         * @param scroll
         */
        /*function switchNavigationStyle(scroll){
            if(scroll > to_top_offset ){
                header.addClass('sticky');
                navMainTitle.slideUp('fast', 'linear', function(){
                    fixContainerPosition(true);
                });
            } else{
                header.removeClass('sticky');
                navMainTitle.slideDown('fast', 'linear', function(){
                    fixContainerPosition();
                });
            }
        }*/

        /**
         * the navigation style changes when the user scrolls through the page
         */
          /*$(window).scroll(function(){
              switchNavigationStyle($(this).scrollTop());
              return false;
          });*/


  });
})(jQuery);