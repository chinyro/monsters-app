import React from 'react';
import Card from './Card.js'

const CardList = ({monsters}) => {
    return (
        <div>
            {
                monsters.map((user, i) => {
                    return (
                        <Card 
                        key={i} 
                        id={monsters[i].id} 
                        username={monsters[i].username} 
                        email={monsters[i].email} 
                        />
                    );
                })
            }   
        </div>  
    );
}

export default CardList;