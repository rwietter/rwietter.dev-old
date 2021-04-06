import propTypes from 'prop-types';
import React from 'react';

import { ArrowLeft, ArrowRight } from '../Arrow';
import { RecommendedLink, RecommendedWrapper } from './styles';

const NextOrPreviousPost = ({ nextPost, previousPost }) => {
  return (
    <RecommendedWrapper>
      {nextPost && (
        <RecommendedLink
          key={nextPost.id}
          to={nextPost.fields.slug}
          cover
          direction="left"
          duration={0.6}
          bg="var(--background)"
          className="previous"
        >
          <ArrowLeft stroke="var(--postColor)" />
          {nextPost.frontmatter.title}
        </RecommendedLink>
      )}
      {previousPost && (
        <RecommendedLink
          key={previousPost.id}
          to={previousPost.fields.slug}
          className="next"
          cover
          direction="right"
          duration={0.6}
          bg="var(--background)"
        >
          {previousPost.frontmatter.title}
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
