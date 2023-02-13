sap.ui.define([
	"sap/ui/core/Renderer"
],

	function (Renderer) {
		"use strict";

		var PlaneInfoRenderer = Renderer.extend("student00.com.sap.training.ux402.controls.PlaneInfoRenderer");
        PlaneInfoRenderer.apiVersion = 2;

        PlaneInfoRenderer.render = function(oRm, oControl) {
            oRm.openStart("div",oControl);
            oRm.openEnd();
            oRm.openStart("table");
            oRm.attr("align", "center");
            oRm.openEnd();
            oRm.openStart("tr");
            oRm.openEnd();
            oRm.openStart("td");
            oRm.openEnd();
            oRm.icon("sap-icon://person-placeholder")
            oRm.text(" "+oControl.getSeatsMax());
            oRm.close("td");
            oRm.close("tr");
            oRm.openStart("tr");
            oRm.openEnd();
            oRm.openStart("td");
            oRm.openEnd();
            oRm.icon("sap-icon://suitcase")
            oRm.text(" "+oControl.getSeatsOcc());
            oRm.close("td");
            oRm.close("tr");
            oRm.close("table");
            oRm.close("div");                        

        }
        

        return PlaneInfoRenderer;

        
	});
