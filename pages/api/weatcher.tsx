import useSWR from 'swr';
import { RiSunCloudyLine } from 'react-icons/ri';

export interface WeatherProps {
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

const API_WEATHER = `https://dataservice.accuweather.com/currentconditions/v1/${process.env.ACCUWEATHER_CITY_ID}?apikey=${process.env.ACCUWEATHER_API_KEY}`;

const fetcher = () => fetch(API_WEATHER).then((res) => res.json());

export const WeatherConditions = () => {
  const { data, error } = useSWR(API_WEATHER, fetcher, { refreshInterval: 20000 });

  if (error || !data) return <div>Failed to load</div>;

  const [weather] = data;

  console.log(weather);

  return (
    <div>
      {weather?.Temperature && (
      <p>
        <RiSunCloudyLine size={18} />
        <span>Its currently &nbsp;</span>
        <strong>
          {weather?.Temperature?.Metric?.Value}
          {' '}
          °C &nbsp;
        </strong>
        <span>
          {weather?.WeatherText && `( ${weather.WeatherText} )`}
          &nbsp;
        </span>
        <span>in Constantina.</span>
      </p>
      )}
    </div>
  );
};
