if (typeof message === "undefined" || message === null || message === "") { return; }
var formattedText = message;

if (this.getBindingContext().getProperty("url") !== "") {
    let array = this.sId.split("-");
    if (array.length > 1) {
        if (array[0].startsWith("__jsview")) {
            let obj = sap.ui.getCore().byId(array[0] + "--oCustomListItem-" + array[0] + "--oListPreview-" + array[array.length - 1])
            obj.setType("Navigation");
        }
    }
}

return formattedText;