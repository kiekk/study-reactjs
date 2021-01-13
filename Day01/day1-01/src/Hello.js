import React from 'react'

function Hello(props){
    return <div style={{color:props.color}}>Hello, {props.name}!</div>
}

Hello.defaultProps = {
    name : '무명',
    color : 'pink'
}
export default Hello;