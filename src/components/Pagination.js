import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  border: 2px solid var(--roxin);
  border-right:0;
  margin: 2rem 0;
  text-align: center;
  font-size: .8rem;
  & > * {
    padding: .5rem;
    flex: 1;
    border-right: 2px solid var(--roxin);
    color: var(--cinza);
    text-decoration: none;
    &[aria-current=page], &.current, &:hover, &:focus, &:active  {
      color: var(--roxo);
    }
    &[disabled] {
      pointer-events: none;
      opacity: .3;
    }
  }
`;

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  base,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;
  return (
    <PaginationStyles>
      <Link disabled={!hasPrevPage} to={`${base}/${prevPage}`} alt="Previous">
        &#60;
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          className={currentPage === 1 && i === 0 ? 'current' : ''}
          to={`${base}/${i+1}`}
          key={`page${i}`}
        >
          {i + 1}
        </Link>
      ))}
      <Link disabled={!hasNextPage} to={`${base}/${nextPage}`} alt="Next">
        &#62;
      </Link>
    </PaginationStyles>
  );
}