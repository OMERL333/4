sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "project1/model/models",
    "sap/ui/model/json/JSONModel" // Make sure to add this import
], function (UIComponent, Device, models, JSONModel) {
    "use strict";

    return UIComponent.extend("project1.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // Call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
            let globalModel = new sap.ui.model.json.JSONModel({
                data: [] ,
                Input1:"" ,
                Input2:"" 
            });

            // Enable routing
            this.getRouter().initialize();

            // Set the device model
            this.setModel(models.createDeviceModel(), "device");

            // Create and set initial values in the global model
            var oGlobalModel = new JSONModel({
                input1: "Initial Value 1",
                input2: "Initial Value 2",
                
            });
            this.setModel(oGlobalModel, "globalModel");
        }
    });
});
