import { Types } from 'mongoose'

export type Review = {
  user: Types.ObjectId
  review: string
  rating: number
}

export type IProduct = {
  image: string
  name: string
  category:
    | 'Processor'
    | 'Motherboard'
    | 'RAM'
    | 'Power Supply'
    | 'Storage'
    | 'Monitor'
    | 'Graphics Card'
    | 'Casing'
    | 'CPU Cooler'
    | 'UPS'
    | 'Accessories'
  status: 'In Stock' | 'Out of Stock'
  price: number
  description: string
  brand: string
  model: string
  specification: string
  individualRating: number
  averageRating: number
  reviews: Review[]
}
