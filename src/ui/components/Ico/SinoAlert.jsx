import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  padding: .5rem !important;
  margin: 0 !important;
`;

function SinoALertIco() {
  return (
    <Container>
      {' '}
      <svg
        width="43"
        height="54"
        viewBox="0 0 43 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.5001 53.2137C24.4334 53.2137 26.8334 50.7913 26.8334 47.8307H16.1667C16.1667 50.7913 18.5667 53.2137 21.5001 53.2137ZM37.5001 37.0645V23.6069C37.5001 15.3438 33.1534 8.42661 25.5001 6.59636V4.76612C25.5001 2.53215 23.7134 0.728821 21.5001 0.728821C19.2867 0.728821 17.5001 2.53215 17.5001 4.76612V6.59636C9.87341 8.42661 5.50008 15.3169 5.50008 23.6069V37.0645L0.166748 42.4476V45.1391H42.8334V42.4476L37.5001 37.0645ZM32.1667 39.7561H10.8334V23.6069C10.8334 16.9319 14.8601 11.495 21.5001 11.495C28.1401 11.495 32.1667 16.9319 32.1667 23.6069V39.7561Z"
          fill="black"
          fillOpacity="0.54"
        />
      </svg>
    </Container>
  );
}

export default SinoALertIco;
