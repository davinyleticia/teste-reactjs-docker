import styled from 'styled-components';
import CloseIco from '../Ico/Close';

export const Container = styled.div`
  background: #ffffff;
  border-bottom: ${props => (props.active ? '2px solid #FF7F00' : 'none')};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  width: 424px;
  max-height: 467px;
`;

export const Fragment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 !important;
`;

export const BtnViewsAll = styled.button`
  color: #593493;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 3rem !important;
  justify-content: center;
  border-radius: 0.5rem;
  border: solid 1px #593493;
  font-weight: 500;
  cursor: pointer;
`;

export const ContentViewsAll = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const DivisionLine = styled.div`
  background: #000;
  padding: 0.01rem !important;
`;

export const Content = styled.div`
  padding: 1rem !important;
  height: 100%;
`;

export const ContentInfo = styled.div`
  padding-left: 1rem !important;
`;

export const Title = styled.div`
  padding: 0 !important;
  margin: 0 !important;
`;

export const Data = styled.div`
  padding: 0 !important;
  margin: 0 !important;
`;

export const Description = styled.div`
  padding: 1rem 0;
`;

export const Close = styled(CloseIco)`
  margin-inline-start: auto !important;
  width: 100%;

`;
