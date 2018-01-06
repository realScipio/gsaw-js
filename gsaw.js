/*!
 * NAME: gsaw-js
 * DESCRIPTION: An "Add Water" FX Library to use with GSAP
 * VERSION: 0.3
 * DATE: 2018-01-06
 */

$(document).ready(function() {

	/* 
	 * ---------------------------
	 * ---- HELPER FUNCTIONS -----
	 * ---------------------------
	 */ 

	var get_selector = function (element) {
        var pieces = [];

        for (; element && element.tagName !== undefined; element = element.parentNode) {
            if (element.className) {
                var classes = element.className.split(' ');
                for (var i in classes) {
                    if (classes.hasOwnProperty(i) && classes[i]) {
                        pieces.unshift(classes[i]);
                        pieces.unshift('.');
                    }
                }
            }
            if (element.id && !/\s/.test(element.id)) {
                pieces.unshift(element.id);
                pieces.unshift('#');
            }
            pieces.unshift(element.tagName);
            pieces.unshift(' > ');
        }

        return pieces.slice(1).join('');
    };

    $.fn.getSelector = function (only_one) {
        if (true === only_one) {
            return get_selector(this[0]);
        } else {
            return $.map(this, function (el) {
                return get_selector(el);
            });
        }
    };

	/* 
	 * ----------------------------------------------------------------	
	 */     

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

	/* 
	 * ------------------------
	 * Background Effects
	 * ------------------------
 	 */ 

	/*
	 * Background Sweep effect for elements having class="gsaw-sweep-to-right"
 	 */
	$('.gsaw-sweep-to-right').on("mouseenter", function(event) {
		var config = JSON.parse($(this).attr("data-gsaw-config")) || {};
		var time = config.time != null ? config.time : 0.3;
		var backgroundColor = config.backgroundColor != null ? config.backgroundColor : "#f00";		
		var pseudo = get_selector(this) + ":after";		

		// if needed, inject an extra stylesheet at runtime	
		if ( typeof gsaw_sheet == "undefined" )		
		{
			gsaw_sheet = (function() {	
				var style = document.createElement("style");		
				style.appendChild(document.createTextNode("")); // webKit hack	
				document.head.appendChild(style);
				return style.sheet;
			})();		
		}

		// inject pseudo element to the DOM at runtime
		var inject = get_selector(this);	
		gsaw_sheet.insertRule(inject + ":after { content: ''; }", 0);		

		// read the DOM for the pseudo element
		var rule = CSSRulePlugin.getRule(pseudo);

		// add properties to the rule object
		TweenMax.set(rule, { cssRule: { 
			scaleX: 0,
			scaleY: 1,
			position: "absolute",
			zIndex: -1,		
			backgroundColor: backgroundColor,
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			transformOrigin: "0% 50%"
		}})

		var animation = TweenMax.to(rule, time, { 			
			cssRule: { scaleX: 1, scaleY: 1 },		
			ease: Sine.easeOut, 
			paused: true } 
		);
		animation.play();

		$(this).on("mouseleave", function(event) {
			animation.reverse();
		});
		
	});

	/*
	 * Background Sweep effect for elements having class="gsaw-sweep-to-left"
 	 */
	$('.gsaw-sweep-to-left').on("mouseenter", function(event) {
		var config = JSON.parse($(this).attr("data-gsaw-config")) || {};
		var time = config.time != null ? config.time : 0.3;
		var backgroundColor = config.backgroundColor != null ? config.backgroundColor : "#f00";		
		var pseudo = get_selector(this) + ":after";		

		// if needed, inject an extra stylesheet at runtime	
		if ( typeof gsaw_sheet == "undefined" )		
		{
			gsaw_sheet = (function() {	
				var style = document.createElement("style");		
				style.appendChild(document.createTextNode("")); // webKit hack	
				document.head.appendChild(style);
				return style.sheet;
			})();		
		}

		// inject pseudo element to the DOM at runtime
		var inject = get_selector(this);	
		gsaw_sheet.insertRule(inject + ":after { content: ''; }", 0);		

		// read the DOM for the pseudo element
		var rule = CSSRulePlugin.getRule(pseudo);

		// add properties to the rule object
		TweenMax.set(rule, { cssRule: { 
			scaleX: 0,
			scaleY: 1,
			position: "absolute",
			zIndex: -1,		
			backgroundColor: backgroundColor,
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			transformOrigin: "100% 50%"
		}})

		var animation = TweenMax.to(rule, time, { 			
			cssRule: { scaleX: 1, scaleY: 1 },		
			ease: Sine.easeOut, 
			paused: true } 
		);
		animation.play();

		$(this).on("mouseleave", function(event) {
			animation.reverse();
		});
		
	});

	/*
	 * Background Sweep effect for elements having class="gsaw-sweep-to-bottom"
 	 */
	$('.gsaw-sweep-to-bottom').on("mouseenter", function(event) {
		var config = JSON.parse($(this).attr("data-gsaw-config")) || {};
		var time = config.time != null ? config.time : 0.3;
		var backgroundColor = config.backgroundColor != null ? config.backgroundColor : "#f00";		
		var pseudo = get_selector(this) + ":after";		

		// if needed, inject an extra stylesheet at runtime	
		if ( typeof gsaw_sheet == "undefined" )		
		{
			gsaw_sheet = (function() {	
				var style = document.createElement("style");		
				style.appendChild(document.createTextNode("")); // webKit hack	
				document.head.appendChild(style);
				return style.sheet;
			})();		
		}

		// inject pseudo element to the DOM at runtime
		var inject = get_selector(this);	
		gsaw_sheet.insertRule(inject + ":after { content: ''; }", 0);		

		// read the DOM for the pseudo element
		var rule = CSSRulePlugin.getRule(pseudo);

		// add properties to the rule object
		TweenMax.set(rule, { cssRule: { 
			scaleX: 1,
			scaleY: 0,
			position: "absolute",
			zIndex: -1,		
			backgroundColor: backgroundColor,
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			transformOrigin: "50% 0%"
		}})

		var animation = TweenMax.to(rule, time, { 			
			cssRule: { scaleX: 1, scaleY: 1 },		
			ease: Sine.easeOut, 
			paused: true } 
		);
		animation.play();

		$(this).on("mouseleave", function(event) {
			animation.reverse();
		});
		
	});


	/*
	 * Background Sweep effect for elements having class="gsaw-sweep-to-top"
 	 */
	$('.gsaw-sweep-to-top').on("mouseenter", function(event) {
		var config = JSON.parse($(this).attr("data-gsaw-config")) || {};
		var time = config.time != null ? config.time : 0.3;
		var backgroundColor = config.backgroundColor != null ? config.backgroundColor : "#f00";		
		var pseudo = get_selector(this) + ":after";		

		// if needed, inject an extra stylesheet at runtime	
		if ( typeof gsaw_sheet == "undefined" )		
		{
			gsaw_sheet = (function() {	
				var style = document.createElement("style");		
				style.appendChild(document.createTextNode("")); // webKit hack	
				document.head.appendChild(style);
				return style.sheet;
			})();		
		}

		// inject pseudo element to the DOM at runtime
		var inject = get_selector(this);	
		gsaw_sheet.insertRule(inject + ":after { content: ''; }", 0);		

		// read the DOM for the pseudo element
		var rule = CSSRulePlugin.getRule(pseudo);

		// add properties to the rule object
		TweenMax.set(rule, { cssRule: { 
			scaleX: 1,
			scaleY: 0,
			position: "absolute",
			zIndex: -1,		
			backgroundColor: backgroundColor,
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			transformOrigin: "50% 100%"
		}})

		var animation = TweenMax.to(rule, time, { 			
			cssRule: { scaleX: 1, scaleY: 1 },		
			ease: Sine.easeOut, 
			paused: true } 
		);
		animation.play();

		$(this).on("mouseleave", function(event) {
			animation.reverse();
		});
		
	});

	/*
	 * Border ripple effect for elements having class="gsaw-border-ripple"
 	 */
	$('.gsaw-border-ripple').on("mouseenter", function(event) {
		var config = JSON.parse($(this).attr("data-gsaw-config")) || {};		
		var time = config.time != null ? config.time : 1;
		var borderWidth = config.borderWidth != null ? config.borderWidth : 4;
		var borderColor = config.borderColor != null ? config.borderColor : "#f00";	
		var borderStyle = "solid";
		var initialWidth = $(this).outerWidth();	
		var initialHeight = $(this).outerHeight();
		var toScaleX = (initialWidth + (borderWidth*3)) / initialWidth;
		var toScaleY = (initialHeight + (borderWidth*3)) / initialHeight;	
		var pseudo = get_selector(this) + ":before";		

		// if needed, inject an extra stylesheet at runtime	
		if ( typeof gsaw_sheet == "undefined" )		
		{
			gsaw_sheet = (function() {	
				var style = document.createElement("style");		
				style.appendChild(document.createTextNode("")); // webKit hack	
				document.head.appendChild(style);
				return style.sheet;
			})();		
		}

		// inject pseudo element to the DOM at runtime
		var inject = get_selector(this);	
		gsaw_sheet.insertRule(inject + ":before { content: ''; }", 0);		

		// read the DOM for the pseudo element
		var rule = CSSRulePlugin.getRule(pseudo);

		// webkit hack for CSSRulePlugin
		var borderWidth = borderWidth + "px";

		// add properties to the rule object
		TweenMax.set(rule, { cssRule: { 		
			scaleX: 1,
			scaleY: 1,		
			position: "absolute",
			zIndex: -1,		
			borderWidth: borderWidth, 
			borderColor: borderColor,
			borderStyle: borderStyle,		
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			transformOrigin: "50% 50%",
			opacity: 0
		}})

		var animation = new TimelineMax({paused: true});
		animation 	.to(rule, 0, { cssRule: { opacity: 1 } } )	
		animation 	.to(rule, time, { cssRule: { opacity: 0, scaleX: toScaleX, scaleY: toScaleY }, ease: Sine.easeOut } )	
		animation 	.to(rule, 0, { cssRule: { scaleX: 0, scaleY: 0 } } )
		
		animation.restart();	
		
	});

});