
result.data = await entities.whatsnew_hide.delete({
    MessagUUID: req.query.id,
});
complete()