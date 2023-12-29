if (!oCheckBoxDraft.getSelected()) {
    let nok = false;

    if (oSelectApp.getSelectedKey() == "") {
        oSelectApp.setValueState("Error");
        nok = true;
    }
    if (oInputTitle.getValue() == "") {
        oInputTitle.setValueState("Error");
        nok = true;
    }

    if (nok) {
        
        sap.m.MessageToast.show("Some mandatory fields are missing!");
        return
    }

}

let output = JSON.parse(JSON.stringify(modeloPanelMain.oData))

output.startDate = sap.ui.core.format.DateFormat.getDateTimeInstance().parse(output.startDate).toISOString()
output.validUntil = sap.ui.core.format.DateFormat.getDateTimeInstance().parse(output.validUntil).toISOString()

apiSave({ data: output });