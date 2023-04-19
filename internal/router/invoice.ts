import express from "express"
import {CreateInvoice} from "../controller/invoice/create"
import {UpdateInvoice} from "../controller/invoice/update"
import {DeleteInvoice, DeleteManyInvoice} from "../controller/invoice/delete"
import {
    ReadAllInvoice,
    ReadInvoiceById,
    ReadInvoiceWithFuzzy,
    ReadInvoiceWithPagination,
    ReadInvoiceWithPaginationAndFuzzy
} from "../controller/invoice/read"
import {PatchManyInvoicesStatus} from "../controller/invoice/patch"

const router = express.Router()

// 创建账单
router.post("/invoice", CreateInvoice)

// 修改账单
router.put("/invoice", UpdateInvoice)

// 局部修改账单
router.patch("/invoice/many/status", PatchManyInvoicesStatus)

// 查询账单
router.get("/invoice", ReadInvoiceById)
router.get("/invoice/all", ReadAllInvoice)
router.get("/invoice/pagination", ReadInvoiceWithPagination)
router.get("/invoice/fuzzy", ReadInvoiceWithFuzzy)
router.get("/invoice/paginationAndFuzzy", ReadInvoiceWithPaginationAndFuzzy)

// 删除账单
router.delete("/invoice", DeleteInvoice)
router.delete("/invoice/many", DeleteManyInvoice)

export {
    router
}