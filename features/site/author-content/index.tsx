/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { SpotifyIcon } from 'components/icons/Spotify';
import { IoIosTimer } from 'react-icons/io';
import { RiSunCloudyLine } from 'react-icons/ri';
import { format } from 'date-fns';
import axios from 'axios';
import { SoundProps } from './interface';
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
    const json = await response.json();
    return json;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

interface WeatherProps {
  HasPrecipitation: boolean;
  WeatherIcon: number;
  WeatherText: string;
  Temperature: {
    Imperial: {
      Unit: 'F';
      UnitType: number;
      Value: number;
    };
    Metric: {
      Unit: 'C';
      UnitType: number;
      Value: number;
    };
  };
}

const fetchCurrentConditions = async () => {
  try {
    const { data } = await axios(
      `http://dataservice.accuweather.com/currentconditions/v1/${process.env.ACCUWEATHER_CITY_ID}?apikey=${process.env.ACCUWEATHER_API_KEY}`,
    );
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const getDate = (date: Date) => {
  const formatDate = `${format(date, "dd'rd' MMMM yyyy")} • ${format(
    date,
    'HH:mm:ss a',
  )}`;
  return formatDate;
};

const AuthorContent: React.FC = () => {
  const date = new Date();
  const [sound, setSound] = useState<SoundProps>([] as unknown as SoundProps);
  const [weather, setWeather] = useState<WeatherProps>({} as WeatherProps);
  const [currentDate, setCurrentDate] = useState(`${date}`);

  useEffect(() => {
    fetchCurrentlyPlaying().then((data) => setSound(data));
    fetchCurrentConditions().then(([currWeather]) => setWeather(currWeather));
  }, []);

  useEffect(() => {
    const hasDate = getDate(date);

    if (hasDate) {
      setCurrentDate(hasDate);
    }
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
            <p>
              <RiSunCloudyLine size={18} />
              <span>Its currently &nbsp;</span>
              <strong>{weather?.Temperature?.Metric?.Value} °C &nbsp;</strong>
              <span>{weather?.WeatherText && `( ${weather?.WeatherText} )`}&nbsp;</span>
              <span>in Constantina.</span>
            </p>
          </CurrentlyInformations>
          <Playing>
            {sound.is_playing ? (
              <>
                <PlayingImage>
                  {sound?.item?.album?.images[0].url && (
                    <Image
                      src={sound.item.album.images[0].url}
                      alt="artist of the playing sound"
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
