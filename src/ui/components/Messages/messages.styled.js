import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1rem 1rem 1rem;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 1rem !important;
`;

export const Title = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 700;
  padding-bottom: 0.3rem;
  padding: 0 !important;
  cursor: pointer;
`;

export const Data = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  padding: 0 !important;
  cursor: pointer;
`;
