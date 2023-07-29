import express from 'express'
import { PCBuilderController } from './pc-builder.controller'
const router = express.Router()

router.post('/', PCBuilderController.saveNewItems)

router.get('/:user', PCBuilderController.getSinglePCBuilder)

router.patch('/', PCBuilderController.removeSingleItem)

export const PCBuilderRoutes = router
