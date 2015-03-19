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
                console.log("HopscotchCallout: constructor");
    		},

            postCreate: function () {
                console.log("HopscotchCallout: postCreate");

                this.calloutMgr = this.hop.getCalloutManager();

                this.callout = this.params;

                this.callout.id = this.id;

                this.callout.onCTA = dojo.hitch(this, "execmf", this.callout.onCtaMF);
                this.callout.onClose = dojo.hitch(this, "execmf", this.callout.onCloseMF);
                this.callout.onError = dojo.hitch(this, "execmf", this.callout.onErrorMF);
            },

            startup: function () {
                console.log("HopscotchCallout: startup");
                setTimeout(dojo.hitch(this, "showCallout"), 1000);
            },

            uninitialize: function () {
                console.log("HopscotchCallout: unintialize");
                this.calloutMgr.removeAllCallouts();
            },

            showCallout: function () {
                this.calloutMgr.createCallout(this.callout);
            }
        });
    });
})();