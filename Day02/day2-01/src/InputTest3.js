import React, {useState, useRef} from 'react';
/*
    useRef
    React에서 DOM관련 작업을 하기 위한 React Hook 함수
*/
function InputTest3(){

    const [inputs, setInputs] = useState({
        userid: '',
        name: ''
    });

    const useridInput = useRef();

    const {userid, name } = inputs; //비구조화 할당

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            userid:'',
            name:'',
        });
        useridInput.current.focus();
    };

    return (
        <div>
            <input name="userid" value={userid} placeholder="아이디" onChange={onChange} ref={useridInput}/>
            <input name="name" value={name} placeholder="이름" onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({userid})
            </div>
        </div>
    );
}
export default InputTest3;