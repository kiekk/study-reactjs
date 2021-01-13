import React from 'react'

function Hi({name, color, isSpecial}){
    return (
        <div style={{color}}>{isSpecial ? <b>*</b> : null}Hello, {name}!</div>
    )
}

Hi.defaultProps = {
    name : '무명',
    color : 'pink'
}
export default Hi;