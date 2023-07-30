import { Request, Response } from 'express'
import { RequestHandler } from 'express-serve-static-core'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'

import { PCBuilderService } from './pc-builder.service'
import { IPCBuilder } from './pc-builder.interface'

const saveNewItems: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body
    const result = await PCBuilderService.saveItems(data)

    sendResponse<IPCBuilder>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Item successfully added!',
      data: result,
    })
  }
)

const getSinglePCBuilder = catchAsync(async (req: Request, res: Response) => {
  const user = req.params.user
  const result = await PCBuilderService.getSinglePCBuilder(user)

  sendResponse<IPCBuilder>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Items retrieved successfully!',
    data: result,
  })
})

const removeSingleItem = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  const result = await PCBuilderService.removeSingleItem(data)

  sendResponse<IPCBuilder>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Item removed successfully!',
    data: result,
  })
})

export const PCBuilderController = {
  saveNewItems,
  getSinglePCBuilder,
  removeSingleItem,
}
