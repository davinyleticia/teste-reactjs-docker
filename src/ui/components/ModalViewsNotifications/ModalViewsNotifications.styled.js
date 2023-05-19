import styled from 'styled-components';
import CloseIco from '../Ico/Close';

export const Container = styled.div`
  background: #ffffff;
  border-bottom: ${(props) => (props.active ? '2px solid #FF7F00' : 'none')};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;

export const Fragment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0 !important;
`;

export const BtnViewsAll = styled.button`
  color: #593493;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem 3rem !important;
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

export const DivisionLine = styled.div`
  background: #000;
  padding: 0.01rem !important;
`;

export const Content = styled.div`
  padding: 1rem !important;
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

export const Description = styled.div``;

export const Close = styled(CloseIco)`
  position: absolute;
`;

export const Blackrop = styled.div`
    position: absolute;
    weight: 100%;
    height: 100%;
    top: 0
    left: 0;
    z-index: 1000;
    background: rgb(0,0,0,0.8);

`;