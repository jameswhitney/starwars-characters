import React from 'react';

const Card = ({ id, name, email }) => {
  return(
    // Style for card uses tachyons instead of creating css file.
    //
    <article className="dib br3 pa2 ma4 b--black-30 grow-large shadow-4">
      <div className="flex items-end">
        <img className="br-100 h4 w4 ba bw2 b--black-40 pa2 bg-washed-blue" 
          alt='robots'
          // dicebear.com used to generated random avatars for cards
          src={`https://avatars.dicebear.com/v2/bottts/${id}.svg`} 
        />
        <div className="tc pa2 ma2 white">
          <h3>{name}</h3>
          <h4>{email}</h4> 
        </div>
      </div>
    </article>
  );
}

export default Card;