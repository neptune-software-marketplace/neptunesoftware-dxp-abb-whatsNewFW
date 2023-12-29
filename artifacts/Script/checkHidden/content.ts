
const table = entities.whatsnew_hide;

const whatsnew = await table.findOne({
    where: {
        MessagUUID: req.query.id,
    },
    cache: false, // Enables or disables caching.
});


if (whatsnew !== undefined && whatsnew.id !== undefined) {
    result.data = {data:true};
} else {
    result.data = false;
}

complete()
