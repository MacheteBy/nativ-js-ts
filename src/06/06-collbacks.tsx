import React, { MouseEvent } from "react"

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        const info = event.currentTarget.name
        alert('user should be deleted' + ' ' + info)
    }

    const seveUser = (event: MouseEvent<HTMLButtonElement>) => {
        const info = event.currentTarget.name
        alert('save user' + ' ' + info)
    }

    const onNameChanget = () => {
        console.log('name changed')
    }


    const focusLosstHandler = () => {
        console.log('focus lost')
    }

    return (
        <div>
            <textarea onChange={onNameChanget} onBlur={focusLosstHandler}>Dimych</textarea>
            <button name="delete" onClick={deleteUser}>delete</button>
            <button name="save" onClick={seveUser}>save</button>
        </div>

    )
}