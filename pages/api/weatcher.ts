import axios from 'axios';

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

export const fetchCurrentConditions = async () => {
  try {
    const { data } = await axios(
      `https://dataservice.accuweather.com/currentconditions/v1/${process.env.ACCUWEATHER_CITY_ID}?apikey=${process.env.ACCUWEATHER_API_KEY}`,
    );
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
