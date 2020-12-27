import React from 'react';
import { Link } from 'gatsby'

/*
We can also use this arrow function

const Nave = () => (
    this will be the content
)

*/

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beers">Beers</Link>
        </li>
      </ul>
    </nav>
  );
}
