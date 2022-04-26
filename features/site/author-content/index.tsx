/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { SpotifyIcon } from 'components/icons/Spotify';
import { IoIosTimer } from 'react-icons/io';
import { RiSunCloudyLine } from 'react-icons/ri';
import { SoundProps } from './interface';
import { getDate } from '../../../utils/get-date';
import { fetchCurrentConditions, WeatherProps } from '../../../pages/api/weatcher';
import {
  Container,
  CurrentlyInformations,
  Playing,
  PlayingArtist,
  PlayingImage,
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
    return await response.json();
  } catch (error: any) {
    return Promise.reject(error);
  }
};

const AuthorContent: React.FC = () => {
  const date = new Date();
  const [sound, setSound] = useState<SoundProps>([] as unknown as SoundProps);
  const [weather, setWeather] = useState<WeatherProps>({} as WeatherProps);
  const [currentDate, setCurrentDate] = useState(getDate(date));

  useEffect(() => {
    fetchCurrentlyPlaying().then((data) => setSound(data));
    fetchCurrentConditions().then(([currWeather]) => setWeather(currWeather));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const updateDate = new Date();
      setCurrentDate(getDate(updateDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      {sound && (
        <>
          <CurrentlyInformations>
            <p>
              <IoIosTimer size={18} />
              {currentDate}
            </p>
            {weather?.Temperature && (
            <p>
              <RiSunCloudyLine size={18} />
              <span>Its currently &nbsp;</span>
              <strong>{weather?.Temperature?.Metric?.Value} °C &nbsp;</strong>
              <span>{weather?.WeatherText && `( ${weather?.WeatherText} )`}&nbsp;</span>
              <span>in Constantina.</span>
            </p>
            )}
          </CurrentlyInformations>
          <Playing>
            {sound.is_playing ? (
              <>
                <PlayingImage>
                  {sound?.item?.album?.images[0].url && (
                    <Image
                      src={sound.item.album.images[0].url}
                      alt="artist of the playing sound"
                      width={90}
                      height={90}
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
                  <p>Not listening <span>to anything</span></p>
                </PlayingArtist>
              </>
            )}
          </Playing>
        </>
      )}
    </Container>
  );
};

export { AuthorContent };
