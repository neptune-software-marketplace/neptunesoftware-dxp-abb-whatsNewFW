try {
    var apps = await entities.whatsnew_config.find({
        where: {
            propertyType: "Application",
        },
    });
    result.data = apps;
}
catch (e) {
    log.error("WhatsNew GetApps-> " + e);
    result.statusCode = 500;
    result.data = {
        msg: "something went wrong -> " + e
    };
}
complete();
