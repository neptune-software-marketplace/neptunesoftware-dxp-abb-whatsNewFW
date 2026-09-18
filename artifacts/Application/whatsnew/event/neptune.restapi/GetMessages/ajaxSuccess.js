if (xhr.responseJSON.length !== 0) {
    modeloListPreview.setData(xhr.responseJSON);

    window.clearInterval(myInterval);
    oCarouselPreview.destroyPages();
    oHBox3.setVisible(false);

    $.each(xhr.responseJSON, function (i, data) {
        if (data.highlight === true) {
            let clone = oPageCarousel.clone();
            let modeloclone = new sap.ui.model.json.JSONModel();
            clone.setModel(modeloclone);
            modeloclone.oData = data;
            modeloclone.refresh();
            oCarouselPreview.addPage(clone);
            oHBox3.setVisible(true);
        }
    });

    if (oCarouselPreview.getPages().length > 1) {
        myInterval = setInterval(function () {
            if (oCarouselPreview.getPages().length > 1) {
                oCarouselPreview.next();
            }
        }, 5000);
    }

    if (!window.whatsnewDelegatesBound) {
        window.whatsnewDelegatesBound = true;

        oScrollContainer.addEventDelegate({
            onAfterRendering: function () {
                if (!oDialog.getDomRef() || !oHBox.getDomRef()) return;
                let height =
                    oDialog.getDomRef().clientHeight - oHBox.getDomRef().clientHeight - 130;
                if (oHBox3.getVisible() && oHBox3.getDomRef()) {
                    height -= oHBox3.getDomRef().clientHeight;
                }
                oScrollContainer.setHeight(height + "px");
            },
        });

        oCarouselPreview.addEventDelegate({
            onAfterRendering: function () {
                let htmlElement = oCarouselPreview.getDomRef();
                if (!htmlElement || htmlElement._whatsnewHoverBound) return;
                htmlElement._whatsnewHoverBound = true;

                htmlElement.addEventListener("mouseover", function () {
                    window.clearInterval(myInterval);
                });
                htmlElement.addEventListener("mouseleave", function () {
                    window.clearInterval(myInterval);
                    myInterval = setInterval(function () {
                        if (oCarouselPreview.getPages().length > 1) {
                            oCarouselPreview.next();
                        }
                    }, 5000);
                });
            },
        });
    }

    oDialog.open();
}
