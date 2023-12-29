var data = req.body;
try {
    var saveData = await entities.whatsnew_main.save(data);
    result.data = saveData;
}
catch (e) {
    log.error("WhatsNew Save-> " + e);
    result.statusCode = 500;
    result.data = {
        msg: "something went wrong -> " + e
    };
}
complete();
