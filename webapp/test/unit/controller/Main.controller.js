/*global QUnit*/

sap.ui.define([
	"student00/com/sap/training/ux402/qunit/ux402_qunit/controller/Main.controller"

], function (Controller) {
	"use strict";

	QUnit.module("Main Controller");

	QUnit.test("I should test the Main controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
