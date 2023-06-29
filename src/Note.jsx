import { useState, useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'



function Note(props) {

    function handleClick() {
        props.onDelete(props.id) //from App/Notes
    }

    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><DeleteIcon /></button>
        </div>
    )
}

export { Note }