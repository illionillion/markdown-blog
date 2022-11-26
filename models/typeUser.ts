export type User = {
    name: string
    password: string
    email: string
    domain?: string
    profile?:string
    follows?: string[]
    followers?: string[]
}