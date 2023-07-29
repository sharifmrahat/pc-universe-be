import express from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { ProductRoutes } from '../modules/product/product.route'
import { AuthRoutes } from '../modules/auth/auth.route'
import { PCBuilderRoutes } from '../modules/pc-builder/pc-builder.router'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/pc-builders',
    route: PCBuilderRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
