import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  justify-content: center;
`;

export const Page = styled.li`
  width: 50px;
  height: 50px;
  cursor: pointer;
  list-style-type: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: .5rem !important;
  padding: 0 !important;
`;
