export type StreetType = {
    title: string
}

export type AdressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    buildedAt: number,
    repaired: boolean,
    adress: AdressType
}

export type StreetTitleType = {
    title: string,
}

export type GovermentAdressType = {
    street: StreetTitleType
}

export type GovenmentBuildingType = {
    type: string,
    budget: number,
    staffCount: number,
    adress: GovermentAdressType
}

export type LocalCityType = {
    title: string,
    house: HouseType[],
    govenmentBuilding: GovenmentBuildingType[],
    citizensNumder: number
}