import React from 'react';
import Card from './Card';

// Cardlist returns an array of card components
// User object passed as prop from App.js 
const Cardlist = ({ user }) => {
  return(
    <div className="mw-none center pt6 ph5-ns tc">
      {/* Using user values for testing. Next iteration will be dynamic */}
      <Card id={user[0].id} name={user[0].name} email={user[0].email}/>
      <Card id={user[1].id} name={user[1].name} email={user[1].email}/>
      <Card id={user[2].id} name={user[2].name} email={user[2].email}/>
      <Card id={user[3].id} name={user[3].name} email={user[3].email}/>
    </div>
  );
}

export default Cardlist;