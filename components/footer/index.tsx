import React from 'react';

import { Footer } from './styles';

const FooterComponent: React.FC = () => (
  <Footer>
    <div>{new Date().getFullYear()}</div>
    <div>social</div>
  </Footer>
);

export { FooterComponent };
