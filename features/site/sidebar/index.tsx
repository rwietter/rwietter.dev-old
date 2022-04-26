import React from 'react';

import { Container } from './styles';
import { Author } from '../components/author/author';
import { SidebarSocialIcons } from '../components/social/social';

const Sidebar: React.FC = () => (
  <Container>
    <div>
      <Author />
      <SidebarSocialIcons />
    </div>
    {/* <nav>
      <Link href="/blog">Blog</Link>
    </nav> */}
  </Container>
);

export { Sidebar };
