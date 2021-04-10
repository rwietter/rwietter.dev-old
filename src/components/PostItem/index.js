import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styles';

const TagComponent = ({ category, tag }) => {
  if (tag) return <S.PostItemTag background={tag} />
  return <S.PostItemTag>{category || ""}</S.PostItemTag>
}

const PostItem = ({
  slug,
  category,
  date,
  timeToRead = '1',
  title,
  description,
  postBackground,
}) => {

  const defaultImage = require(`../../images/posts/23-04-2021/android.svg`)
  // const postImage = require(`../../images/posts/${postBackground}`) || defaultImage
  const tagImage = require(`../../images/posts/tag/${category || 'react'}.svg`)
  
  return (
    <S.PostItemLink
      to={slug}
      aria-label={`read more about ${title}`}
      title={title}
      cover
      direction="right"
      duration={0.6}
      data-background={postBackground}
    >
      <S.PostItemWrapper role="banner">
        <TagComponent category={category} tag={tagImage} />
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
