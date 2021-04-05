import React, {useState} from 'react'
import UserCard from './components/UserCard'
const Container = () => {

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Walker Laury",
            status: 1
        },
        {
            id: 2,
            name: "Johnny Walker",
            status: 0
        },
        {
            id: 3,
            name: "Joey Kanga",
            status: 1
        },
        {
            id: 4,
            name: "Walker Laury",
            status: 0
        },
        

    ])
    

    return (
        <div>
            {
                users.map(user=> {
                    return <UserCard key={user.id} name={user.name} status={user.status}/>
                })
            }
        </div>
    )
}

export default Container