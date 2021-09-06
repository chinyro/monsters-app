import React from 'react';

const Card = ({username, email, id}) => {
    return (
        <div className='tc bg-mid-gray br3 pa3 ma2 dib grow bw2 shadow-5 pointer'>
          <img alt="monsters" src={`https://robohash.org/${id}?set=set2`} />  
          <div>
              <h2 className='washed-yellow f2 avenir'>{username}</h2>
              <p className='light-blue f5'>{email}</p>
          </div>
        </div>
    )
}

export default Card;