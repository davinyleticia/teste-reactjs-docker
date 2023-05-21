import React from 'react';
import { Container, Page } from './pagination';

const Pagination = ({ totalPages, handleClick, currentPage }) => {
  return (
    <Container>
      <Page
        onClick={() =>
          currentPage === 1 ? null : handleClick(currentPage - 1)
        }
        style={{
          color: 'rgba(0, 0, 0, 0.87)',
          background: 'rgba(0, 0, 0, 0.04)',
          borderRadius: '50%',
        }}
      >
        {' < '}
      </Page>

      {Array.from({ length: totalPages }, (_, index) => (
        <>
          <Page
            key={index}
            onClick={() => handleClick(index + 1)}
            style={{
              fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
              color:
                currentPage === index + 1
                  ? ' rgba(0, 0, 0, 0.87)'
                  : 'rgba(0, 0, 0, 0.98)',
              background:
                currentPage === index + 1 ? 'rgba(0, 0, 0, 0.04)' : '',
              borderRadius: '50%',
            }}
          >
            {index + 1}
          </Page>
        </>
      ))}
      <Page
        onClick={() =>
          currentPage === totalPages ? null : handleClick(currentPage + 1)
        }
        style={{
          color: 'rgba(0, 0, 0, 0.87)',
          background: 'rgba(0, 0, 0, 0.04)',
          borderRadius: '50%',
        }}
      >
        {' > '}
      </Page>
    </Container>
  );
};

export default Pagination;
