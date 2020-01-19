import React from 'react';

const Card = () => {
  return(
    // Style for card uses tachyons instead of creating css file.
    // Fix card spacing in Cardlist component
    <article className="cardBackground dib br3 pa2 ma4 b--black-30 grow-large shadow-4">
      <div className="flex items-end">
        <img className="br-100 h4 w4 ba bw2 b--black-40 pa2 bg-washed-blue" 
          alt='robots'
          // dicebear.com used to generated random avatars for cards
          src={`https://avatars.dicebear.com/v2/bottts/${`test`}.svg`} 
        />
        <h3 className="fc mb2 white">{`Test Name`}</h3>
      </div>
  </article>
  );
}

export default Card;