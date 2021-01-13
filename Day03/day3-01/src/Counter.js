import React, {useReducer} from 'react';

function reducer(state, action){
    switch(action.type){
        case 'PLUS': 
            return state + 1;
        case 'MINUS':
            return state - 1;
        default:
            return state;
    }
}

function Counter(){
    
    const [number, dispatch] = useReducer(reducer, 0);

    const plus = () => {
        console.log('1을 더합니다.');
        dispatch({type: 'PLUS'}); 
    }

    const minus = () => {
        console.log('1을 뺍니다.');
        dispatch({type: 'MINUS'}); 
    }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={plus}>1더하기</button>
            <button onClick={minus}>1빼기</button>
        </div>
    );
}

export default Counter;