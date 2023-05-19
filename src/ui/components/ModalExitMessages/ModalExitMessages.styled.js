import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border-bottom: ${props => (props.active ? '2px solid #FF7F00' : 'none')};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  width: 424px;
  max-height: 467px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  justify-content: center;
`;

export const Title = styled.h2``;

export const MessagesWarn = styled.span``;

export const ContentBtn = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
`;

export const BtnNo = styled.button`
  background: #ffffff;
  color: #593493
  /* Elevation/8 */

  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 1rem 3rem;
  margin: 1rem;
  border: 1px solid  #593493;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`;
export const BtnYes = styled.button`
  background: #f44336;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 1rem 3rem;
  margin: 1rem;
  border: 1px solid #f44336;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`;
