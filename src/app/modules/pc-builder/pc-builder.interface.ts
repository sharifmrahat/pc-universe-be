import { Model, Types } from 'mongoose'
import { IProduct } from '../product/product.interface'

export type IPCBuilder = {
  user: string
  items: Types.ObjectId[] | IProduct[]
}

export type PCBuilderModel = Model<IPCBuilder>
