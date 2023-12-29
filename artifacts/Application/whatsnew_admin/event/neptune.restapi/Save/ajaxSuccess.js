
xhr.responseJSON.startDate = formatDate( new Date( xhr.responseJSON.startDate));
xhr.responseJSON.validUntil = formatDate( new Date( xhr.responseJSON.validUntil));

modeloPanelMain.setData(xhr.responseJSON);

sap.m.MessageToast.show("Message was saved!!");

if (typeof callback.afterChildSave === "function") {
    callback.afterChildSave();
}
