try {

    let data = [];
    for (const lines of req.body.data) {
        data.push({
            userID: req.user.username,
            MessagUUID: lines.id,
            Hide:req.body.hide
        })
    }
    await entities.whatsnew_hide.save(data);

    result.data = "updated";
}
catch (e) {
    log.error("WhatsNew Hide-> " + e)
    result.statusCode = 500;
    result.data = {
        msg: "something went wrong -> " + e
    };
}

complete();