$(document).ready(function () {
    /***************** Navbar-Collapse ******************/

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('body').scrollspy({target: ".navbar", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#topNav a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });

    /*****************  Typing Intro Init ******************/

    $(".typed").typed({
        strings: ["Family dentistry<br>We can save what others prefer to remove"],
        typeSpeed: 50
    });

    /***************** Page Scroll ******************/

    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    /***************** Scroll Spy ******************/

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })


    /***************** Full Width Slide ******************/

    var slideHeight = $(window).height();

    $('#owl-hero .item').css('height', 600);

    /***************** Owl Carousel Testimonials ******************/

    $("#owl-testi").owlCarousel({

        navigation: false, // Show next and prev buttons
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "fade",
        autoPlay: true

    });
    /***************** Countdown ******************/

    $('#stats').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });
    /***************** Google Map ******************/

    function initialize() {
        var mapCanvas = document.getElementById('map');
        var myLatlng = new google.maps.LatLng(50.378644, 30.368932);
        var mapOptions = {
            center: myLatlng,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            map: map,
            position: myLatlng,
            title:"Hello!"
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    /***************** Wow.js ******************/
    
    new WOW().init();


    /***************** pgwSlider ******************/

    $('.pgwSlideshow').pgwSlideshow({
        maxHeight: 500,
        displayControls: false,
        destroy: false
    });

    $( window ).resize(function() {

    });
    
    /***************** Preloader ******************/
    
    var preloader = $('.preloader');
    $(window).load(function () {
        preloader.remove();
    });
    /****************Info modal********************/
    $(function() {
        $('#info-btn').on('click', function( e ) {
            Custombox.open({
                target: '#modal',
                effect: 'corner'
            });
            e.preventDefault();
        });
    });

    /****************Slide menu********************/
    $('#slideMenu').BootSideMenu({side:"right"});
})
/****************Slide menu********************/
$(function ( $ ) {
    $.fn.BootSideMenu = function( options ) {

        var oldCode, newCode, side;
        newCode = "";
        var settings = $.extend({
            side:"left",
            autoClose:true
        }, options );
        side = settings.side;
        autoClose = settings.autoClose;

        this.addClass("containerSidebar sidebar sidebar-right");

        oldCode = this.html();
        newCode += "<div class=\"row\">\n";
        newCode += "	<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg1-12\" data-side=\""+side+"\">\n"+ oldCode+" </div>\n";
        newCode += "</div>";
        newCode += "<div class=\"toggler\">\n";
        newCode += "	<span>contacts</span>\n";
        newCode += "</div>\n";

        var wrapper = $(newCode);
        $.each(this.children(), function () {
            $('.panel-content', wrapper).append(this);
        });

        $(this).empty();
        $(this).append(wrapper);

        var container = document.getElementsByClassName('containerSidebar')[0];
        container.style.right = "-250px";
    };

    $(document).on('click','.toggler', function(){
        var toggler = $(this);
        var container = toggler.parent();
        var listaClassi = $(container[0]).attr('class').split(/\s+/); //IE9 Fix 
        var containerWidth = container.width();
        var status = container.attr('data-status');
        if(!status){
            status = "closed";
        }
        doAnimation(container, containerWidth, "right", status);
    });

    function doAnimation(container, containerWidth, sidebarSide, sidebarStatus){
        var toggler = container.children()[1];
        if(sidebarStatus=="opened"){
            if(sidebarSide=="right"){
                container.animate({
                    right:- (containerWidth +2)
                });
            }
            container.attr('data-status', 'closed');
        }else{
            if(sidebarSide=="right"){
                container.animate({
                    right:0
                });
            }
            container.attr('data-status', 'opened');
        }
    }
}( jQuery ));