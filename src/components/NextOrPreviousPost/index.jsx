import propTypes from 'prop-types';
import React from 'react';

import { ArrowLeft, ArrowRight } from '../Arrow';
import { RecommendedLink, RecommendedWrapper } from './styles';

const NextOrPreviousPost = ({ nextPost, previousPost }) => {
  return (
    <RecommendedWrapper>
      {previousPost && (
        <RecommendedLink
          key={previousPost.id}
          to={previousPost.fields.slug}
          cover
          direction="left"
          duration={0.6}
          bg="var(--background)"
          className="previous"
        >
          <ArrowLeft stroke="var(--postColor)" />
          {previousPost.frontmatter.title}
        </RecommendedLink>
      )}
      {nextPost && (
        <RecommendedLink
          key={nextPost.id}
          to={nextPost.fields.slug}
          className="next"
          cover
          direction="right"
          duration={0.6}
          bg="var(--background)"
        >
          {nextPost.frontmatter.title}
          <ArrowRight stroke="var(--postColor)" />
        </RecommendedLink>
      )}
    </RecommendedWrapper>
  )
}

NextOrPreviousPost.propTypes = {
  nextPost: propTypes.shape({
    id: propTypes.number,
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
  }),
  previousPost: propTypes.shape({
    id: propTypes.number,
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
  }),
}

export { NextOrPreviousPost }
