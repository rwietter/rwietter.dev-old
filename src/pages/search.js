import React from 'react';

import Layout from '../components/Layout/layout';
import { SearchPosts } from '../components/SearchPosts';
import SEO from '../components/seo';

const Search = () => {
  return (
    <Layout>
      <SEO
        title="search for posts"
        description="here, you can search for a specific post from all posts"
      />
      <SearchPosts />
    </Layout>
  )
}

export default Search
