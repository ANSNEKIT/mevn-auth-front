export interface IUser {
    id: number
    email: string
    name: string
    createdAt: Date
}

export interface ILogin {
    email: string
    name: string
}

export interface IRegister {
    email: string
    name: string
    password: string
}
