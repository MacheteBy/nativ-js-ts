import { LocalCityType } from "../02/02_02";
import { createMessages, getStreetsTitlesOfGovernmentsBuildings, getStreetsTitlesOfHouses } from "./05_01";


let city: LocalCityType;

beforeEach(() => {
    city = {
        title: 'New York',
        house: [{
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
            buildedAt: 2008,
            repaired: false,
            adress: {
                number: 100,
                street: {
                    title: 'Happy street'
                }
            }
        }, {
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

test('test of streets title of goverments buildings',()=>{
    let streets = getStreetsTitlesOfGovernmentsBuildings(city.govenmentBuilding)

    expect(streets.length).toBe(2)
    expect(streets[0]).toBe('Central Str')
    expect(streets[1]).toBe('South Str')
})

test('list of streets titles', () => {
    let streets = getStreetsTitlesOfHouses(city.house)

    expect(streets.length).toBe(3)

    expect(streets[0]).toBe('White street')
    expect(streets[1]).toBe('Happy street')
    expect(streets[2]).toBe('Happy street')
})

test('create greating messages for streets', () => {
    let messages = createMessages(city.house)

    expect(messages.length).toBe(3)

    expect(messages[0]).toBe('Hello gays from White street')
    expect(messages[1]).toBe('Hello gays from Happy street')
    expect(messages[2]).toBe('Hello gays from Happy street')
})