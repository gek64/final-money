import express from "express"
import {Account, PrismaClient} from "@prisma/client"

async function UpdateAccount(req: express.Request<any, any, Account, any>, res: express.Response, next: express.NextFunction) {
    const body = req.body
    const prisma = new PrismaClient()

    await prisma.account.update({
        where: {
            id: body.id,
        },
        data: {
            name: body.name,
            funds: body.funds,
        }
    }).then(function (resp) {
        res.status(200).json(resp)
    }).catch(function (err) {
        res.status(403).type("text/plain").send(err.toString())
    })
}

export {
    UpdateAccount
}