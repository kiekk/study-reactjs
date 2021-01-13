import React, {useEffect} from 'react';
/*
    useEffect를 사용하여 컴포넌트가 마운트(처음 나타났을 때) 됐을 때, 언마운트 됐을 때(사라질 때),
    그리고 업데이트 될 때(특정 props가 바뀔 때) 특정 작업을 처리할 수 있습니다.

    마운트 시 하는 작업
        - props로 받은 값을 컴포넌트의 로컬 상태로 설정할 때
        - 외부 API 요청(REST API)
        - 라이브러리 사용 (D3, Video.js등..)
        - setInterval을 통한 반복작업 혹은 setTimeout을 통한 작업 예약
    언마운트 시 하는 작업
        - setTimeout, setInterval을 사용하여 등록한 작업들 clear 할 때
        - 라이브러리 인스턴스 제거
    리액트 컴포넌트는 기본적으로 부모 컴포넌트가 리랜더링되면 자식 컴포넌트 또한 변경된 값이 없더라도
    리랜더링이 됩니다.
    실제 DOM에 변화가 반영되는 것은 바뀐 내용이 있는 컴포넌트에만 해당합니다. 하지만
    Virtual DOM에는 모든 걸 다 렌더링하고 있는 것입니다.
*/
function User({user, onRemove, onToggle}){

    useEffect( () => {
        console.log('컴포넌트가 화면에 나타남');
        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
        };
    }, [user]);

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.isclick ? 'deepskyblue' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >{user.userid}</b> 
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}   

function UserList2({users, onRemove, onToggle}){    
    return (
        <div>
            {users.map(user => (
                <User 
                    user={user} 
                    key={user.id} 
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    )
}

export default UserList2;