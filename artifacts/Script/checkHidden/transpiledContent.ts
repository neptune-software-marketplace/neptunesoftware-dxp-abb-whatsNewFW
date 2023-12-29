var table = entities.whatsnew_hide;
var whatsnew = await table.findOne({
    where: {
        MessagUUID: req.query.id,
    },
    cache: false,
});
if (whatsnew !== undefined && whatsnew.id !== undefined) {
    result.data = { data: true };
}
else {
    result.data = false;
}
complete();
