import React from 'react'

const QuotesItem= (props) => {
    const {id, name, body, removeItem}= props

    const editItem= ()=> {
        
    }

    return (
        <div>
           <blockquote>{body}-{name}</blockquote>

           <button onClick={editItem}>edit</button>
           <button onClick={()=> 
            {removeItem(id)}}>Remove</button>

        </div>
    )
}

export default QuotesItem