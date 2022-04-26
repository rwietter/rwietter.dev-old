import { styled } from 'styles/theme';

export const Container = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '$mediumBackground',
  height: '4rem',
  position: 'fixed',
  padding: '$4 $2',
  zIndex: 4,
  textAlign: 'center',
  width: '100%',
  transition: 'background 0.35s',

  '@bp5': {
    width: '13rem',
    height: '100vh',
    flexDirection: 'column',
  },
});
