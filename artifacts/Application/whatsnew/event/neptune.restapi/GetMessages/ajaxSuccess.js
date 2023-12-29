if (xhr.responseJSON.length !== 0) {
    modeloListPreview.setData(xhr.responseJSON);

    $.each(xhr.responseJSON, function (i, data) {
        if (data.highlight === true) {
            let clone = oPageCarousel.clone();
            let modeloclone = new sap.ui.model.json.JSONModel();
            clone.setModel(modeloclone);
            modeloclone.oData = data;
            modeloclone.refresh();
            oCarouselPreview.addPage(clone);
            oHBox3.setVisible(true);
            oScrollContainer.addEventDelegate({
                onAfterRendering: function (e) {
                    if (oHBox3.getVisible()) {
                        oScrollContainer.setHeight(
                            oDialog.getDomRef().clientHeight -
                                oHBox.getDomRef().clientHeight -
                                oHBox3.getDomRef().clientHeight -
                                130 +
                                "px"
                        );
                    } else {
                        oScrollContainer.setHeight(
                            oDialog.getDomRef().clientHeight -
                                oHBox.getDomRef().clientHeight -
                                130 +
                                "px"
                        );
                    }
                },
            });
            window.clearInterval(myInterval);
            myInterval = setInterval(function () {
                oCarouselPreview.next();
            }, 5000);
        }
    });

    oCarouselPreview.addEventDelegate({
        onAfterRendering: function (e) {
            let htmlElement = oCarouselPreview.getDomRef();
            if (!htmlElement) return;

            htmlElement.addEventListener("mouseover", function (e) {
                window.clearInterval(myInterval);
            });
            htmlElement.addEventListener("mouseleave", function (e) {
                window.clearInterval(myInterval);
                myInterval = setInterval(function () {
                    oCarouselPreview.next();
                }, 5000);
            });
        },
    });

    oDialog.open();
}
