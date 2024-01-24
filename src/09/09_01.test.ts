
type UserType = {
    name: string
    age: number
}

type UserTypeAdress = {
    name: string
    age: number
    adress: { title: string }
}

function icreaseAge(user: UserType) {
    user.age++;
}

test('reference type test', () => {

    let user: UserType = {
        name: 'Vova',
        age: 30
    }

    icreaseAge(user)
    expect(user.age).toBe(31)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})

test('array test', () => {

    let user: UserType[] = [
        {
            name: 'Vova',
            age: 30
        },
        {
            name: 'Vika',
            age: 29
        },
    ]

    const admin = user
    admin.push({ name: 'Bandyugan', age: 10 })
    expect(user[2]).toEqual({ name: 'Bandyugan', age: 10 })
})

test('value test', () => {
    let userCount = 100
    let adminsCount = userCount

    adminsCount = adminsCount + 1

    expect(userCount).toBe(100)
    expect(adminsCount).toBe(101)
})

test('test', () => {

    const adress = {
        title: 'Mogilev'
    }

    let user: UserTypeAdress = {
        name: 'Vova',
        age: 30,
        adress: adress
    }

    let addr = user.adress

    let user2: UserTypeAdress = {
        name: 'Vera',
        age: 27,
        adress: adress
    }

    adress.title = 'Kanary'
    expect(user.adress.title).toBe('Kanary')
    expect(user.adress).toBe(user2.adress)
})

test('reference type array test', () => {
    const adress = {
        title: 'Mogilev'
    }

    let user: UserTypeAdress = {
        name: 'Vova',
        age: 30,
        adress: adress
    }

    let user2: UserTypeAdress = {
        name: 'Vera',
        age: 27,
        adress: adress
    }

    const users = [ user, user2, {name: 'Katya', age: 16, adress: adress}]

    const admins = [ user, user2]

    admins[0].name = 'Vladimir'

    expect(users[0].name).toBe('Vladimir')
    expect(user.name).toBe('Vladimir')
})


test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']

    pasportist(letters)

    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
})

function pasportist(letters: Array<string>){
    const copy = [...letters].sort()
}