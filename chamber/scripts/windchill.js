String.prototype.toTitleCase = function () {
  let words = this.toLowerCase().split(" ");
  let ttlWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1, word.length)
  );
  return ttlWords.join(" ");
};

const weatherData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1710363600,
      main: {
        temp: 50.49,
        feels_like: 47.12,
        temp_min: 46.65,
        temp_max: 50.49,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 993,
        humidity: 40,
        temp_kf: 2.13,
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
      ],
      clouds: { all: 20 },
      wind: { speed: 2.04, deg: 200, gust: 2.53 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-03-13 21:00:00",
    },
    {
      dt: 1710374400,
      main: {
        temp: 47.16,
        feels_like: 47.16,
        temp_min: 40.48,
        temp_max: 47.16,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 995,
        humidity: 52,
        temp_kf: 3.71,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: { all: 46 },
      wind: { speed: 0.16, deg: 188, gust: 1.25 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-03-14 00:00:00",
    },
    {
      dt: 1710385200,
      main: {
        temp: 42.55,
        feels_like: 42.55,
        temp_min: 38.59,
        temp_max: 42.55,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 996,
        humidity: 68,
        temp_kf: 2.2,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      clouds: { all: 73 },
      wind: { speed: 2.51, deg: 174, gust: 2.53 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-03-14 03:00:00",
    },
    {
      dt: 1710396000,
      main: {
        temp: 37.22,
        feels_like: 37.22,
        temp_min: 37.22,
        temp_max: 37.22,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 996,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.39, deg: 165, gust: 1.54 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-03-14 06:00:00",
    },
    {
      dt: 1710406800,
      main: {
        temp: 34.34,
        feels_like: 34.34,
        temp_min: 34.34,
        temp_max: 34.34,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 997,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.28, deg: 1, gust: 1.5 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-03-14 09:00:00",
    },
    {
      dt: 1710417600,
      main: {
        temp: 35.83,
        feels_like: 35.83,
        temp_min: 35.83,
        temp_max: 35.83,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 998,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.52, deg: 8, gust: 1.68 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-03-14 12:00:00",
    },
    {
      dt: 1710428400,
      main: {
        temp: 47.16,
        feels_like: 47.16,
        temp_min: 47.16,
        temp_max: 47.16,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 998,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 97 },
      wind: { speed: 1.7, deg: 125, gust: 1.61 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-03-14 15:00:00",
    },
    {
      dt: 1710439200,
      main: {
        temp: 53.78,
        feels_like: 51.76,
        temp_min: 53.78,
        temp_max: 53.78,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 997,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 91 },
      wind: { speed: 2.28, deg: 153, gust: 4.9 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-03-14 18:00:00",
    },
    {
      dt: 1710450000,
      main: {
        temp: 52.61,
        feels_like: 50.77,
        temp_min: 52.61,
        temp_max: 52.61,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 997,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: { all: 81 },
      wind: { speed: 2.57, deg: 46, gust: 3.47 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-03-14 21:00:00",
    },
    {
      dt: 1710460800,
      main: {
        temp: 43.07,
        feels_like: 43.07,
        temp_min: 43.07,
        temp_max: 43.07,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 998,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 90 },
      wind: { speed: 0.98, deg: 337, gust: 2.33 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-03-15 00:00:00",
    },
    {
      dt: 1710471600,
      main: {
        temp: 40.62,
        feels_like: 40.62,
        temp_min: 40.62,
        temp_max: 40.62,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 997,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.01, deg: 19, gust: 1.23 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-03-15 03:00:00",
    },
    {
      dt: 1710482400,
      main: {
        temp: 40.03,
        feels_like: 40.03,
        temp_min: 40.03,
        temp_max: 40.03,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 995,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.16, deg: 135, gust: 1.41 },
      visibility: 10000,
      pop: 0.02,
      sys: { pod: "n" },
      dt_txt: "2024-03-15 06:00:00",
    },
    {
      dt: 1710493200,
      main: {
        temp: 39.43,
        feels_like: 39.43,
        temp_min: 39.43,
        temp_max: 39.43,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 992,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.48, deg: 54, gust: 4.05 },
      visibility: 2550,
      pop: 0.98,
      rain: { "3h": 4.68 },
      sys: { pod: "n" },
      dt_txt: "2024-03-15 09:00:00",
    },
    {
      dt: 1710504000,
      main: {
        temp: 37.6,
        feels_like: 34.79,
        temp_min: 37.6,
        temp_max: 37.6,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 989,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.76, deg: 45, gust: 7.16 },
      visibility: 126,
      pop: 1,
      rain: { "3h": 8.44 },
      sys: { pod: "d" },
      dt_txt: "2024-03-15 12:00:00",
    },
    {
      dt: 1710514800,
      main: {
        temp: 37.15,
        feels_like: 33.67,
        temp_min: 37.15,
        temp_max: 37.15,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 987,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.36, deg: 36, gust: 9.08 },
      visibility: 37,
      pop: 1,
      rain: { "3h": 3.5 },
      sys: { pod: "d" },
      dt_txt: "2024-03-15 15:00:00",
    },
    {
      dt: 1710525600,
      main: {
        temp: 37.53,
        feels_like: 34.86,
        temp_min: 37.53,
        temp_max: 37.53,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 986,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [{ id: 601, main: "Snow", description: "snow", icon: "13d" }],
      clouds: { all: 100 },
      wind: { speed: 3.6, deg: 22, gust: 7.65 },
      visibility: 30,
      pop: 1,
      snow: { "3h": 1.63 },
      sys: { pod: "d" },
      dt_txt: "2024-03-15 18:00:00",
    },
    {
      dt: 1710536400,
      main: {
        temp: 38.41,
        feels_like: 38.41,
        temp_min: 38.41,
        temp_max: 38.41,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 986,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.17, deg: 12, gust: 5.14 },
      visibility: 48,
      pop: 0.3,
      rain: { "3h": 0.18 },
      sys: { pod: "d" },
      dt_txt: "2024-03-15 21:00:00",
    },
    {
      dt: 1710547200,
      main: {
        temp: 37.51,
        feels_like: 37.51,
        temp_min: 37.51,
        temp_max: 37.51,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 987,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.32, deg: 347, gust: 3.94 },
      visibility: 126,
      pop: 0.04,
      sys: { pod: "n" },
      dt_txt: "2024-03-16 00:00:00",
    },
    {
      dt: 1710558000,
      main: {
        temp: 37.51,
        feels_like: 37.51,
        temp_min: 37.51,
        temp_max: 37.51,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 987,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.1, deg: 358, gust: 2.08 },
      visibility: 1111,
      pop: 0.1,
      sys: { pod: "n" },
      dt_txt: "2024-03-16 03:00:00",
    },
    {
      dt: 1710568800,
      main: {
        temp: 37.24,
        feels_like: 37.24,
        temp_min: 37.24,
        temp_max: 37.24,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 987,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13n" },
      ],
      clouds: { all: 98 },
      wind: { speed: 1.12, deg: 236, gust: 2.21 },
      visibility: 10000,
      pop: 0.25,
      snow: { "3h": 0.11 },
      sys: { pod: "n" },
      dt_txt: "2024-03-16 06:00:00",
    },
    {
      dt: 1710579600,
      main: {
        temp: 36.84,
        feels_like: 36.84,
        temp_min: 36.84,
        temp_max: 36.84,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 987,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.28, deg: 317, gust: 2.01 },
      visibility: 10000,
      pop: 0.36,
      rain: { "3h": 0.15 },
      sys: { pod: "n" },
      dt_txt: "2024-03-16 09:00:00",
    },
    {
      dt: 1710590400,
      main: {
        temp: 35.47,
        feels_like: 35.47,
        temp_min: 35.47,
        temp_max: 35.47,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 988,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 87 },
      wind: { speed: 2.98, deg: 309, gust: 3.96 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-03-16 12:00:00",
    },
    {
      dt: 1710601200,
      main: {
        temp: 44.26,
        feels_like: 44.26,
        temp_min: 44.26,
        temp_max: 44.26,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 988,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: { all: 43 },
      wind: { speed: 2.48, deg: 312, gust: 5.73 },
      visibility: 10000,
      pop: 0.13,
      sys: { pod: "d" },
      dt_txt: "2024-03-16 15:00:00",
    },
    {
      dt: 1710612000,
      main: {
        temp: 47.16,
        feels_like: 47.16,
        temp_min: 47.16,
        temp_max: 47.16,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 987,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: { all: 64 },
      wind: { speed: 1.68, deg: 323, gust: 4.83 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-03-16 18:00:00",
    },
    {
      dt: 1710622800,
      main: {
        temp: 44.98,
        feels_like: 44.98,
        temp_min: 44.98,
        temp_max: 44.98,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 987,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.28, deg: 27, gust: 3.78 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-03-16 21:00:00",
    },
    {
      dt: 1710633600,
      main: {
        temp: 38.95,
        feels_like: 38.95,
        temp_min: 38.95,
        temp_max: 38.95,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 988,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.72, deg: 113, gust: 2.51 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-03-17 00:00:00",
    },
    {
      dt: 1710644400,
      main: {
        temp: 37.63,
        feels_like: 37.63,
        temp_min: 37.63,
        temp_max: 37.63,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 987,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.79, deg: 142, gust: 2.3 },
      visibility: 10000,
      pop: 0.17,
      sys: { pod: "n" },
      dt_txt: "2024-03-17 03:00:00",
    },
    {
      dt: 1710655200,
      main: {
        temp: 37.36,
        feels_like: 37.36,
        temp_min: 37.36,
        temp_max: 37.36,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 985,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.98, deg: 179, gust: 6.02 },
      visibility: 8561,
      pop: 0.38,
      snow: { "3h": 0.18 },
      sys: { pod: "n" },
      dt_txt: "2024-03-17 06:00:00",
    },
    {
      dt: 1710666000,
      main: {
        temp: 37.72,
        feels_like: 37.72,
        temp_min: 37.72,
        temp_max: 37.72,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 982,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.33, deg: 147, gust: 5.01 },
      visibility: 8544,
      pop: 0.22,
      snow: { "3h": 0.19 },
      sys: { pod: "n" },
      dt_txt: "2024-03-17 09:00:00",
    },
    {
      dt: 1710676800,
      main: {
        temp: 37.08,
        feels_like: 37.08,
        temp_min: 37.08,
        temp_max: 37.08,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 980,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.95, deg: 182, gust: 7.96 },
      visibility: 183,
      pop: 1,
      rain: { "3h": 3.21 },
      sys: { pod: "d" },
      dt_txt: "2024-03-17 12:00:00",
    },
    {
      dt: 1710687600,
      main: {
        temp: 38.73,
        feels_like: 36.88,
        temp_min: 38.73,
        temp_max: 38.73,
        pressure: 999,
        sea_level: 999,
        grnd_level: 979,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.04, deg: 245, gust: 8.43 },
      visibility: 115,
      pop: 1,
      rain: { "3h": 0.91 },
      sys: { pod: "d" },
      dt_txt: "2024-03-17 15:00:00",
    },
    {
      dt: 1710698400,
      main: {
        temp: 45.36,
        feels_like: 41.67,
        temp_min: 45.36,
        temp_max: 45.36,
        pressure: 998,
        sea_level: 998,
        grnd_level: 978,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 95 },
      wind: { speed: 6.85, deg: 276, gust: 17.81 },
      visibility: 10000,
      pop: 0.98,
      rain: { "3h": 0.4 },
      sys: { pod: "d" },
      dt_txt: "2024-03-17 18:00:00",
    },
    {
      dt: 1710709200,
      main: {
        temp: 44.46,
        feels_like: 39.56,
        temp_min: 44.46,
        temp_max: 44.46,
        pressure: 999,
        sea_level: 999,
        grnd_level: 980,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 56 },
      wind: { speed: 9.04, deg: 269, gust: 24.2 },
      visibility: 10000,
      pop: 0.4,
      rain: { "3h": 0.12 },
      sys: { pod: "d" },
      dt_txt: "2024-03-17 21:00:00",
    },
    {
      dt: 1710720000,
      main: {
        temp: 36.18,
        feels_like: 30.61,
        temp_min: 36.18,
        temp_max: 36.18,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 982,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: { all: 39 },
      wind: { speed: 6.87, deg: 267, gust: 17.36 },
      visibility: 10000,
      pop: 0.19,
      sys: { pod: "n" },
      dt_txt: "2024-03-18 00:00:00",
    },
    {
      dt: 1710730800,
      main: {
        temp: 33.35,
        feels_like: 28.13,
        temp_min: 33.35,
        temp_max: 33.35,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 983,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
      ],
      clouds: { all: 19 },
      wind: { speed: 5.64, deg: 261, gust: 11.63 },
      visibility: 10000,
      pop: 0.04,
      sys: { pod: "n" },
      dt_txt: "2024-03-18 03:00:00",
    },
    {
      dt: 1710741600,
      main: {
        temp: 30.85,
        feels_like: 25.77,
        temp_min: 30.85,
        temp_max: 30.85,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 983,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
      ],
      clouds: { all: 20 },
      wind: { speed: 4.94, deg: 259, gust: 8.79 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-03-18 06:00:00",
    },
    {
      dt: 1710752400,
      main: {
        temp: 29.39,
        feels_like: 24.85,
        temp_min: 29.39,
        temp_max: 29.39,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 983,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
      ],
      clouds: { all: 18 },
      wind: { speed: 4.18, deg: 258, gust: 6.17 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-03-18 09:00:00",
    },
    {
      dt: 1710763200,
      main: {
        temp: 32.77,
        feels_like: 28.2,
        temp_min: 32.77,
        temp_max: 32.77,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 983,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
      ],
      clouds: { all: 15 },
      wind: { speed: 4.76, deg: 234, gust: 10.42 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-03-18 12:00:00",
    },
    {
      dt: 1710774000,
      main: {
        temp: 40.44,
        feels_like: 34.7,
        temp_min: 40.44,
        temp_max: 40.44,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 982,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 72 },
      wind: { speed: 8.86, deg: 253, gust: 14.52 },
      visibility: 10000,
      pop: 0.29,
      snow: { "3h": 0.11 },
      sys: { pod: "d" },
      dt_txt: "2024-03-18 15:00:00",
    },
    {
      dt: 1710784800,
      main: {
        temp: 42.89,
        feels_like: 37.45,
        temp_min: 42.89,
        temp_max: 42.89,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 981,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 86 },
      wind: { speed: 9.46, deg: 261, gust: 14.92 },
      visibility: 10000,
      pop: 0.38,
      rain: { "3h": 0.36 },
      sys: { pod: "d" },
      dt_txt: "2024-03-18 18:00:00",
    },
  ],
  city: {
    id: 5090347,
    name: "North Conway",
    coord: { lat: 44.0537, lon: -71.1284 },
    country: "US",
    population: 2349,
    timezone: -14400,
    sunrise: 1710327579,
    sunset: 1710370091,
  },
};
let key = "f2e36b633016e8e4455cd9e98b32a633";
let lat = 44.0537;
let lon = -71.1284;
let url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
console.log(url2);

// fetch(url2)
//   .then((res) => res.json())
//   .then((weatherData) => {
//     weatherData.list.forEach((value) => {
//       if (value.dt_txt.includes("00:00:00")) {
//         displayWeather(value);
//       }
//     });
//   });

let weatherDataEl = document.getElementById("weatherData");

function createWeatherCard(value, index) {
  let card = document.createElement("div");
  let h3 = document.createElement("h3");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let p2 = document.createElement("p");

  card.classList.add("card");
  card.classList.add(`w${index}`);

  if (index === 0) {
    h3.innerHTML = "Current";
  } else if (index === 1) {
    h3.innerHTML = "Tomorrow";
  } else {
    h3.innerHTML = `+${index} Days`;
  }

  img.src = `https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`;
  img.alt = "weatherImg";
  img.width = 100;
  img.height = 100;

  p.innerHTML = `${value.weather[0].description.toTitleCase()} ${value.main.temp.toFixed(0)}&deg;F`;
  p2.innerHTML = `Wind: ${value.wind.speed.toFixed(0)}mph`;

  card.append(h3, img, p, p2);
  weatherDataEl.append(card);
}
function displayWeather(data){
  //create weather card
  let wd = filterData(data);
  
  for(let i = 0; i < 3; i ++){
    let value = wd[i];
    createWeatherCard(value, i);
  }

  // calculate windchill
  let weatherPs = document.querySelectorAll("#weatherData div p");
  for (let i = 0; i < weatherPs.length; i += 2) {
    let degrees = cleanHTML(weatherPs[i].innerHTML);
    let windspeed = cleanHTML(weatherPs[i + 1].innerHTML);
    calculateWindchill(degrees, windspeed, weatherPs[i].parentElement);
  }
}
displayWeather(weatherData)

function filterData(data) {
  let currentData = data.list[0];
  let fiveDay = data.list.filter((x) => x.dt_txt.includes("00:00:00"));
  return [currentData, ...fiveDay];
}






function cleanHTML(value) {
  return parseFloat(value.replace(/[a-z-A-Z]|\W+/g, ""));
}

function calculateWindchill(deg, mph, parent) {
  let windchill = "Windchill: N/A";
  if (deg <= 50 && mph > 3) {
    windchill = `Windchill ${windchillFn(deg, mph).toFixed(0)}°F`;
  }
  let p = document.createElement("p");
  p.innerHTML = windchill;
  parent.append(p);
}

function windchillFn(t, v) {
  return (
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(v, 0.16) +
    0.4275 * t * Math.pow(v, 0.16)
  );
}
