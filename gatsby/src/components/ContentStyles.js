import React from 'react';
import styled from 'styled-components';
import stripes from '../assets/images/stripes.svg';

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  background: white url(${stripes});
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`;

export default function Content({ children }) {
  return (
    <SiteBorderStyles>
      <ContentStyles>{children}</ContentStyles>
    </SiteBorderStyles>
  );
}
