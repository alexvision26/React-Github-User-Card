import React from 'react';

import Card from './Card';

class UserCard extends React.Component {
    constructor() {
        super();

    }

    render() {
        return(
        <div>
            <p>I am Card Container</p>
            <Card/>
        </div>
        )
    }
}

export default UserCard;