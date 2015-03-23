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
    		},

            postCreate: function () {

    			this.tour = this.params;

                //this.tour.id = this.multipageid ? this.multipageid : this.id;
                this.tour.id = this.id;
                this.tour.steps = this._buildSteps();

                this.tour.onStart = dojo.hitch(this, "_onTourStart", this.tour.onStartMF);
    			this.tour.onEnd = dojo.hitch(this, "_onTourEnd", this.tour.onEndMF);
    			this.tour.onPrev = dojo.hitch(this, "_onTourPrev", this.tour.onPrevMF);
    			this.tour.onNext = dojo.hitch(this, "_onTourNext", this.tour.onNextMF);
    			this.tour.onClose = dojo.hitch(this, "_onTourClose", this.tour.onCloseMF);
    			this.tour.onError = dojo.hitch(this, "_onTourError", this.tour.onErrorMF);
            },

            startup: function () {
                setTimeout(dojo.hitch(this, "startTour"), 1000);
            },

            uninitialize: function () {
                this.hop.endTour(false);
            },

            startTour: function () {
                this.hop.startTour(this.tour);
            },

            _onTourStart: function(MF) {
                console.log("On tour start");
                this.execmf(MF);
            },

            _onTourEnd: function(MF) {
                console.log("On tour end");
                this.execmf(MF);
            },

            _onTourPrev: function(MF) {
                console.log("On tour prev");
                this.execmf(MF);
            },

            _onTourNext: function(MF) {
                console.log("On tour next");
                this.execmf(MF);
            },

            _onTourClose: function(MF) {
                console.log("On tour close");
                this.execmf(MF);
            },

            _onTourError: function(MF) {
                console.log("On tour error");
                this.execmf(MF);
            },

            _onStepPrev: function(MF) {
                console.log("On step previous");
                this.execmf(MF);
            },

            _onStepNext: function(MF) {
                console.log("On step next");
                this.execmf(MF);
            },

            _onStepShow: function(MF) {
                console.log("On step show");
                this.execmf(MF);
            },

            _onStepClose: function(MF) {
                console.log("On step close");
                this.execmf(MF);
            },

            _onStepCTA: function(MF) {
                console.log("On step CTA");
                this.execmf(MF);
            },

            _onStepError: function(MF) {
                console.log("On step error");
                this.execmf(MF);
            },

            _buildSteps: function() {
            	this.steps.forEach(function(step) {
                    if (step.onNextMF) {
                        step.onNext = dojo.hitch(this, "_onStepNext", step.onNextMF);
                    }
                    if (step.onPrevMF) {
                        step.onPrev = dojo.hitch(this, "_onStepPrev", step.onPrevMF);
                    }
                    if (step.onShowMF) {
                        step.onShow = dojo.hitch(this, "_onStepShow", step.onShowMF);
                    }
                    if (step.onCtaMF) {
	    			    step.onCTA = dojo.hitch(this, "_onStepCTA", step.onCtaMF);
                    }
                    if (step.onCloseMF) {
                        step.onClose = dojo.hitch(this, "_onStepClose", step.onCloseMF);
                    }
                    if (step.onErrorMF) {
                        step.onError = dojo.hitch(this, "_onStepError", step.onErrorMF);
                    }
            	}, this);

                return this.steps;
            }
        });
    });
})();