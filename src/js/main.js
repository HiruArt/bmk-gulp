$(document).ready(function(){

  // checking browser for WEBP
  hasWebP().then(function () {
    $('.webp-img').each(function () {
      var webp = $(this).data('webp');
      $(this).attr('data-blazy', webp);
    });
  }, function () {
    $('.webp-img').each(function () {
      var img = $(this).data('img');
      $(this).attr('data-blazy',  img );
    });
  });

  var viedoLoadFlag = true;
  var videoSrc = $('#videSrc').attr('data-video');

  $('.first-block__video-link').click(function(e){
    if(viedoLoadFlag) {
      $('.youtube-video').attr('data-blazy', videoSrc);
      $('.youtube-video').addClass('b-lazy');
      viedoLoadFlag = false;
    }

    $('.video').addClass('open');
    setTimeout(function () {
      var bLazy = new Blazy({
        src: 'data-blazy'
      });
    }, 200);
  });

  $('.video__close').click(function (e) {
    $('.video').removeClass('open');
    $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  });

  $(document).on('click', '.video', function (e) {
    if(e.target.classList[0] == 'video'){
      $('.video').removeClass('open');
      $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    }
  });

  $('.key__item-btn-more').click(function (e) {
    $(this).siblings('.key__item-txt').addClass('show');
    $(this).addClass('hide');
  });

  setTimeout(function () {
    var bLazy = new Blazy({
      src: 'data-blazy'
    });
  }, 200);

  var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

  window.addEventListener(orientationEvent, function() {
    var bLazy = new Blazy({
      src: 'data-blazy'
    });
  }, false);

  function bodyOverwlow () {
  	$('body').addClass('over-hidden');
	}

	function bodyOverwlowRemove () {
		$('body').removeClass('over-hidden');
	}


	$('.popup__close').click(function (e) {
		$('.popup').removeClass('open');
		bodyOverwlowRemove();
	});

	$(document).on('click', '.popup__content', function (e) {
		if(e.target.classList[0] == 'popup__content'){
			bodyOverwlowRemove();
			$('.popup').removeClass('open');
		}
	});

  $('.info-block__btn--powerpoint-presentation').click(function () {
		bodyOverwlow();
		$('.popup.powerpoint-presentation').addClass('open')
		setTimeout(function () {
			var bLazy = new Blazy({
				src: 'data-blazy'
			});
		}, 200);
	});

	$('.info-block__btn--business-card').click(function () {
		bodyOverwlow();
		$('.popup.business-card').addClass('open')
		setTimeout(function () {
			var bLazy = new Blazy({
				src: 'data-blazy'
			});
		}, 200);
	});

	$('.info-block__btn--professional-brochure').click(function () {
		bodyOverwlow();
		$('.popup.professional-brochure').addClass('open')
		setTimeout(function () {
			var bLazy = new Blazy({
				src: 'data-blazy'
			});
		}, 200);
	});

  $('.info-block__btn--creative-logo').click(function () {
		bodyOverwlow();
		$('.popup.creative-logo').addClass('open')
		setTimeout(function () {
			var bLazy = new Blazy({
				src: 'data-blazy'
			});4
		}, 200);
	});

  $('.info-block__btn--flyers').click(function () {
		bodyOverwlow();
		$('.popup.flyers').addClass('open')
		setTimeout(function () {
			var bLazy = new Blazy({
				src: 'data-blazy'
			});
		}, 200);
	});

  $('.info-block__btn--stationary').click(function () {
		bodyOverwlow();
		$('.popup.stationary').addClass('open')
		setTimeout(function () {
			var bLazy = new Blazy({
				src: 'data-blazy'
			});
		}, 200);
	});


  $('.info-block__btn--greeting-cards').click(function () {
		bodyOverwlow();
		$('.popup.greeting-cards').addClass('open')
		setTimeout(function () {
			var bLazy = new Blazy({
				src: 'data-blazy'
			});
		}, 200);
	});


  $('.info-block__btn--social-media-covers').click(function () {
		bodyOverwlow();
		$('.popup.social-media-covers').addClass('open')
		setTimeout(function () {
			var bLazy = new Blazy({
				src: 'data-blazy'
			});
		}, 200);
	});

  $('.info-block__btn--web-banners').click(function () {
		bodyOverwlow();
		$('.popup.web-banners').addClass('open')
		setTimeout(function () {
			var bLazy = new Blazy({
				src: 'data-blazy'
			});
		}, 200);
	});


  $('.info-block__btn--coupons-discounts').click(function () {
		bodyOverwlow();
		$('.popup.coupons-discounts').addClass('open')
		setTimeout(function () {
			var bLazy = new Blazy({
				src: 'data-blazy'
			});
		}, 200);
	});

  $(document).on('click', '.header__menu-btn', function (e) {
		$('.header__right').toggleClass('open');
		$('body').toggleClass('over-hidden');
	});

	$(document).on('click', '.header__right ', function (e) {
		console.log(e.target.classList[0]);
		if(e.target.classList[0] == 'header__right'){
			$('.header__right ').removeClass('open');
		}
	});


	$('.popup__content').on('scroll', function() {
		console.log('scroll!');
		var bLazy = new Blazy({
			src: 'data-blazy'
		});
	});

	$(document).on("click","a.profit__btn", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			  top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 5000);
	});



});


//script fro webp img and background
var hasWebP = (function () {
  // some small (2x1 px) test images for each feature
  var images = {
    basic: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",
    lossless: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="
  };

  return function (feature) {
    var deferred = $.Deferred();

    $("<img>").on("load", function () {
      // the images should have these dimensions
      if (this.width === 2 && this.height === 1) {
        deferred.resolve();
      } else {
        deferred.reject();
      }
    }).on("error", function () {
      deferred.reject();
    }).attr("src", images[feature || "basic"]);

    return deferred.promise();
  }
})();

/* with date end time
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}


function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector(".days");
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");

    function updateClock() {
        var t = getTimeRemaining(endtime);

        if (t.total <= 0) {
            document.getElementById("countdown").className = "clock-block__item-content clock-block--dedline";
            document.getElementById("countdown1").className = "clock-block__item-content clock-block--dedline";
            clearInterval(timeinterval);
            return true;
        }

        daysSpan.innerHTML = ("0" + t.days);
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}
  var deadline="March 24 2020 18:00:00 GMT+0200";
  initializeClock("countdown", deadline);
  initializeClock("countdown1", deadline);*/


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = ('0' + t.days);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(new Date()) + 2 * 24  * 60 * 60 * 1000);
      initializeClock('countdown', deadline);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
