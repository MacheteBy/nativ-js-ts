import { stydent, StydentType } from "../02/02"
import { addSkill, doesStydentLiveIn, stydentActive } from "./03"

let student: StydentType

beforeEach(() => {
    student = {
        id: 1,
        name: 'Vova',
        age: 30,
        isActive: false,
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
})

test('new tech skill should be added to student', () => {
    expect(stydent.techologies.length).toBe(3);

    addSkill(student, 'React');

    expect(stydent.techologies.length).toBe(3);
    expect(student.techologies[3].title).toBe('React');
    expect(student.techologies[3].id).toBeDefined();
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false);

    stydentActive(student);

    expect(student.isActive).toBe(true);
})


test('does student live in city?', () => {
    let result1 = doesStydentLiveIn(stydent, 'Moskow');
    let result2 = doesStydentLiveIn(stydent, 'Mogilev');


    expect(result1).toBe(false)
    expect(result2).toBe(true)
})