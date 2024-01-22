type CityType = {
    title: string
    countyTitle: string
}

type AdressType = {
    streetTitle: string
    city: CityType
}

type TechologiesType = {
    id: number
    title: string
}

export type StydentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    addres: AdressType
    techologies: TechologiesType[]
}


export const stydent: StydentType = {
    id: 1,
    name: 'Vova',
    age: 30,
    isActive: true,
    addres: {
        streetTitle: 'Pr. Vitebskiy',
        city: {
            title: 'Mogilev',
            countyTitle: 'Belarus',
        }
    },
    techologies: [
        {
            id: 1,
            title: 'HTML',
        },
        {
            id: 2,
            title: 'CSS',
        },
        {
            id: 3,
            title: 'JS',
        },
    ]
}



