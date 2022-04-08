import React from 'react';

import MenuLinks from '../MenuLinks';
import Profile from '../Profile';
import { Separator } from '../Separator/styles';
import SocialLinks from '../SocialLinks';
import * as S from './styles';

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <div>
        <Profile />
        <Separator />
        <MenuLinks />
      </div>
      <SocialLinks />
    </S.SidebarWrapper>
  )
}

export default Sidebar
