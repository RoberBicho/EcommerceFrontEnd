import { IUser } from './IUser';
export interface ISession {
    expiresIn: string,
    token?: string
}

export interface IMeData {
    status: boolean,
    message?: string,
    user?: IUser
}

