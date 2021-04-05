import React from 'react';

import MenuLinks from '../MenuLinks';
import Profile from '../Profile';
import { Separator } from '../Separator/styles';
import SocialLinks from '../SocialLinks';
import * as S from './styles';

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <Profile />
      <SocialLinks />
      <Separator />
      <MenuLinks />
    </S.SidebarWrapper>
  )
}

export default Sidebar
