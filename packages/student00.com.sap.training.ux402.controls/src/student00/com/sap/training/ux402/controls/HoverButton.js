sap.ui.define([
	"sap/m/Button"
],

	function (Button) {
		"use strict";

		return Button.extend("student00.com.sap.training.ux402.controls.HoverButton", {                   
            metadata: {
                properties: {
                    "allowHover": {
                        type: "boolean",
                        defaultValue: false
                    },
                    "hoverText": {
                        type: "string"
                    }
                },
                events: {
                    "hover": {}
                }
            },
            onmouseover: function(evt) {
                if (this.getAllowHover()) {
                    this.fireHover();
                }
            },
            renderer: {}
		});
	});
