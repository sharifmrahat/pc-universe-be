import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import { IPCBuilder } from './pc-builder.interface'
import { PCBuilder } from './pc-builder.model'

const saveItems = async (pcBuilder: IPCBuilder): Promise<IPCBuilder | null> => {
  const itemExist = await PCBuilder.findOne({ user: pcBuilder.user })

  if (itemExist) {
    return await PCBuilder.findByIdAndUpdate(
      { _id: itemExist._id },
      { $push: { items: { $each: pcBuilder.items.map(id => id) } } },
      {
        new: true,
      }
    ).populate('items')
  } else {
    const savedItem = await PCBuilder.create(pcBuilder)
    if (!savedItem) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to save items')
    }

    return await PCBuilder.findOne({ _id: savedItem._id }).populate('items')
  }
}

const getSinglePCBuilder = async (user: string): Promise<IPCBuilder | null> => {
  const result = await PCBuilder.findOne({ user }).populate('items')
  return result
}

const removeSingleItem = async (payload: {
  user: string
  id: string
}): Promise<IPCBuilder | null> => {
  const isExist = await PCBuilder.findOne({
    user: payload.user,
    items: { $in: [payload.id] },
  })

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'item is not found!')
  }

  const result = await PCBuilder.findByIdAndUpdate(
    { _id: isExist._id },
    { $pull: { items: payload.id } },
    {
      new: true,
    }
  ).populate('items')
  return result
}

export const PCBuilderService = {
  saveItems,
  getSinglePCBuilder,
  removeSingleItem,
}
