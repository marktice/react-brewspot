import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ routes }) {
  return (
    <nav>
      {routes.map(({ pathName, uri }, index) => {
        return (
          <Link key={index} to={uri}>
            {pathName}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
