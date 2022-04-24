import { styled } from '../../../styles/theme';

export const Container = styled('section', {
  padding: '$3 $2 0 $2',
  color: '$gray50',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',

  '@bp3': {
    padding: '$5 $8 $2 $8',
  },
});

export const Playing = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  background: '$mediumBackground',
  padding: '$1',
  minHeight: '5rem',
  paddingRight: '$2',
  width: 'max-content',
  marginTop: '$1',

  willChange: 'scale',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    cursor: 'pointer',
  },
  '@bp3': {
    minWidth: '350px',
  },
});

export const PlayingImage = styled('div', {});

export const PlayingArtist = styled('div', {
  paddingLeft: '$2',
  display: 'flex',
  paddingTop: '$1',
  alignSelf: 'flex-start',
  p: {
    paddingLeft: '$1',
  },
});

export const CurrentlyInformations = styled('div', {
  padding: '$2 0',
  p: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    lineHeight: 1.5,
    svg: {
      marginRight: '$1',
    },
  },
  'p:first-child': {
    paddingBottom: '$1',
  },
});
