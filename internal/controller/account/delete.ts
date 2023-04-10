import {PrismaClient} from "@prisma/client"
import express from "express"

interface DeleteAccountQuery {
    id?: string
    name?: string
}

async function DeleteAccount(req: express.Request<any, any, any, DeleteAccountQuery>, res: express.Response, next: express.NextFunction) {
    const query = req.query
    const prisma = new PrismaClient()

    await prisma.account.deleteMany({
        where: {
            OR: [
                {
                    id: query.id
                },
                {
                    name: query.name
                }
            ]
        },
    }).then(function (resp) {
        res.status(200).json(resp)
    }).catch(function (err) {
        res.status(403).type("text/plain").send(err.toString())
    })
}

export {
    DeleteAccount
}