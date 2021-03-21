import propTypes from 'prop-types';
import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

import { CommentsTitle, CommentsWrapper } from './styles';

const Comments = ({ url, title }) => {

	const completeURL = `https://jlm-si.vercel.app/${url}`
	return (
    <CommentsWrapper>
      <CommentsTitle>Comentários</CommentsTitle>
      <ReactDisqusComments
        shortname="jlm-si"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </CommentsWrapper>
  )
}

Comments.propTypes = {
	url: propTypes.string.isRequired,
	title: propTypes.string.isRequired
}

export { Comments }
