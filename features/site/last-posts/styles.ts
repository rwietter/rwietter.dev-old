import { styled } from '../../../styles/theme';

export const LastPostContainerLink = styled('div', {
  width: '100%',
  padding: '$3 $2',
  marginTop: '$7',
  '@bp3': {
    padding: '$5 $8 $2 $8',
  },
});

export const LastPostContainerDescription = styled('div', {
  h2: {
    fontSize: '$6',
    fontWeight: 900,
    '@bp2': {
      fontSize: '$8',
    },
  },
  p: {
    fontSize: '$2',
    fontWeight: 300,
    lineHeight: '1.5',
    margin: '$1 0 $4 0',

    '@bp2': {
      fontSize: '$3',
    },
  },
});

export const LastPostContainer = styled('section', {
  display: 'flex',
  background: '$mediumBackground',
  padding: '$2',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'transform 0.7s, box-shadow 0.3s ease',
  '& + &': {
    marginTop: '$3',
  },
  '&:hover': {
    transform: 'translateX(0.5rem)',
    boxShadow: '-10px 5px 15px -3px #527',
  },
});

export const LastPostContainerImage = styled('div', {
  paddingRight: '$2',
  img: {
    borderRadius: '50%',
    width: 40,
    height: 40,
  },
});
