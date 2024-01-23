
type PropsType = {
    name: string
    age: number
    lessons: LessonsType[]
    adress: AdressType
}

type LessonsType = {title: string}

type AdressType ={street: StreetType}

type StreetType = {title: string}

let props: PropsType;

beforeEach(() => {
    props = {
        name: 'Vova',
        age: 30,
        lessons: [
            {title: '1'},
            {title: '2'},
        ],
        adress: {
            street: {
                title: 'Pr. Vitebskiy'
            }
        }
    }
})

test('', () => {
    const {age, lessons} = props
    const {title} = props.adress.street

    expect(age).toBe(30)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Pr. Vitebskiy')
})


test('', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ls2] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
})