//setting number of containers for all the menus
$(function() {
				$('#starters').vaccordion({
					accordionH      : 400,
					accordionW      : 728,
					visibleSlices	: 5,
					expandedHeight	: 280,
					animOpacity		: 0.1,
					contentAnimSpeed: 100
				});
			});
			

$(function() {
				$('#soups').vaccordion({
					accordionH      : 320,
					accordionW      : 728,
					visibleSlices	: 4,
					expandedHeight	: 280,
					animOpacity		: 0.1,
					contentAnimSpeed: 100
				});
			});
			
			
$(function() {
				$('#entrees').vaccordion({
					accordionH      : 800,
					accordionW      : 728,
					visibleSlices	: 10,
					expandedHeight	: 280,
					animOpacity		: 0.1,
					contentAnimSpeed: 100
				});
			});
			
$(function() {
				$('#sushi').vaccordion({
					accordionH      : 640,
					accordionW      : 728,
					visibleSlices	: 8,
					expandedHeight	: 280,
					animOpacity		: 0.1,
					contentAnimSpeed: 100
				});
			});
//setting duration of carousel slides
$('.carousel').carousel({
  interval: 4500
});
