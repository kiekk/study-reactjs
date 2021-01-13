import React, {useState, useRef} from 'react';
//import InputTest3 from './InputTest3';
//import UserList from './UserList';
import UserList2 from './UserList2';
import CreateUser from './CreateUser';

function App() {

  const [inputs, setInputs] = useState({
    userid: '',
    name: '',
    email: '',
    isclick: true
  });

  const {userid, name, email} = inputs;

  const onChange = e => {
    const {name, value } = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }

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
  const onCreate = () => {

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
  };

  const onRemove = id => {
    //user.id가 파라미터로 일치하지 않는 요소만 추출해서 새로운 배열을 만듭니다.
    setUsers(users.filter(user => user.id !== id))
  };

  const onToggle = id => {

    setUsers(
      users.map(user => 
        user.id === id ? { ...user, isclick : !user.isclick} : user
      )
    );
  };

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
    <UserList2 users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  )
}

export default App;
