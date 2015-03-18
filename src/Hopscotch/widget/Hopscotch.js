/*global mx, mendix, require, console, define, module, logger */
    
// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
require([

    'dojo/_base/declare', 'mxui/widget/_WidgetBase', 'dijit/_TemplatedMixin',
    'mxui/dom', 'dojo/dom', 'dojo/query', 'dojo/dom-prop', 'dojo/dom-geometry', 'dojo/dom-class', 'dojo/dom-style', 'dojo/dom-construct', 'dojo/_base/array', 'dojo/_base/lang', 'dojo/text',
    'Hopscotch/widget/lib/hopscotchsrc'

], function (declare, _WidgetBase, _Templated, dom, DojoDom, domQuery, domProp, domGeom, domClass, domStyle, domConstruct, dojoArray, lang, text, _hopscotch) {
	'use strict';

    // Declare widget.
    return declare('Hopscotch.widget.Hopscotch', [ _WidgetBase, _Templated, _hopscotch ], {

        // Template path
        templatePath: require.toUrl('Hopscotch/widget/templates/Hopscotch.html'),

		hop: null,
		tour: null,

		steps: null,

        /**
         * Mendix Widget methods.
         * ======================
         */

        constructor: function () {
		},

        postCreate: function () {
        	this.hop = _hopscotch().hopscotchsrc();

        	this._buildSteps();

			this.tour = {
				id: this.id,
				steps: this.steps,

				onStart: dojo.hitch(this, "execmf", this.onStartMF),
				onEnd: dojo.hitch(this, "execmf", this.onEndMF),
				onPrevious: dojo.hitch(this, "execmf", this.onPreviousMF),
				onNext: dojo.hitch(this, "execmf", this.onNextMF),
				onClose: dojo.hitch(this, "execmf", this.onCloseMF),
				onError: dojo.hitch(this, "execmf", this.onErrorMF)
			};
        },

        startup: function () {
			this.hop.startTour(this.tour);
        },

        _buildSteps: function() {
        	this.steps.forEach(function(step) {
        		if (step.onCtaMF) {
	    			step.onCTA = dojo.hitch(this, this.execmf, step.onCtaMF);
	    		}
        	}, this);
        },

        execmf: function (MF) {
        	if (MF) {
        		console.log("Executing " + MF + " MF");

        		mx.ui.action(MF, {
			        context: new mendix.lib.MxContext(),
		        
			        callback: function (result) {
			        	console.log("Executed MF");
			        },
			        error: function () {
			        	console.log("Could not execute MF");
			        }
		        });
        	} else {
        		console.log("No MF defined");
        	}
        },
    });
});
