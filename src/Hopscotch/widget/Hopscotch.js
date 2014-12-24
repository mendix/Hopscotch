/*global mx, mendix, require, console, define, module, logger */
(function() {
    'use strict';

    // Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
    require([

        'dojo/_base/declare', 'mxui/widget/_WidgetBase', 'dijit/_Widget', 'dijit/_TemplatedMixin',
        'mxui/dom', 'dojo/dom', 'dojo/query', 'dojo/dom-prop', 'dojo/dom-geometry', 'dojo/dom-class', 'dojo/dom-style', 'dojo/dom-construct', 'dojo/_base/array', 'dojo/window', 'dojo/on', 'dojo/_base/lang', 'dojo/text',
        'Hopscotch/widget/lib/hopscotchsrc'

    ], function (declare, _WidgetBase, _Widget, _Templated, domMx, dom, domQuery, domProp, domGeom, domClass, domStyle, domConstruct, dojoArray, win, on, lang, text, _hopscotch) {

        // Declare widget.
        return declare('Hopscotch.widget.Hopscotch', [ _WidgetBase, _Widget, _Templated, _hopscotch ], {

            // Template path
            templatePath: require.toUrl('Hopscotch/widget/templates/Hopscotch.html'),
			
			hop : null,
            /**
             * Mendix Widget methods.
             * ======================
             */

            // DOJO.WidgetBase -> Startup is fired after the properties of the widget are set.
            startup: function () {
				this.hop = _hopscotch().hopscotchsrc();
				
				var tour = {
					id: this.id,
					steps: this.steps /*[
						{
							title: "My Datagrid",
							content: "This is a datagrid.",
							target: domQuery(".mx-name-grid1")[0],
							placement: "bottom"
						},
						{
							title: "My content",
							content: "Here is where I put my content.",
							target: domQuery(".mx-layoutcontainer-bottom")[0],
							placement: "bottom"
						}
					]*/
				};
				this.hop.startTour(tour);
            }
        });
    });

}());


