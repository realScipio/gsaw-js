$(document).ready(function() {

	/*
	 * Grow effect for elements having class="gsaw-grow"
	*/
	$('.gsaw-grow').on("mouseenter", function(event) {
		var config = config || {};
		var time = config.time != null ? config.time : 0.3;
		var animation = TweenLite.to(this, time, { scale: 1.2, ease: Sine.easeOut, paused: true } );
		animation.play();

		$(this).on("mouseleave", function(event) {
			animation.reverse();
		});
	});

	/*
	 * Shrink effect for elements having class="gsaw-shrink"
	*/
	$('.gsaw-shrink').on("mouseenter", function(event) {
		var config = config || {};
		var time = config.time != null ? config.time : 0.3;
		var animation = TweenLite.to(this, time, { scale: 0.8, ease: Sine.easeOut, paused: true } );
		animation.play();

		$(this).on("mouseleave", function(event) {
			animation.reverse();
		});		
	});

	/*
	 * Swing effect for elements having class="gsaw-swing"
	*/
	$('.gsaw-swing').on("mouseenter", function(event) {
		var config = config || {};
		var time = config.time != null ? config.time : 0.14;
		var animation = new TimelineLite({paused: true});
		animation 	.to(this, time, {rotation: 15, ease: Sine.easeOut } )
					.to(this, time, {rotation: -12, ease: Sine.easeOut } )
					.to(this, time, {rotation: 9,  ease: Sine.easeOut } )
					.to(this, time, {rotation: -7, ease: Sine.easeOut } )
					.to(this, time, {rotation: 5,  ease: Sine.easeOut } )
					.to(this, time, {rotation: -2, ease: Sine.easeOut } )
					.to(this, time, {rotation: 1,  ease: Sine.easeOut } )
					.to(this, time, {rotation: 0,  ease: Sine.easeOut } )
		animation.restart();
	});

	/*
	 * Skew effect for elements having class="gsaw-skew"
	*/
	$('.gsaw-skew').on("mouseenter", function(event) {
		var config = config || {};
		var time = config.time != null ? config.time : 0.25;
		var animation = TweenLite.to(this, time, { skewX: -15, ease: Sine.easeOut, paused: true } );
		animation.play();

		$(this).on("mouseleave", function(event) {
			animation.reverse();
		});		
	});

	/*
	 * Wobble-skew effect for elements having class="gsaw-wobble-skew"
	*/
	$('.gsaw-wobble-skew').on("mouseenter", function(event) {
		var config = config || {};
		var time = config.time != null ? config.time : 0.14;
		var animation = new TimelineLite({paused: true});
		animation 	.to(this, time, {skewX: -15, ease: Sine.easeOut } )
					.to(this, time, {skewX: 10, ease: Sine.easeOut } )
					.to(this, time, {skewX: -7,  ease: Sine.easeOut } )
					.to(this, time, {skewX: 5, ease: Sine.easeOut } )
					.to(this, time, {skewX: -3,  ease: Sine.easeOut } )
					.to(this, time, {skewX: 1, ease: Sine.easeOut } )
					.to(this, time, {skewX: 0,  ease: Sine.easeOut } )
		animation.restart();		
	});
});