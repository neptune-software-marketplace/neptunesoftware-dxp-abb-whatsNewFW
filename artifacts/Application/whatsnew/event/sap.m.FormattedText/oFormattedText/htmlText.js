if (typeof message === "undefined" || message === null || message === "") { return; }  
var formattedText = message; 

if( this.getBindingContext().getProperty("url") !== "" ){

    let array = this.sId.split("-");
    if(array.length > 1){
        
         let obj = sap.ui.getCore().byId( viewName + "oCustomListItem-" + viewName + "oListPreview-" +  array[array.length - 1] )
        obj.setType("Navigation");
    }
}

return formattedText;