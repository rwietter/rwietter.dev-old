import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styles';

const PostItem = ({
  slug,
  background = "var(--postColor)",
  category,
  date,
  timeToRead,
  title,
  description,
  postBackground,
}) => {
  
  const defaultImage = require(`../../images/posts/23-04-2021/android.${'svg' || 'png' || 'jpg'}`);
	const postImage = require(`../../images/posts/${postBackground}`) || defaultImage

  return (
    <S.PostItemLink
      to={slug}
      role="link"
      aria-label={`Read more about ${title}`}
      title={title}
      cover
      direction="right"
      duration={0.6}
      bg="var(--background)"
      background={postImage}
      loading="lazy"
    >
      <S.PostItemWrapper role="banner">
        <S.PostItemTag background={background}>{category}</S.PostItemTag>
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
  timetoRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
