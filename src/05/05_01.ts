import { GovenmentBuildingType, HouseType } from "../02/02_02"

export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    { name: 'Andrew Ivanov', age: 33 },
    { name: 'Alexander Petrov', age: 24 },
    { name: 'Dmitry Sidorov', age: 18 },
]

const dimychTransformator = (man: ManType) => {
    return {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
}

const devs = [
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Andrew', lastName: 'Ivanov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Alexander', lastName: 'Petrov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry', lastName: 'Sidorov'
    },
]


const dev2 = [dimychTransformator(people[0]), dimychTransformator(people[1]), dimychTransformator(people[2])]


const dev3 = people.map(dimychTransformator)

const dev4 = people.map(man => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
}))


const messages = people.map(m => `Hello ${m.name.split(' ')[0]}. Welcom to IT-Incubator`)

export const createGreatingMessage = (people: ManType[]) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcom to IT-Incubator`)
}

export const getStreetsTitlesOfGovernmentsBuildings = (govenmentBuilding: GovenmentBuildingType[]) => {
    return govenmentBuilding.map(g => g.adress.street.title)
}

export const getStreetsTitlesOfHouses = (house: HouseType[]) => {
    return house.map(h => h.adress.street.title)
}

export const createMessages = (house: HouseType[]) => {
    return house.map(mes => `Hello gays from ${mes.adress.street.title}`)
}