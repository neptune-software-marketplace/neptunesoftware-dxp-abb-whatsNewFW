var myInterval = null;
var viewName = "";

sap.ui.getCore().attachInit(function (startParams) {

    var _startParams = startParams;
    if (typeof sap.n === "object" && typeof sap.n.currentView === "object") {
        viewName = sap.n.currentView.sId + "--";
    } else if( oDialog.sId.startsWith("__jsview")){
        let splitArray = oDialog.sId.split("--");
        viewName = splitArray[0] + "--";
    }
    setTimeout(function () {
        if (_startParams === undefined || _startParams === "") {
            _startParams = { app: window.localAppID };
        }
        if (typeof moment !== "function") {
            $.getScript("https://cdn.jsdelivr.net/npm/moment@latest/min/moment.min.js", function () {
                apiGetMessages({
                    parameters: {
                        "App": _startParams.app
                    }
                });
            })
        } else {
            apiGetMessages({
                parameters: {
                    "App": _startParams.app
                }
            });
        }
    }, 20);

});


