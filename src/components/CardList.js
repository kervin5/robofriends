import React from 'react';
import Card from './Card';

const cardList = ({robots}) => {

    // throw new Error('What');

    const cardsToRender = robots.map(user => <Card id={user.id} name={user.name} email={user.email} key={user.id}/>);

    return (
        <div>
            {cardsToRender}
        </div>
    );
};

export default cardList;