sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller, History) {
    "use strict";

    return Controller.extend("student00.com.sap.training.ux402.listdetail.ux402listdetail.controller.BaseController", {
        getRouter: function () {
            return this.getOwnerComponent().getRouter();
        },
        
        getListSelector: function() {
            return this.getOwnerComponent().oListSelector;
        },

        getResourceBundle: function () {
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },

        onNavBack: function() {
            var sPreviousHash = History.getInstance().getPreviousHash();
            if (sPreviousHash !== undefined) {
                // The history contains a previous entry
                history.go(-1);
            } else {
                // Otherwise we go backwards with a forward history
                var bReplace = true;
                this.getRouter().navTo("masterlist", {}, bReplace);
            }
        }
    });
});