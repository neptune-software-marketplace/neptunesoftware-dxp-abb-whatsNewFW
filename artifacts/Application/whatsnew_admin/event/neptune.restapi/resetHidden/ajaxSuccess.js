
if(xhr.responseJSON.affected > 0 ){

    sap.m.MessageToast.show("Deleted Row: " + xhr.responseJSON.affected);    
}

var options = {
    parameters: {
        "id": modeloPanelMain.oData.id 
    }
};

apicheckHidden(options);