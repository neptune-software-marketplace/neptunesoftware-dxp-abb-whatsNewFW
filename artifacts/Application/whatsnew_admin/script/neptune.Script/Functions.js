function setData(obj) {
    obj.setValue(obj.getValue());
    refreshModels();
}

function refreshModels() {
    modeloListPreview.refresh();
    modeloPanelMain.refresh();
    if (oCarouselPreview.getPages().length > 0) {
        oCarouselPreview.getPages()[0].getModel().refresh();
        oCarouselPreview.getPages()[0].rerender();
    }
}

function createEditor(content) {
    oFlexBoxContainer.editor = SUNEDITOR.create(oFlexBoxContainer.getDomRef().id, {
        showPathLabel: false,
        height: "185px",
        maxHeight: "185px",
        charCounter: true,
        maxCharCount: 400,
        value: content,
        buttonList: [
            ["undo", "redo"],
            ["font", "fontSize", "formatBlock"],
            ["bold", "underline", "strike", "italic"],
            [ "link", "fontColor", "hiliteColor", "removeFormat"], 
        ],
        fontSize: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36],
    });

    oFlexBoxContainer.editor.onChange = function (contents, core) {
        modeloPanelMain.oData.message = contents;
        refreshModels();
    };
}

function formatDate(date) {
    return sap.ui.core.format.DateFormat.getDateTimeInstance().format(date);
}
