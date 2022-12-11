export type User = {
    id: string,
    name: string
    password: string
    email: string
    domain?: string
    profile?:string
    follows?: string[]
    followers?: string[]
}