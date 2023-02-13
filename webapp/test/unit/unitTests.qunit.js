/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student00/com/sap/training/ux402/qunit/ux402_qunit/test/unit/AllTests"

	], function () {
		QUnit.start();
	});
});
