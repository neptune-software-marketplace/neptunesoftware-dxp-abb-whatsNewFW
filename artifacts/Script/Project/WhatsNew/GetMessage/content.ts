
const app = req.query !== undefined ? req.query.App : "APPBUILDER";

try {

    let timestamp = new Date()
    const data = await entities.whatsnew_main.createQueryBuilder("main")
        .where("main.application = :application", { application: app })
        .andWhere('main.draft = :draft', { draft: false })
        .andWhere('main.startDate <= :startDate', { startDate: timestamp })
        .andWhere('main.validUntil >= :validUntil', { validUntil: timestamp })
        .select(["main.application, main.startDate, main.validUntil, main.messageTitle, main.message, main.mediaContent, main.mediaType, main.url, main.highlight, main.draft, main.id, main.createdAt, main.updatedAt, main.createdBy, main.updatedBy"])
        .orderBy("main.updatedAt", "DESC")
        .getRawMany();

    const dataHidden = await entities.whatsnew_hide.createQueryBuilder("hidden")
        .where("hidden.userID = :userId", { userId: req.user.username })
        .andWhere('hidden.Hide = :hide', { hide: true })
        .select(["MessagUUID"])
        .getRawMany();

    console.log(dataHidden)

    let dataFiltered = [];

    if (dataHidden.length === 0) {
        dataFiltered = data;
    } else {
        for (const line of data) {
            let found = dataHidden.find( l => l.MessagUUID === line.id )
            found === undefined ? dataFiltered.push(line) : "";
        }
    }
    console.log(dataFiltered)

    result.data = dataFiltered
}
catch (e) {
    log.error("WhatsNew Get-> " + e)
    result.statusCode = 500;
    result.data = {
        msg: "something went wrong -> " + e
    };
}
complete();
