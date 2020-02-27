import React from 'react';


const Card = props => {

    // console.log(props.profile)
    return (
        <div className='card'>
            <img src={props.profile.avatar_url} width='150px' height='150px' alt={`${props.profile.name}'s avatar`}/>
            <div className='card-info'>
                <p><strong>Username:</strong> {props.profile.login}</p>
                <p><strong>Name:</strong> {props.profile.name}</p>
                <p><strong>Followers:</strong> {props.profile.followers}</p>
                <p><strong>Following:</strong> {props.profile.following}</p>
            </div>
        </div>
    )
}

export default Card;