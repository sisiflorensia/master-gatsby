import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'; /* Enable to create a custom scoped-styled-components below. Please note that this will only affect the component, not the global style */
import Logo from './Logo';

/*
We can also use this arrow function

const Nave = () => (
    this will be the content
)

*/

// Create a custom Styled Component here. We can also use CSS Selectors inside the component.
const NavStyles = styled.nav`
  margin-bottom: 3rem;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 0.8deg;
    }
    &:nth-child(2) {
      --rotate: -2.8deg;
    }
    &:nth-child(4) {
      --rotate: 2.4deg;
    }
    &:hover {
      --rotate: 3deg;
    }
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--red); 
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/beers">Grab Cold Beers</Link>
        </li>
        <li>
          <Link to="/pizzas">Whole Pizza</Link>
        </li>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/slicemasters">Slicemasters</Link>
        </li>
        <li>
          <Link to="/order">Pre-Order</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
