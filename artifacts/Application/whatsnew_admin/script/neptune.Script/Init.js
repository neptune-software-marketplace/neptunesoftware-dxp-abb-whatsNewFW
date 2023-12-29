const demoData = {
    application: "",
    draft: true,
    highlight: true,
    mediaContent: "https://media.tenor.com/iJZm-8_bNukAAAAi/exploding-head-joypixels.gif",
    mediaType: "IMAGE",
    message:
        '<p><span style="font-size: 16px;">Where you can see some possibilities of what you can do were.</span></p><p><strong>we</strong> <u>can</u> <em>create</em> <span style="font-size: 26px;">text</span> <span style="font-family: Impact;">that</span> <span style="font-family: &quot;Courier New&quot;;">will </span><span style="font-family: &quot;Comic Sans MS&quot;;">mess</span> <span style="color: rgb(255, 0, 0);">with</span> <span style="background-color: rgb(171, 242, 0);">your</span><span style="font-size: 28px;"> <span style="color: rgb(255, 0, 0);">b</span><span style="color: rgb(171, 242, 0);">r</span><span style="color: rgb(0, 85, 255);">a</span><span style="color: rgb(189, 189, 189);">i</span><span style="color: rgb(255, 193, 158);">n</span>&nbsp;</span></p>',
    messageTitle: "This is a Demo exemple",
    startDate: "Oct 28, 2022, 6:50:35 PM",
    url: "https://community.neptune-software.com/",
    validUntil: "Dec 31, 9999, 12:00:00 AM",
};
var CarouselLayout = null;
var myInterval = null;

var callback;
const eventName = { onAfterRendering: AfterRendering };

function AfterRendering(e) {
    oFlexBoxContainer?.editor ? oFlexBoxContainer.editor.destroy() : "";

    createEditor(modeloPanelMain.oData.message);
    oPageMain.getDomRef().blur();
}

sap.ui.getCore().attachInit(function (startParams) {
    oFlexBoxContainer.removeEventDelegate(eventName);
    if (startParams == undefined) {
        setTimeout(function () {
            let data = {
                application: "",
                draft: true,
                highlight: false,
                mediaContent: "",
                mediaType: "",
                message: "<p></p>",
                messageTitle: "",
                startDate: new Date(),
                url: "",
                validUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), 
            };
            data.startDate = formatDate(data.startDate);
            data.validUntil = formatDate(data.validUntil);
            modeloPanelMain.setData(data);
            modeloListPreview.oData = [];
            modeloListPreview.oData.push(data);
            modeloListPreview.oData.push(demoData);

            refreshModels();
            oFlexBoxContainer.addEventDelegate({
                onAfterRendering: function (e) {
                    createEditor();
                    oPageMain.getDomRef().blur();
                },
            });
            oFlexBoxContainer.rerender();
        }, 20);
    }
});

if (sap.n) {
    sap.n.Shell.attachBeforeDisplay(function (startParams) {
        setTimeout(function () {
            let data = {};
            if (startParams?.data?.id === undefined) {
                data = {
                    application: "",
                    draft: true,
                    highlight: false,
                    mediaContent: "",
                    mediaType: "",
                    message: "<p></p>",
                    messageTitle: "",
                    startDate: new Date(),
                    url: "",
                    validUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
                };
                data.startDate = formatDate(data.startDate);
                data.validUntil = formatDate(data.validUntil);
            } else {
                data = startParams.data;
                data.startDate = formatDate(new Date(data.startDate));
                data.validUntil = formatDate(new Date(data.validUntil));

                var options = {
                    parameters: {
                        id: data.id,  
                    },
                };
                apicheckHidden(options);
            }
            if (startParams.events !== undefined) {
                callback = startParams.events;
            }

            modeloPanelMain.setData(data);
            modeloListPreview.oData = [];
            modeloListPreview.oData.push(data);
            modeloListPreview.oData.push(demoData);

            refreshModels();
            oCheckBoxHighlight.fireSelect();
            oFlexBoxContainer.addEventDelegate(eventName);
            if (oFlexBoxContainer.editor === undefined) {
                setTimeout(function () {
                    oFlexBoxContainer.rerender();
                }, 200);
            }
        }, 200);
    });
}
