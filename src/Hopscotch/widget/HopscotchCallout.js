/*global mx, mendix, require, console, define, module, logger */
    
// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
require([

    'dojo/_base/declare', 'mxui/widget/_WidgetBase', 'dijit/_TemplatedMixin',
    'mxui/dom', 'dojo/dom', 'dojo/query', 'dojo/dom-prop', 'dojo/dom-geometry', 'dojo/dom-class', 'dojo/dom-style', 'dojo/dom-construct', 'dojo/_base/array', 'dojo/_base/lang', 'dojo/text',
    'Hopscotch/widget/lib/hopscotchsrc'

], function (declare, _WidgetBase, _Templated, dom, DojoDom, domQuery, domProp, domGeom, domClass, domStyle, domConstruct, dojoArray, lang, text, _hopscotch) {
	'use strict';

    // Declare widget.
    return declare('Hopscotch.widget.HopscotchCallout', [ _WidgetBase, _Templated, _hopscotch ], {

        // Template path
        templatePath: require.toUrl('Hopscotch/widget/templates/HopscotchCallout.html'),

		hop: null,
		callout: null,

        /**
         * Mendix Widget methods.
         * ======================
         */

        constructor: function () {
		},

        postCreate: function () {
        	this.hop = _hopscotch().hopscotchsrc();

            this.callout = this.params;

            this.callout.id = this.id;

            this.callout.onCTA = dojo.hitch(this, "execmf", this.callout.onCtaMF);
            this.callout.onClose = dojo.hitch(this, "execmf", this.callout.onCloseMF);
            this.callout.onError = dojo.hitch(this, "execmf", this.callout.onErrorMF);
        },

        startup: function () {
			var calloutMgr = this.hop.getCalloutManager();
            calloutMgr.createCallout(this.callout);
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
