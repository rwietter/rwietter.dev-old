import AniLink from 'gatsby-plugin-transition-link/AniLink';
import propTypes from 'prop-types';
import React from 'react';

import { ArrowLeft, ArrowRight } from '../Arrow';
import { Container } from './styles';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numberMaxPages,
  prevPage,
  nextPage,
}) => {
  return (
    <Container role="contentinfo">
      {!isFirst && (
        <AniLink
          to={prevPage}
          cover
          direction="left"
          duration={0.6}
          bg="var(--background)"
        >
          <ArrowLeft />
        </AniLink>
      )}
      <p>
        {currentPage} de {numberMaxPages}
      </p>
      {!isLast && (
        <AniLink
          to={nextPage}
          cover
          direction="right"
          duration={0.6}
          bg="var(--background)"
        >
          <ArrowRight />
        </AniLink>
      )}
    </Container>
  )
}

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numberMaxPages: propTypes.number.isRequired,
  prevPage: propTypes.string.isRequired,
  nextPage: propTypes.string.isRequired,
}

export { Pagination }
