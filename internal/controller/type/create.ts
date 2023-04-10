import express from "express"
import {PrismaClient, Type} from "@prisma/client"

async function CreateType(req: express.Request<any, any, Type, any>, res: express.Response, next: express.NextFunction) {
    const body = req.body
    const prisma = new PrismaClient()

    await prisma.type.create({
        data: {
            name: body.name,
        }
    }).then(function (resp) {
        res.status(200).json(resp)
    }).catch(function (err) {
        res.status(403).type("text/plain").send(err.toString())
    })
}

export {
    CreateType
}