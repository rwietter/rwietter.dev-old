import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout/layout';
import { NextOrPreviousPost } from '../components/NextOrPreviousPost';
import { MainContent, PostContainer, PostDate, PostDescription, PostHeader, PostTitle } from '../components/Post/styles';
import SEO from '../components/seo';

// TODO: remove comments
// import { Comments } from '../components/Comments';
const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { nextPost, previousPost } = pageContext

  return (
    <Layout role="main">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <PostContainer>
      <PostHeader role="banner">
        <PostDate>
          {post.frontmatter.date} | {post.timeToRead} min de leitura
        </PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>
      <MainContent>
        <article
          key={post.id}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </MainContent>
      </PostContainer>
      <NextOrPreviousPost nextPost={nextPost} previousPost={previousPost} />
      {/* <Comments url={post.fields.slug} title={post.frontmatter.title} /> */}
    </Layout>
  )
}

export const query = graphql`
  query loadPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
				image
      }
      fields {
				slug
			}
      html
      timeToRead
      id
    }
  }
`

export default BlogPostTemplate
