import React from 'react';

function CreateUser({userid, name, email, onChange, onCreate }){
    return (
        <>
        <div>
            <input name="userid" placeholder="아이디" onChange={onChange} value={userid} />
        </div>
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
        </div>
        <div>
            <input name="email" placeholder="이메일" onChange={onChange} value={email} />
        </div>
        <button onClick={onCreate}>등록하기</button>
        </>
    );
}

export default CreateUser;