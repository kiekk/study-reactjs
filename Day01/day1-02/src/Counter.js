import React, {useState} from 'react';

function Counter(){

    //기본값을 0으로 설정
    const [number, setNumber] = useState(0);
/*
    number = 0;
    setNumber() : number 변수의 값을 설정
*/

    const plus = () => {
        console.log('1을 더합니다.');
        //prev(콜백) : setState 함수에 파라미터로 함수를 넘겨주면 이전 값을 저장해주는 변수

        /*
            let prev = 0;
            function setState(callback){
                prev = callbac(prev);
            }
        */
        setNumber(prev => prev + 1); 
    }

    const minus = () => {
        console.log('1을 뺍니다.');
        setNumber(prev => prev - 1); 
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