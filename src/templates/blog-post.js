import { TimeSlot } from "@styled-icons/entypo/TimeSlot"
import { DateRange } from "@styled-icons/material-twotone/DateRange"
import { graphql } from "gatsby"
import React, { useEffect } from "react"

import Layout from "../components/Layout/layout"
import { NextOrPreviousPost } from "../components/NextOrPreviousPost"
import {
  MainContent,
  PostContainer,
  PostDate,
  PostDescription,
  PostHeader,
  PostTitle,
} from "../components/Post/styles"
import SEO from "../components/seo"
import { GoBackCSS, ArrowRightCSS } from "../components/GoBack"

// TODO: remove comments
// import { Comments } from '../components/Comments';
const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { nextPost, previousPost } = pageContext

  useEffect(() => {
    const doc = document.querySelector("#article")
    doc.innerHTML = post.html
  }, [post.html])

  return (
    <Layout role="main">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <PostContainer>
        <PostHeader role="banner">
          <GoBackCSS to="/">
            <ArrowRightCSS />
            Voltar
          </GoBackCSS>
          <PostDate>
            <DateRange className="date-icon" size={14} />
            <span>{post.frontmatter.date}</span> |
            <TimeSlot className="time-icon" size={14} />
            <span>{post.timeToRead} min de leitura</span>
          </PostDate>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <PostDescription>{post.frontmatter.description}</PostDescription>
        </PostHeader>
        <MainContent>
          <article key={post.id} id="article" />
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
