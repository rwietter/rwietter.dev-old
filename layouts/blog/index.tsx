import React from 'react';
import { Articles } from '../../components/articles';
import Query from '../../components/query';
import { ARTICLES_QUERY } from '../../queries/articles/articles';

const BlogPage = () => (
  <div>
    <div>
      <div>
        <h1>Strapi blog</h1>
        <Query query={ARTICLES_QUERY}>
          {({ data: { articles } }: any) => <Articles articles={articles.data} />}
        </Query>
      </div>
    </div>
  </div>
);

export default BlogPage;
