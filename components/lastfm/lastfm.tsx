import useSWR from 'swr';
import { SpotifyIcon } from 'components/icons/Spotify';
import Image from 'next/image';
import { Playing, PlayingImage, PlayingArtist } from './styles';

interface TrackProps {
  artist: {
    '#text': string;
  },
  image: {
    size: string;
    '#text': string;
  }[]
  name: string;
  url: string;
}

const USERNAME = process.env.LASTFM_USERNAME!;
const API_KEY = process.env.LASTFM_API_KEY!;
const API_LAST_FM = `//ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`;
const fetcher = () => fetch(API_LAST_FM).then((res) => res.json());

export const LastFMTrack = () => {
  const { data, error } = useSWR(API_LAST_FM, fetcher, { refreshInterval: 10000 });

  if (error) return <div>...</div>;

  const track: TrackProps = data?.recenttracks?.track[0];

  return (
    <Playing>
      {track ? (
        <>
          <PlayingImage>
            {track.image[0]['#text'] ? (
              <Image
                src={track.image[0]['#text']}
                alt="artist of the playing sound"
                width={90}
                height={90}
              />
            ) : (
              <Image
                src="https://res.cloudinary.com/ddwnioveu/image/upload/v1650762898/photo-1535925191244-17536ca4f8b6_qz4ykc.jpg"
                alt="artist of the playing sound"
                width={90}
                height={90}
              />
            )}
          </PlayingImage>
          <PlayingArtist>
            <SpotifyIcon />
            <p>
              {track.artist['#text']}
              {' '}
              -
              {' '}
              <strong>{track.name}</strong>
            </p>
          </PlayingArtist>
        </>
      ) : (
        <>
          <PlayingImage>
            <Image
              src="https://res.cloudinary.com/ddwnioveu/image/upload/v1650762898/photo-1535925191244-17536ca4f8b6_qz4ykc.jpg"
              alt="artist of the playing sound"
              width={90}
              height={90}
            />
          </PlayingImage>
          <PlayingArtist>
            <SpotifyIcon />
            <p>
              Not listening
              {' '}
              <span>to anything</span>
            </p>
          </PlayingArtist>
        </>
      )}
    </Playing>
  );
};
