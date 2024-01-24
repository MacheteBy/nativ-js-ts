export type UserType = {
    name: string
    hair: number
    adress: {city: string, house: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairstyle(u: UserType, power: number) {
    const userCopy = {
        ...u,
        hair: u.hair / power
    }
    return userCopy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {...u, adress: {...u.adress, city: city}}
}

export const upgraidLaptop = (u: UserWithLaptopType, laptop: string) => {
    return {...u, laptop: {...u.laptop, title: laptop}}
}