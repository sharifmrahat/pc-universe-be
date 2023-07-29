import { Schema, model } from 'mongoose'
import { IPCBuilder, PCBuilderModel } from './pc-builder.interface'

const pcBuilderSchema = new Schema<IPCBuilder>(
  {
    user: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
  },
  {
    timestamps: true,
  }
)

export const PCBuilder = model<IPCBuilder, PCBuilderModel>(
  'PC-Builder',
  pcBuilderSchema
)
