
// @ts-nocheck

CustomComponent = {
     path: "/app/lib_moment_momentv2x29x4/moment.min.2.29.4.js",
     imporFunctionNmae: "moment"
}

if (typeof this[CustomComponent.imporFunctionNmae] !== "undefined") {
    CustomComponent = this[CustomComponent.imporFunctionNmae];
} else {

    const request = new XMLHttpRequest();
    request.open("GET", CustomComponent.path, false);
    request.send(null);

    if (request.status === 200) {
        let frame = document.createElement("iframe");
        document.body.appendChild(frame);
        frame.contentWindow.Function(request.responseText)();
        CustomComponent = frame.contentWindow[CustomComponent.imporFunctionNmae]
        document.body.removeChild(frame);
    } else{
        console.error("Fail to load the library" + CustomComponent.path)
        CustomComponent = {};
    }
}
