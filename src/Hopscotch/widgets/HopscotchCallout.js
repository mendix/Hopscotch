/*global mx, mendix, require, console, define, module, logger */
(function () {
    'use strict';

    // Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
    require([

        'dojo/_base/declare', 'Hopscotch/widgets/HopscotchBase', 'dijit/_TemplatedMixin',
        'mxui/dom', 'dojo/dom', 'dojo/query', 'dojo/dom-prop', 'dojo/dom-geometry', 'dojo/dom-class', 'dojo/dom-style', 'dojo/dom-construct', 'dojo/_base/array', 'dojo/_base/lang', 'dojo/text',
        'Hopscotch/widgets/lib/hopscotchsrc'

    ], function (declare, _HopscotchBase, _Templated, dom, DojoDom, domQuery, domProp, domGeom, domClass, domStyle, domConstruct, dojoArray, lang, text, _hopscotch) {

        // Declare widget.
        return declare('Hopscotch.widgets.HopscotchCallout', [ _HopscotchBase, _Templated, _hopscotch ], {

            // Template path
            templatePath: require.toUrl('Hopscotch/widgets/templates/HopscotchCallout.html'),

            calloutMgr: null,
            callout: null,

            /**
             * Mendix Widget methods.
             * ======================
             */

            constructor: function () {
    		},

            postCreate: function () {
                this.calloutMgr = this.hop.getCalloutManager();

                this.callout = this.params;

                this.callout.id = this.id;

                this.callout.onCTA = dojo.hitch(this, "_onCTA", this.callout.onCtaMF);
                this.callout.onShow = dojo.hitch(this, "_onShow", this.callout.onShowMF);
                this.callout.onClose = dojo.hitch(this, "_onClose", this.callout.onCloseMF);
                this.callout.onError = dojo.hitch(this, "_onError", this.callout.onErrorMF);
            },

            startup: function () {
                setTimeout(dojo.hitch(this, "showCallout"), 1000);
            },

            uninitialize: function () {
                this.calloutMgr.removeAllCallouts();
            },

            showCallout: function () {
                this.calloutMgr.createCallout(this.callout);
            },

            _onShow: function(MF) {
                console.log("On callout show");
                if (MF) {
                    this.execmf(MF);
                }
            },

            _onClose: function(MF) {
                console.log("On callout close");
                if (MF) {
                    this.execmf(MF);
                }
            },

            _onCTA: function(MF) {
                console.log("On callout CTA");
                if (MF) {
                    this.execmf(MF);
                }
            },

            _onError: function(MF) {
                console.log("On callout error");
                if (MF) {    
                    this.execmf(MF);
                }
            }
        });
    });
})();