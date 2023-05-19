import styled from 'styled-components';

export const Container = styled.div`
  * {
    margin: 0 auto;
    padding: 1rem 0;
  }
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 70rem;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
`;

export const DivisionLine = styled.hr`
  background: #1000;
  height: 0.0001rem;
  weight: 100%;
  padding: 0;
`;

export const Fragment = styled.div`
  weight: 0 auto;
`;


export const Blackrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;