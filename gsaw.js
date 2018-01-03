$(document).ready(function() {

	/* 
	 * ------------------------
	 * ---- HOVER EFFECTS -----
	 * ------------------------
	*/ 

	/* 
	 * ------------------------
	 * 2D Transformations
	 * ------------------------
	*/ 

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
					.to(this, time, {skewX: 10,  ease: Sine.easeOut } )
					.to(this, time, {skewX: -7,  ease: Sine.easeOut } )
					.to(this, time, {skewX: 5,   ease: Sine.easeOut } )
					.to(this, time, {skewX: -3,  ease: Sine.easeOut } )
					.to(this, time, {skewX: 1,   ease: Sine.easeOut } )
					.to(this, time, {skewX: 0,   ease: Sine.easeOut } )
		animation.restart();		
	});

	/*
	 * Wobble-skew-top effect for elements having class="gsaw-wobble-skew-top"
	*/
	$('.gsaw-wobble-skew-top').on("mouseenter", function(event) {
		var config = config || {};
		var time = config.time != null ? config.time : 0.14;
		var origin = "center bottom";
		var animation = new TimelineLite({paused: true});
		animation 	.to(this, time, {skewX: -15, transformOrigin: origin,  ease: Sine.easeOut } )
					.to(this, time, {skewX: 10,  transformOrigin: origin,  ease: Sine.easeOut } )
					.to(this, time, {skewX: -7,  transformOrigin: origin,  ease: Sine.easeOut } )
					.to(this, time, {skewX: 5,   transformOrigin: origin,  ease: Sine.easeOut } )
					.to(this, time, {skewX: -3,  transformOrigin: origin,  ease: Sine.easeOut } )
					.to(this, time, {skewX: 1,   transformOrigin: origin,  ease: Sine.easeOut } )
					.to(this, time, {skewX: 0,   transformOrigin: origin,  ease: Sine.easeOut } )
		animation.restart();		
	});

	/*
	 * Wobble-skew-bottom effect for elements having class="gsaw-wobble-skew-bottom"
	*/
	$('.gsaw-wobble-skew-bottom').on("mouseenter", function(event) {
		var config = config || {};
		var time = config.time != null ? config.time : 0.14;
		var origin = "center top";
		var animation = new TimelineLite({paused: true});
		animation 	.to(this, time, {skewX: -15, transformOrigin: origin,  ease: Sine.easeOut } )
					.to(this, time, {skewX: 10,  transformOrigin: origin,  ease: Sine.easeOut } )
					.to(this, time, {skewX: -7,  transformOrigin: origin,  ease: Sine.easeOut } )
					.to(this, time, {skewX: 5,   transformOrigin: origin,  ease: Sine.easeOut } )
					.to(this, time, {skewX: -3,  transformOrigin: origin,  ease: Sine.easeOut } )
					.to(this, time, {skewX: 1,   transformOrigin: origin,  ease: Sine.easeOut } )
					.to(this, time, {skewX: 0,   transformOrigin: origin,  ease: Sine.easeOut } )
		animation.restart();		
	});


	/*
	 * Wobble-horizontal effect for elements having class="gsaw-wobble-horizontal"
	*/
	$('.gsaw-wobble-horizontal').on("mouseenter", function(event) {	
		var config = config || {};
		var time = config.time != null ? config.time : 0.14;
		var animation = new TimelineLite({paused: true});
		animation 	.to(this, time, {x: 10, ease: Sine.easeOut } )
					.to(this, time, {x: -7, ease: Sine.easeOut } )
					.to(this, time, {x: 4,  ease: Sine.easeOut } )
					.to(this, time, {x: -1, ease: Sine.easeOut } )
					.to(this, time, {x: 0,  ease: Sine.easeOut } )
		animation.restart();		
	});

	/*
	 * Wobble-vertical effect for elements having class="gsaw-wobble-vertical"
	*/
	$('.gsaw-wobble-vertical').on("mouseenter", function(event) {	
		var config = config || {};
		var time = config.time != null ? config.time : 0.14;
		var animation = new TimelineLite({paused: true});
		animation 	.to(this, time, {y: 10, ease: Sine.easeOut } )
					.to(this, time, {y: -7, ease: Sine.easeOut } )
					.to(this, time, {y: 4,  ease: Sine.easeOut } )
					.to(this, time, {y: -1, ease: Sine.easeOut } )
					.to(this, time, {y: 0,  ease: Sine.easeOut } )
		animation.restart();		
	});

	/* 
	 * ------------------------
	 * 3D Transformations
	 * ------------------------
	*/ 

	/*
	 * Rotate-x effect for elements having class="gsaw-rotate-x"
	*/
	$('.gsaw-rotate-x').on("mouseenter", function(event) {	
		var config = config || {};
		var time = config.time != null ? config.time : 0.3;
		var transformPerspective = time * 1000;
		var animation = new TimelineLite({paused: true});
		animation 	.to(this, time, {transformPerspective: transformPerspective, rotationX: -38, transformOrigin: "center top center", ease: Sine.easeOut } )
					.to(this, time, {transformPerspective: transformPerspective, rotationX: 32, transformOrigin: "center top center", ease: Sine.easeOut } )
					.to(this, time, {transformPerspective: transformPerspective, rotationX: -19, transformOrigin: "center top center", ease: Sine.easeOut } )
					.to(this, time, {transformPerspective: transformPerspective, rotationX: 12, transformOrigin: "center top center", ease: Sine.easeOut } )
					.to(this, time, {transformPerspective: transformPerspective, rotationX: -6, transformOrigin: "center top center", ease: Sine.easeOut } )
					.to(this, time, {transformPerspective: transformPerspective, rotationX: 3, transformOrigin: "center top center", ease: Sine.easeOut } )
					.to(this, time, {transformPerspective: transformPerspective, rotationX: 0, transformOrigin: "center top center", ease: Sine.easeOut } )
		animation.restart();		
	});

	/*
	 * Rotate-y effect for elements having class="gsaw-rotate-y"
	*/
	$('.gsaw-rotate-y').on("mouseenter", function(event) {	
		var config = config || {};
		var time = config.time != null ? config.time : 0.3;
		var transformPerspective = time * 1000;
		var animation = new TimelineLite({paused: true});
		animation 	.to(this, time, {transformPerspective: transformPerspective, rotationY: 38, transformOrigin: "left center center", ease: Sine.easeOut } )
					.to(this, time, {transformPerspective: transformPerspective, rotationY: -32, transformOrigin: "left center center", ease: Sine.easeOut } )
					.to(this, time, {transformPerspective: transformPerspective, rotationY: 19, transformOrigin: "left center center", ease: Sine.easeOut } )
					.to(this, time, {transformPerspective: transformPerspective, rotationY: -12, transformOrigin: "left center center", ease: Sine.easeOut } )
					.to(this, time, {transformPerspective: transformPerspective, rotationY: 6, transformOrigin: "left center center", ease: Sine.easeOut } )
					.to(this, time, {transformPerspective: transformPerspective, rotationY: -3, transformOrigin: "left center center", ease: Sine.easeOut } )
					.to(this, time, {transformPerspective: transformPerspective, rotationY: 0, transformOrigin: "left center center", ease: Sine.easeOut } )
		animation.restart();		
	});

});