import { StydentType } from "../02/02"
import { GovenmentBuildingType, HouseType, LocalCityType } from "../02/02_02"

export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: StydentType, skill: string) => {
    student.techologies.push({
        id: new Date().getTime(),
        title: skill
    }
    )
}

export const stydentActive = (student: StydentType) => {
    student.isActive = true;
}

export const doesStydentLiveIn = (student: StydentType , cityName: string) => {
    return student.addres.city.title === cityName
}

export const addMoneyToBudget = (building: GovenmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const demolishHousesOnTheStreet = (city: LocalCityType, cityName: string) => {

}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStation = (govenmentBuilding: GovenmentBuildingType, staffCountToFire: number) => {
    govenmentBuilding.staffCount -= staffCountToFire
}

export const toHireStaff = (govenmentBuilding: GovenmentBuildingType, staffCounttoHire: number) => {
    govenmentBuilding.staffCount += staffCounttoHire
}