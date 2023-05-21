import styled from 'styled-components';

export const Cads = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 2rem 0px;
  gap: 1rem;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin: 1rem !important;
  }
`;
