import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { SpotifyIcon } from 'components/icons/Spotify';
import { IoIosTimer } from 'react-icons/io';
import { RiSunCloudyLine } from 'react-icons/ri';
import { SoundProps } from './interface';
import {
  Container, CurrentlyInformations, Playing, PlayingArtist, PlayingImage,
} from './styles';

const fetchCurrentlyPlaying = async (): Promise<SoundProps> => {
  try {
    const response = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${process.env.SPOTIFY_OAUTH_TOKEN}`,
        },
      },
    );
    const json = await response.json();
    return json;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

const AuthorContent: React.FC = () => {
  const [sound, setSound] = useState<SoundProps>([] as unknown as SoundProps);

  useEffect(() => {
    fetchCurrentlyPlaying().then((data) => setSound(data));
  }, []);

  return (
    <Container>
      {sound && (
        <>
          <CurrentlyInformations>
            <p>
              <IoIosTimer size={18} />
              {' '}
              23rd April 2022 • 1:47:16 AM
            </p>
            <p>
              <RiSunCloudyLine size={18} />
              {' '}
              Its currently 10 °C (broken clouds) in London.
            </p>
          </CurrentlyInformations>
          <Playing>
            {sound.is_playing ? (
              <>
                <PlayingImage>
                  {sound?.item?.album?.images[0].url && (
                    <Image
                      src={sound.item.album.images[0].url}
                      alt="ddfbgf"
                      width={60}
                      height={60}
                    />
                  )}
                </PlayingImage>
                <PlayingArtist>
                  <SpotifyIcon />
                  <p>
                    {sound?.item?.artists[0].name}
                    {' '}
                    -
                    {' '}
                    <strong>{sound?.item?.name}</strong>
                  </p>
                </PlayingArtist>
              </>
            ) : (
              <p>Not listening to anything</p>
            )}
          </Playing>
        </>
      )}
    </Container>
  );
};

export { AuthorContent };
