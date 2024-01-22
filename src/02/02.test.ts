import { LocalCityType } from "./02_02";

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

test('test city should contains 3 houses', () => {
    expect(city.house.length).toBe(3)

    expect(city.house[0].buildedAt).toBe(2012)
    expect(city.house[0].repaired).toBe(false)
    expect(city.house[0].adress.number).toBe(100)
    expect(city.house[0].adress.street.title).toBe('White street')

    expect(city.house[1].buildedAt).toBe(2008)
    expect(city.house[1].repaired).toBe(false)
    expect(city.house[1].adress.number).toBe(100)
    expect(city.house[1].adress.street.title).toBe('Happy street')

    expect(city.house[2].buildedAt).toBe(2020)
    expect(city.house[2].repaired).toBe(false)
    expect(city.house[2].adress.number).toBe(101)
    expect(city.house[2].adress.street.title).toBe('Happy street')
})


test('test city should contains hospital and fire station', () => {
    expect(city.govenmentBuilding.length).toBe(2)

    expect(city.govenmentBuilding[0].type).toBe('HOSPITAL')
    expect(city.govenmentBuilding[0].budget).toBe(200000)
    expect(city.govenmentBuilding[0].staffCount).toBe(200)
    expect(city.govenmentBuilding[0].adress.street.title).toBe('Central Str')

    expect(city.govenmentBuilding[1].type).toBe('FIRE-STATION')
    expect(city.govenmentBuilding[1].budget).toBe(500000)
    expect(city.govenmentBuilding[1].staffCount).toBe(1000)
    expect(city.govenmentBuilding[1].adress.street.title).toBe('South Str')

})