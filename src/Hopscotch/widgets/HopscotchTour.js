/*global mx, mendix, require, console, define, module, logger */
(function() {
    'use strict';

    // Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
    require([

        'dojo/_base/declare', 'Hopscotch/widgets/HopscotchBase', 'dijit/_TemplatedMixin',
        'mxui/dom', 'dojo/dom', 'dojo/query', 'dojo/dom-prop', 'dojo/dom-geometry', 'dojo/dom-class', 'dojo/dom-style', 'dojo/dom-construct', 'dojo/_base/array', 'dojo/_base/lang', 'dojo/text',
        'Hopscotch/widgets/lib/hopscotchsrc'

    ], function (declare, _HopscotchBase, _Templated, dom, DojoDom, domQuery, domProp, domGeom, domClass, domStyle, domConstruct, dojoArray, lang, text, _hopscotch) {

        // Declare widget.
        return declare('Hopscotch.widgets.HopscotchTour', [ _HopscotchBase, _Templated, _hopscotch ], {

            // Template path
            templatePath: require.toUrl('Hopscotch/widgets/templates/HopscotchTour.html'),

    		tour: null,
    		steps: null,

            /**
             * Mendix Widget methods.
             * ======================
             */

            constructor: function () {
                console.log("HopscotchTour: constructor");
    		},

            postCreate: function () {
            	console.log("HopscotchTour: postCreate");

    			this.tour = this.params;

                //this.tour.id = this.multipageid ? this.multipageid : this.id;
                this.tour.id = this.id;
                this.tour.steps = this._buildSteps();

                this.tour.onStart = dojo.hitch(this, "execmf", this.onStartMF);
    			this.tour.onEnd = dojo.hitch(this, "execmf", this.onEndMF);
    			this.tour.onPrevious = dojo.hitch(this, "execmf", this.onPreviousMF);
    			this.tour.onNext = dojo.hitch(this, "execmf", this.onNextMF);
    			this.tour.onClose = dojo.hitch(this, "execmf", this.onCloseMF);
    			this.tour.onError = dojo.hitch(this, "execmf", this.onErrorMF);
            },

            startup: function () {
                console.log("HopscotchTour: startup");
                setTimeout(dojo.hitch(this, "startTour"), 1000);
            },

            uninitialize: function () {
                console.log("HopscotchTour: uninitialize");
                this.hop.endTour(false);
            },

            startTour: function () {
                this.hop.startTour(this.tour);
            },

            _buildSteps: function() {
            	this.steps.forEach(function(step) {
                    if (step.onNextMF) {
                        step.onNext = dojo.hitch(this, this.execmf, step.onNextMF);
                    }
                    if (step.onPreviousMF) {
                        step.onPrevious = dojo.hitch(this, this.execmf, step.onPreviousMF);
                    }
            		if (step.onCtaMF) {
    	    			step.onCTA = dojo.hitch(this, this.execmf, step.onCtaMF);
    	    		}
            	}, this);

                return this.steps;
            }
        });
    });
})();