import React from 'react';

function User({user}){
    return (
        <div>
            <b>{user.userid}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList(){
    const users = [
        {
            id:1,
            userid: 'apple',
            name: '김사과',
            email: 'appple@apple.com'
        },
        {
            id:2,
            userid: 'banana',
            name: '반하나',
            email: 'banana@banana.com'
        },
        {
            id:3,
            userid: 'orange',
            name: '오렌지',
            email: 'orange@orange.com'
        },
        {
            id:4,
            userid: 'melon',
            name: '이메론',
            email: 'melon@melon.com'
        },
        {
            id:5,
            userid: 'berry',
            name: '박베리',
            email: 'berry@berry.com'
        }
    ];
    return (
        //1.
        // <div>
        //     <b>{users[0].userid}</b> <span>({users[0].email})</span><br />
        //     <b>{users[1].userid}</b> <span>({users[1].email})</span><br />
        //     <b>{users[2].userid}</b> <span>({users[2].email})</span><br />
        //     <b>{users[3].userid}</b> <span>({users[3].email})</span><br />
        //     <b>{users[4].userid}</b> <span>({users[4].email})</span><br />
        // </div>
        //2.
        // <div>
        //     <div>
        //         <User user={users[0]} />
        //         <User user={users[1]} />
        //         <User user={users[2]} />
        //         <User user={users[3]} />
        //         <User user={users[4]} />
        //     </div>
        // </div>
        //3.
        <div>
            <div>
                {users.map(user => (
                    <User user={user} />
                ))}
            </div>
        </div>
    )
}

export default UserList;