/*global mx, mendix, require, console, define, module, logger */
(function () {
    'use strict';

    require([

        'dojo/_base/declare', 'Hopscotch/widgets/HopscotchBase', 'dijit/_TemplatedMixin',
        'mxui/dom', 'dojo/dom', 'dojo/query', 'dojo/dom-prop', 'dojo/dom-geometry', 'dojo/dom-class', 'dojo/dom-style', 'dojo/dom-construct', 'dojo/_base/array', 'dojo/_base/lang', 'dojo/text',
        'Hopscotch/widgets/lib/hopscotchsrc'

    ], function (declare, _HopscotchBase, _Templated, dom, DojoDom, domQuery, domProp, domGeom, domClass, domStyle, domConstruct, dojoArray, lang, text, _hopscotch) {

        return declare('Hopscotch.widgets.HopscotchCallout', [ _HopscotchBase, _Templated, _hopscotch ], {

            templatePath: require.toUrl('Hopscotch/widgets/templates/HopscotchCallout.html'),

            calloutMgr: null,
            callout: null,

            constructor: function () {
    		},

            postCreate: function () {
                this.calloutMgr = this.hop.getCalloutManager();

                this.callout = this.params;

                this.callout.id = this.id;

                this.callout.onCTA = lang.hitch(this, this.execmf, this.callout.onCtaMF);
                this.callout.onShow = lang.hitch(this, this.execmf, this.callout.onShowMF);
                this.callout.onClose = lang.hitch(this, this.execmf, this.callout.onCloseMF);
                this.callout.onError = lang.hitch(this, this.execmf, this.callout.onErrorMF);
            },

            startup: function () {
                setTimeout(lang.hitch(this, "showCallout"), 1000);
            },

            uninitialize: function () {
                this.calloutMgr.removeAllCallouts();
            },

            showCallout: function () {
                this.calloutMgr.createCallout(this.callout);
            }
        });
    });
})();