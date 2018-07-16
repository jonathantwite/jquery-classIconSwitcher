/*	
 *	JT 2018/06/27
 *	jQuery plugin to animate a class-based icon between two states.
 *	Usage:
 *		setup:	$('.icon').classIconSwitcher(options);
 *		fire:	$('.icon').classIconSwitcher('trigger');
 *	Options:
 *	        iconClass:	generic class(es) required by the icons.  Default value: 'glyphicon'.
 *			startIcon:	the start icon.  Default value: 'glyphicon-ok'.
 *			endIcon:	the icon transitioned to. Default value: 'glyphicon-remove'.
 *			timing:		the total animation length.  Default value: 1.0 (s).
 *	Notes:
 *			The element does not need the icon classes as these will be set during setup.
 */



// --- UMD MAGIC DANCE ---

// Uses CommonJS, AMD or browser globals to create a jQuery plugin.

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else if (typeof module === 'object' && module.exports) {
		// Node/CommonJS
		module.exports = function (root, jQuery) {
			if (jQuery === undefined) {
				// require('jQuery') returns a factory that requires window to
				// build a jQuery instance, we normalize how we use modules
				// that require this pattern but the window provided is a noop
				// if it's defined (how jquery works)
				if (typeof window !== 'undefined') {
					jQuery = require('jquery');
				}
				else {
					jQuery = require('jquery')(root);
				}
			}
			factory(jQuery);
			return jQuery;
		};
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {
	
	// --- MODULE STARTS HERE ---

	$.fn.classIconSwitcher = function (args) {

		var isCommand = typeof args === 'string';

		return this.each(function () {
			var $this = $(this);

			if (isCommand) {
				switch (args) {
					case 'trigger': trigger($this); return;
					case 'toStart': toStart($this); return;
					case 'toEnd': toEnd($this); return;
					default: return;
				}
			}
			else {
				setup($this, args)
			}
		});

		function setup($el, args) {
			var settings = $.extend({}, $.fn.classIconSwitcher.defaults, args)

			$el.data('classIconSwitcher-starticon', args.startIcon);
			$el.data('classIconSwitcher-endicon', args.endIcon);
			$el.data('classIconSwitcher-timing', args.timing);

			if (!$el.hasClass(settings.iconClass)) {
				$el.addClass(settings.iconClass);
			}
			$el.addClass(settings.startIcon);
			$el.css({
				'-webkit-transition': 'all ' + settings.timing / 2.0 + 's linear',
				'-moz-transition': 'all ' + settings.timing / 2.0 + 's linear',
				'-o-transition': 'all ' + settings.timing / 2.0 + 's linear',
				'transition': 'all ' + settings.timing / 2.0 + 's linear'
			});
		}

		function trigger($el) {
			var startIcon = $el.data('classIconSwitcher-starticon');

			if ($el.hasClass(startIcon)) {
				toEnd($el);
			}
			else {
				toStart($el)
			}
		}

		function toEnd($el) {
			var startIcon = $el.data('classIconSwitcher-starticon');
			var endIcon = $el.data('classIconSwitcher-endicon');
			var timing = $el.data('classIconSwitcher-timing');
			var midCss = { 'transform': 'rotate(180deg) scale(0.2)' };
			var endCss = { 'transform': 'rotate(360deg) scale(1.0)' };

			if ($el.hasClass(endIcon)) { return; }

			$el.css(midCss);
			setTimeout(function () {
				$el.removeClass(startIcon);
				$el.addClass(endIcon);
				$el.css(endCss);
			}, timing * 500.0);
		}

		function toStart($el) {
			var startIcon = $el.data('classIconSwitcher-starticon');
			var endIcon = $el.data('classIconSwitcher-endicon');
			var timing = $el.data('classIconSwitcher-timing');
			var midCss = { 'transform': 'rotate(180deg) scale(0.2)' };
			var endCss = { 'transform': 'rotate(360deg) scale(1.0)' };

			if ($el.hasClass(startIcon)) { return; }

			$el.css(midCss);
			setTimeout(function () {
				$el.removeClass(endIcon);
				$el.addClass(startIcon);
				$el.css('transform', '');
			}, timing * 500.0);
		}
	};



	//Default options
	$.fn.classIconSwitcher.defaults = {
		iconClass: 'glyphicon',
		startIcon: 'glyphicon-ok',
		endIcon: 'glyphicon-remove',
		timing: 1.0
	};

}));
