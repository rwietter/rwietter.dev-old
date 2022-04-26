import { styled } from 'styles/theme';

export const SocialContainer = styled('div', {
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  cursor: 'pointer',
  paddingTop: '$2',

  a: {
    color: '$gray50',
    display: 'inline-block',
    paddingTop: '$2',
    textDecoration: 'none',
    fontSize: '$2',
    transition: 'color 0.3s ease',

    '&:hover': {
      color: '$secondary',
    },
  },
  'a + a': {
    paddingLeft: '$2',
  },

  '@bp5': {
    display: 'flex',
  },
});
