import { LocalCityType } from "../02/02_02";
import { demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen } from "./04_02";


type NewType = LocalCityType;

let city: NewType;

beforeEach(() => {
    city = {
        title: 'New York',
        house: [{
            id: 1,
            buildedAt: 2012,
            repaired: false,
            adress: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        },
        {
            id: 2,
            buildedAt: 2008,
            repaired: false,
            adress: {
                number: 100,
                street: {
                    title: 'Happy street'
                }
            }
        }, {
            id: 3,
            buildedAt: 2020,
            repaired: false,
            adress: {
                number: 101,
                street: {
                    title: 'Happy street'
                }
            }
        },],
        govenmentBuilding: [{
            type: 'HOSPITAL',
            budget: 200000,
            staffCount: 200,
            adress: {
                street: {
                    title: 'Central Str',
                }
            }
        },
        {
            type: 'FIRE-STATION',
            budget: 500000,
            staffCount: 1000,
            adress: {
                street: {
                    title: 'South Str',
                }
            }
        }],
        citizensNumder: 1000000
    }
})


test('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.house.length).toBe(1)
    expect(city.house[0].id).toBe(1)
})

test('building with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.govenmentBuilding, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('FIRE-STATION')
})