$(window).scroll(function(event) {
	/* Act on the event */
	// console.log($(this).scrollTop());
	//Nếu top của window >= top của portfolio thì xuất hiện fixed menu
	if ($(this).scrollTop() >= $('#about').offset().top - 1) {
		$('.navbar').addClass('fixed-top');
		$('header').addClass('dummy-padding');
	}
	else {
		$('.navbar').removeClass('fixed-top');
		$('header').removeClass('dummy-padding');
	}
});

// count
$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 20);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});