sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("student00.com.sap.training.ux402.opa.ux402opa.controller.Main", {
            onInit: function () {

            },
            onPress: function (oEvent) {
                MessageBox.show("Button pressed");
            }

        });
    });
