import React from 'react';

import PostItem from '../PostItem';

const HitPost = ({ hit }) => (
  <PostItem
    key={hit.objectID}
    slug={hit.fields.slug}
    background={hit.background}
    category={hit.category}
    title={hit.title}
    description={hit.description}
    date={hit.date}
    timeToRead={hit.timeToRead}
  />
)

export default React.memo(HitPost)
