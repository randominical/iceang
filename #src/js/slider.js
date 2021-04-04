jQuery(function($){
    sliderCall.photoGallery();
    lightboxTrigger();
});
       
var sliderCall = {
    photoGallery: function() {
        var slider = $(".gallery-slider");
        slider.slick({
            dots: false,
            arrows: true,
            centerMode: true,
            infinite: true,
            //autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '15px'
                    }
                }
            ]
        });
    }
}

function lightboxTrigger() {
    $('.popup-gallery').magnificPopup({
		delegate: 'li a',
		type: 'image',
        image: {
            verticalFit: true,
        },
        fixedContentPos: true,
        closeOnBgClick: true,
        alignTop: false,
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
        overflowY: true,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [1,1]
		}
	});
}

/*
image: {
    markup: '<div class="mfp-figure">'+
              '<div class="mfp-close"></div>'+
              '<div class="mfp-img"></div>'+
              '<div class="mfp-bottom-bar">'+
                '<div class="mfp-title"></div>'+
                '<div class="mfp-counter"></div>'+
              '</div>'+
            '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
  
    cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.
  
    titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
    // Or the function that should return the title. For example:
    // titleSrc: function(item) {
    //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
    // }
  
    verticalFit: true, // Fits image in area vertically
  
    tError: '<a href="%url%">The image</a> could not be loaded.' */