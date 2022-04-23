import React from 'react';
import Link from 'next/link';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <h3>Logo</h3>
    <nav>
      <Link href="/blog">Blog</Link>
    </nav>
  </Container>
);

export default Header;
