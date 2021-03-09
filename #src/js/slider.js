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
            infinite: true,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            draggable: true,
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
        fixedContentPos: true,
        closeOnBgClick: true,
        alignTop: false,
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});
}