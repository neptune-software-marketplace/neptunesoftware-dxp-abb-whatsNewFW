var app = req.query !== undefined ? req.query.App : "APPBUILDER";
try {
    var timestamp = new Date();
    var data = await entities.whatsnew_main.createQueryBuilder("main")
        .where("main.application = :application", { application: app })
        .andWhere('main.draft = :draft', { draft: false })
        .andWhere('main.startDate <= :startDate', { startDate: timestamp })
        .andWhere('main.validUntil >= :validUntil', { validUntil: timestamp })
        .select(["main.application, main.startDate, main.validUntil, main.messageTitle, main.message, main.mediaContent, main.mediaType, main.url, main.highlight, main.draft, main.id, main.createdAt, main.updatedAt, main.createdBy, main.updatedBy"])
        .orderBy("main.updatedAt", "DESC")
        .getRawMany();
    var dataHidden = await entities.whatsnew_hide.createQueryBuilder("hidden")
        .where("hidden.userID = :userId", { userId: req.user.username })
        .andWhere('hidden.Hide = :hide', { hide: true })
        .select(["MessagUUID"])
        .getRawMany();
    console.log(dataHidden);
    var dataFiltered = [];
    if (dataHidden.length === 0) {
        dataFiltered = data;
    }
    else {
        var _loop_1 = function (line) {
            var found = dataHidden.find(function (l) { return l.MessagUUID === line.id; });
            found === undefined ? dataFiltered.push(line) : "";
        };
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var line = data_1[_i];
            _loop_1(line);
        }
    }
    console.log(dataFiltered);
    result.data = dataFiltered;
}
catch (e) {
    log.error("WhatsNew Get-> " + e);
    result.statusCode = 500;
    result.data = {
        msg: "something went wrong -> " + e
    };
}
complete();
