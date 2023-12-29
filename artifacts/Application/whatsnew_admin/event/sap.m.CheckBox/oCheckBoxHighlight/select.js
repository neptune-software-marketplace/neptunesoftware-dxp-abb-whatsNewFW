if (this.getSelected()) {

    let clone = oPageCarousel.clone();
    clone.getModel().oData = modeloPanelMain.getData();
    clone.getModel().refresh();
    oCarouselPreview.addPage(clone);
    oVBox.setVisible(true);

    let clone2 = oPageCarousel.clone();
    let modeloclone2 = new sap.ui.model.json.JSONModel();
    clone2.setModel(modeloclone2);
    modeloclone2.oData = demoData;
    modeloclone2.refresh();
    oCarouselPreview.addPage(clone2);
   
    myInterval = setInterval(function () {
        oCarouselPreview.next();
    }, 5000);

} else {
    oCarouselPreview.removeAllPages();
    oVBox.setVisible(false);
    window.clearInterval(myInterval);  
}

