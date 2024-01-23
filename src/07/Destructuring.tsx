import React, { useState } from 'react';

type PropsType = {
    name: string
    age: number
    lessons: LessonsType[]
    adress: AdressType
}

type LessonsType = {title: string}

type AdressType ={street: StreetType}

type StreetType = {title: string}



const Destructuring: React.FC<PropsType> = (props) => {
    const {title} = props.adress.street
    const {name, ...restProps} = props

    const [string, setString] = useState('hello')

    return (
        <div>
            <h1>{title}</h1>
            <hr />
            <div>
                {name}
            </div>
        </div>
    );
};

export default Destructuring;