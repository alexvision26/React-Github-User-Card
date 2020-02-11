import React from 'react';


const Card = props => {

    // console.log(props.profile)
    return (
        <div className='card'>
            <img src={props.profile.avatar_url} width='150px' height='150px' alt={`${props.profile.name}'s avatar`}/>
            <div className='card-info'>
                <p>Username: {props.profile.login}</p>
                <p>Name: {props.profile.name}</p>
                <p>Followers: {props.profile.followers}</p>
                <p>Following: {props.profile.following}</p>
            </div>
        </div>
    )
}

export default Card;