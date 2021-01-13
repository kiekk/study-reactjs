import React, { useState, useRef, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

/*
  useMemo
  "memoized" 의미이며, 이전에 계산 한 값을 재사용한다는 의미로 사용되는 React hook입니다.
  useMemo의 첫번째 파라미터는 어떻게 연산할지 정의하는 함수를 입력하고, 두번째 파라미터에는 deps 배열을 넣어주면 됩니다.

  useCallback
  특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용합니다.

  useReducer
  컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있습니다.
  상태 업데이트 로직을 컴포넌트 외부에 작성할 수도 있고, 다른 파일에 작성 후 불러와서 사용할 수 있습니다.
  

*/

function countClickUsers(users){
  console.log('선택한 사용자 카운트');
  return users.filter(user => user.isclick).length;
}

function App() {

  const [inputs, setInputs] = useState({
    userid: '',
    name: '',
    email: '',
    isclick: true
  });

  const {userid, name, email} = inputs;

  const onChange = useCallback(
    e => {
      const {name, value } = e.target;
      setInputs({
        ...inputs,
        [name] : value
      });
    },
    [inputs]
  );

  const [users, setUsers] = useState([
    {
        id:1,
        userid: 'apple',
        name: '김사과',
        email: 'appple@apple.com',
        isclick: true
    },
    {
        id:2,
        userid: 'banana',
        name: '반하나',
        email: 'banana@banana.com',
        isclick: false
    },
    {
        id:3,
        userid: 'orange',
        name: '오렌지',
        email: 'orange@orange.com',
        isclick: false
    },
    {
        id:4,
        userid: 'melon',
        name: '이메론',
        email: 'melon@melon.com',
        isclick: false
    },
    {
        id:5,
        userid: 'berry',
        name: '박베리',
        email: 'berry@berry.com',
        isclick: false
    }
]);

  const nextId = useRef(6); //useRef()를 사용할 때 매개변수를 넣어주면 그 값이 .current 값의 기본값이 됩니다.

  const onCreate = useCallback(
    () => {
      const user = {
        id: nextId.current,
        userid,
        name,
        email
      }
      setUsers([...users, user]);

      setInputs({
        userid: '',
        name: '',
        email: ''
      });
      nextId.current += 1;
  }, [users, userid, name, email]);

  const onRemove = useCallback(
    id => {
      //user.id가 파라미터로 일치하지 않는 요소만 추출해서 새로운 배열을 만듭니다.
      setUsers(users.filter(user => user.id !== id))
    },
    [users]
  );

  const onToggle = useCallback(
    id => {
      setUsers(
        users.map(user => 
          user.id === id ? { ...user, isclick : !user.isclick} : user
        )
      );
    },
    [users]
  );

  const count  = useMemo( () => countClickUsers(users), [users]);

  return (
    //<InputTest3/>
    //<UserList />
    <>
    <CreateUser
      userid={userid}
      name={name}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>선택한 사용자 수 : {count}</div>
    </>
  )
}

export default App;
