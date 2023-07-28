import { Model } from 'mongoose'

export type IUser = {
  name: string
  email: string
  password: string
  photoUrl: string
}

export type UserModel = {
  isUserExist(email: string): Promise<Pick<IUser, 'email' | 'password'>>
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>
} & Model<IUser>
