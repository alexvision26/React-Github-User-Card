import React from 'react';

import Card from './Card';

const UserCard = props => {

    // console.log(props.myCard)

    return(
    <div className='card-container'>
        <Card profile={props.myCard}/>

        {props.followers.map(item => {
            return (
                <Card profile={item} />
            )
        })}
    </div>
    )
}

export default UserCard;