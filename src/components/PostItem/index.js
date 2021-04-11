import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styles';

const TagComponent = props =>
  props["data-tag"] ? (
    <S.PostItemTag data-background={props["data-tag"]} />
  ) : (
    <S.PostItemTag
      data-background={() => require("../../images/posts/tag/javascript.svg")}
    />
  )

const PostItem = ({
  slug,
  category,
  date,
  timeToRead = "1",
  title,
  description,
}) => {
  const tagImage = require(`../../images/posts/tag/${
    category ?? "javascript"
  }.svg`)

  return (
    <S.PostItemLink
      to={slug}
      aria-label={`read more about ${title}`}
      title={title}
      cover
      direction="right"
      duration={0.6}
    >
      <S.PostItemWrapper role="banner">
        <TagComponent data-category={category} data-tag={tagImage} />
        <S.PostItemInfo>
          <S.PostItemDate>
            {date} - {timeToRead} minutos de leitura
          </S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  )
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timetoRead: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
