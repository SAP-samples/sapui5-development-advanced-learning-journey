/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library student00.com.sap.training.ux402.controls.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "student00.com.sap.training.ux402.controls",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"student00.com.sap.training.ux402.controls.ExampleColor"
		],
		interfaces: [],
		controls: [
			"student00.com.sap.training.ux402.controls.Example",
			"student00.com.sap.train­ing.ux402.controls.PlaneInfo",
			"student00.com.sap.training.ux402.controls.HoverButton",
			"student00.com.sap.training.ux402.controls.PlaneInfoRenderer" 
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>controls</code>
	 *
	 * @namespace
	 * @name student00.com.sap.training.ux402.controls
	 * @author Lydie CASTELLON
	 * @version ${version}
	 * @public
	 */
	var thisLib = student00.com.sap.training.ux402.controls;

	/**
	 * Semantic Colors of the <code>student00.com.sap.training.ux402.controls.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
