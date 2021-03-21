import React from 'react';

import Layout from '../components/Layout/layout';
import { SearchPosts } from '../components/SearchPosts';
import SEO from '../components/seo';

const Search = () => {
  return (
    <Layout>
      <SEO title={"search posts"} />
      <SearchPosts />
    </Layout>
  )
}

export default Search
