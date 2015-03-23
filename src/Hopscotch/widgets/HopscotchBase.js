/*global mx, mendix, require, console, define, module, logger */
    
define([

    'dojo/_base/declare', 'dojo/_base/lang', 'mxui/widget/_WidgetBase',
    'Hopscotch/widgets/lib/hopscotchsrc'

], function (declare, lang, _WidgetBase, _hopscotch) {
	'use strict';

    return declare([ _WidgetBase, _hopscotch ], {

		hop: null,

        constructor: function () {
            this.hop = _hopscotch().hopscotchsrc();
		},

        refreshPositions: function () {
            this.hop.refreshBubblePosition();
        },

        execmf: function (MF) {
        	if (MF) {
        		mx.ui.action(MF, {
			        context: new mendix.lib.MxContext(),
		        
			        callback: lang.hitch(this, function (result) {
			        }),
			        error: function () {
			        	console.error("Could not execute MF:"+MF);
			        }
		        });
        	}
        },
    });
});
