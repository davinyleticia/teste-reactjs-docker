import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const Signal = styled.div`
  background: #4caf50;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0.5rem;
  position: relative;
  right: 8px;
  top: -17px;
`;

export const SignalTransparent = styled.div`
  background: transparent;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0.5rem;
`;
