import { GovenmentBuildingType, HouseType, LocalCityType } from "../02/02_02";

export const demolishHousesOnTheStreet = (city: LocalCityType, street: string) => {
    city.house = city.house.filter(h => h.adress.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (govenmentBuilding: GovenmentBuildingType[], count: number) => {
    return govenmentBuilding.filter(b => b.staffCount > count)
}