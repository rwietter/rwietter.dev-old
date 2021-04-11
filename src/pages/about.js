import React from 'react';

import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import SocialLinks from '../components/SocialLinks';
import { Page } from '../styles/about.style';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="about me" description="this page informs me and what i do" />
      <Page.layout.Container>
        <Page.layout.Author>
          <Page.with.Title>
            Hi, I'm Maurício Witter
            <Page.with.Point>.</Page.with.Point>
          </Page.with.Title>
          <Page.with.Username>@rwietter</Page.with.Username>
          <Page.with.Position>Front-end developer</Page.with.Position>
          <SocialLinks data-flex="flex" />
        </Page.layout.Author>
      </Page.layout.Container>
      <Page.layout.Area>
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Page.layout.Area>
    </Layout>
  )
}

export default AboutPage
