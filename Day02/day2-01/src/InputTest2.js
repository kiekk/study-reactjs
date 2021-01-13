import React, {useState} from 'react';

function InputTest2(){

    const [inputs, setInputs] = useState({
        userid: '',
        name: ''
    });

    const {userid, name } = inputs; //비구조화 할당
    /*
        리액트에서 객체를 수정할 때에는
        inputs[name] = value; (x)

        새로운 객체를 만들어서 새로운 객체에 변화값을 주고, 그 상태로
        사용해야 합니다.
    */
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
    };

    return (
        <div>
            <input name="userid" value={userid} placeholder="아이디" onChange={onChange} />
            <input name="name" value={name} placeholder="이름" onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({userid})
            </div>
        </div>
    );
}
export default InputTest2;