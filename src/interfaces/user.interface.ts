export interface IUser {
   id: number,
   name: string,
   username: string,
   email: string,
   phone: string,
   website: string,
}

export interface IUserData {
   users: IUser[],
}

export interface IUserDataSingle {
   user: IUser,
}

export type TypeUser = null | {name: string}