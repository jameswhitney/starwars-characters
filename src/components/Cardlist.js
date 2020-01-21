import React from 'react';
import Card from './Card';

// Cardlist returns an array of card components
// User object passed as prop from App.js 
const Cardlist = ({ user }) => {
  return(
    <div className="mw-none center pt6 ph5-ns tc">
      {/* Loop through user object and map id, name and email to Card component */}
      {
        user.map((user, i) => {
          return(
          <Card 
            key={i}
            id={user.id}
            name={user.name}
            email={user.email}
          />
          );
        }) 
      }
    </div>
  );
}

export default Cardlist;