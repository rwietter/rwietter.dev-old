import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout/layout';
import { ListWapper } from '../components/ListWrapper/styles';
import { Pagination } from '../components/Pagination';
import PostItem from '../components/PostItem';
import SEO from '../components/seo';

const BlogList = props => {
  const posts = props.data.allMarkdownRemark.edges

  const { numberMaxPages, currentPage } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numberMaxPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = !isLast && `/page/${currentPage + 1}`

  return (
    <Layout>
      <ListWapper>
        {posts?.map(post => (
          <PostItem
            key={post.node.id}
            slug={post.node.fields.slug}
            background={post.node.frontmatter.background}
            category={post.node.frontmatter.category}
            date={post.node.frontmatter.date}
            timeToRead={post.node.timeToRead}
            title={post.node.frontmatter.title}
            description={post.node.frontmatter.description}
          />
        ))}
      </ListWapper>
      <SEO title="Home" description="this home contains all the blog posts" />
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numberMaxPages={numberMaxPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query BlogList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
            description
            title
          }
          timeToRead
          fields {
            slug
          }
          id
        }
      }
    }
  }
`

export default BlogList
