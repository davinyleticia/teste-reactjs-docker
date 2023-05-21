import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #ffffff;

  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 1rem;
  position: absolute;
  right: 0;
  margin: 0 0.5rem;
  z-index: 100;
`;

export const Fragment = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BtnViewsAll = styled.button`
  color: #593493;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  justify-content: center;
  border-radius: 0.5rem;
  border: solid 1px #593493;
  font-weight: 500;
  cursor: pointer;
`;

export const ContentViewsAll = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivisionLine = styled.hr`
  background: #1000;
  height: .0001rem;
  weight: 100%;
  margin: 1rem;
  padding: 0;
`;
