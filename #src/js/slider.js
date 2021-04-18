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
            autoplay: true,
            autoplaySpeed: 3000,
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
		//tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [1,1]
		}
	});
}