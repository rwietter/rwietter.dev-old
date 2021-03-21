import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Layout from '../src/components/Layout/layout';
import PostItem from '../src/components/PostItem';
import SEO from '../src/components/seo';

const IndexPage = () => {
	const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
  )
	
	const posts = allMarkdownRemark?.edges;
	
	console.log(posts)
	return (
    <Layout>
      {posts &&
        posts?.map(post => (
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
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
