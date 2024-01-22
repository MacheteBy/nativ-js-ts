import { LocalCityType } from "../02/02_02";
import { addMoneyToBudget, demolishHousesOnTheStreet, repairHouse, toFireStation, toHireStaff } from "./03";


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


test('Budger should be change for HOSPITAL', () => {
    addMoneyToBudget(city.govenmentBuilding[0], 100000);

    expect(city.govenmentBuilding[0].budget).toBe(300000);
})

test('Budger should be change for FIRE-STATION', () => {
    addMoneyToBudget(city.govenmentBuilding[1], -100000);

    expect(city.govenmentBuilding[1].budget).toBe(400000);
})

test('Houses should be repared', () => {
    repairHouse(city.house[1])

    expect(city.house[1].repaired).toBe(true)
})

test('Staff should be increased', () => {
    toFireStation(city.govenmentBuilding[0], 20)

    expect(city.govenmentBuilding[0].staffCount).toBe(180)
})

test('House should be repared', () => {
    toHireStaff(city.govenmentBuilding[0], 20)

    expect(city.govenmentBuilding[0].staffCount).toBe(220)
})