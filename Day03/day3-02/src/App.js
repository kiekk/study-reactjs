import React, { useReducer, useRef, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countClickUsers(users){
  console.log('선택한 사용자 카운트');
  return users.filter(user => user.isclick).length;
}

const initialState = {
  inputs: {
    userid: '',
    name: '',
    email: ''
  },
  users: [
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
  ]
};

function reducer(state, action){
  switch(action.type){
    case 'CHANGE_INPUT' :
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.id ? {...user, isclick: !user.isclick} : user
        )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(6);

  const {users} = state;
  const {userid, name, email} = state.inputs;

  const onChange = useCallback(e => {
    const {name, value}  = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  }, []);

  const onCreate = useCallback( () => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        userid,
        name,
        email
      }
    });
    nextId.current += 1;
  }, [userid, name, email]);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  const count = useMemo( () => countClickUsers(users), [users]);

  return (
    <>
    <CreateUser 
      userid={userid} 
      name={name} 
      email={email} 
      onChange={onChange} 
      onCreate={onCreate}
    />
    <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
    <div>선택한 사용자 수 : {count}</div>
    </>
  )
}

export default App;
