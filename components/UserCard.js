import React, {useState} from 'react'
import './UserCard.css'

 const UserCard = ({ name, status }) => {

    const color = status === 1 ? 'green' : 'red'

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>{name}</h2>
                </div>
                <div className={`${color} card-body`}>
                    {status}
                </div>
            </div>
        </div>
    )
}

export default UserCard