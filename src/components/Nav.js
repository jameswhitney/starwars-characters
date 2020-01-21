import React from 'react';

const Nav = ({ search }) => {
  return(
    <React.Fragment>
      <header className="tc bg-black-60 w-100 fixed z-1 ph3 pv3 pv4-ns ph4-m ph5-l">
        <input
          className="pa2 tc w-60 bg-lightest-blue"
          type="search"
          placeholder="Search Character Cards"
          // TODO: assign onChange to a method
          // that filters cards based on name
          // via text input
          onChange={search}
        />
      </header>
    </React.Fragment>
  );
}

export default Nav;