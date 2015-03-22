/*global mx, mendix, require, console, define, module, logger */
    
// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
define([

    'dojo/_base/declare', 'mxui/widget/_WidgetBase',
    'Hopscotch/widgets/lib/hopscotchsrc'

], function (declare, _WidgetBase, _hopscotch) {
	'use strict';

    // Declare widget.
    return declare([ _WidgetBase, _hopscotch ], {

		hop: null,

        /**
         * Mendix Widget methods.
         * ======================
         */

        constructor: function () {
            this.hop = _hopscotch().hopscotchsrc();
		},

        refreshPositions: function () {
            this.hop.refreshBubblePosition();
        },

        execmf: function (MF) {
        	if (MF) {
        		console.log("Executing " + MF + " MF");

        		mx.ui.action(MF, {
			        context: new mendix.lib.MxContext(),
		        
			        callback: function (result) {
			        },
			        error: function () {
			        	console.log("Could not execute MF");
			        }
		        });
        	}
        },
    });
});
