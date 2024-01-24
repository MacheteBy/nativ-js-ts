import { moveUser, makeHairstyle, UserType, UserWithLaptopType, upgraidLaptop } from "./10_01"



// test('referece type test', () => {
//     let user: UserType = {
//         name: 'Vova',
//         hair: 30,
//         adress: {
//             title: 'Mogilev'
//         }
//     }

//     const awesomeUser = makeHairstyle(user, 2)
//     // user = awesomeUser


//     expect(user.hair).toBe(30)
//     expect(awesomeUser.hair).toBe(15)
//     expect(awesomeUser.adress).toBe(user.adress)
// })

test('change adress', () => {
    let user: UserWithLaptopType = {
        name: 'Vova',
        hair: 30,
        adress: {
            city: 'Mogilev',
            house: 12
        },
        laptop: {
            title: 'Omen'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.adress).not.toBe(movedUser.adress)
    expect(movedUser.adress.city).toBe('Kiev')
    expect(user.laptop).toBe(movedUser.laptop)
})

test('upgraid laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Vova',
        hair: 30,
        adress: {
            city: 'Mogilev',
            house: 12
        },
        laptop: {
            title: 'Omen'
        }
    }

    const movedLaptop = upgraidLaptop(user, 'Macbook')

    expect(user).not.toBe(movedLaptop)
    expect(user.adress).toBe(movedLaptop.adress)
    expect(movedLaptop.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Omen')
    expect(user.laptop).not.toBe(movedLaptop.laptop)
})