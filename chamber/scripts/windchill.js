let weatherData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1711065600,
      main: {
        temp: 25.11,
        feels_like: 12.51,
        temp_min: 20.16,
        temp_max: 25.11,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 994,
        humidity: 59,
        temp_kf: 2.75,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 26,
      },
      wind: {
        speed: 15.95,
        deg: 289,
        gust: 40.53,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-22 00:00:00",
    },
    {
      dt: 1711076400,
      main: {
        temp: 21.42,
        feels_like: 8.82,
        temp_min: 18.34,
        temp_max: 21.42,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 996,
        humidity: 63,
        temp_kf: 1.71,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 14.07,
        deg: 292,
        gust: 39.55,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-22 03:00:00",
    },
    {
      dt: 1711087200,
      main: {
        temp: 16.18,
        feels_like: 3.9,
        temp_min: 16.18,
        temp_max: 16.18,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 998,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 15,
      },
      wind: {
        speed: 10.33,
        deg: 289,
        gust: 35.9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-22 06:00:00",
    },
    {
      dt: 1711098000,
      main: {
        temp: 14.27,
        feels_like: 2.1,
        temp_min: 14.27,
        temp_max: 14.27,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1001,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 9.51,
        deg: 297,
        gust: 35.5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-22 09:00:00",
    },
    {
      dt: 1711108800,
      main: {
        temp: 14.16,
        feels_like: 3.2,
        temp_min: 14.16,
        temp_max: 14.16,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1003,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 7.92,
        deg: 291,
        gust: 24.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-22 12:00:00",
    },
    {
      dt: 1711119600,
      main: {
        temp: 24.35,
        feels_like: 17.55,
        temp_min: 24.35,
        temp_max: 24.35,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1004,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 12,
      },
      wind: {
        speed: 5.55,
        deg: 296,
        gust: 12.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-22 15:00:00",
    },
    {
      dt: 1711130400,
      main: {
        temp: 31.75,
        feels_like: 26.06,
        temp_min: 31.75,
        temp_max: 31.75,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1004,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 17,
      },
      wind: {
        speed: 5.84,
        deg: 293,
        gust: 10.89,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-22 18:00:00",
    },
    {
      dt: 1711141200,
      main: {
        temp: 31.93,
        feels_like: 26.8,
        temp_min: 31.93,
        temp_max: 31.93,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1004,
        humidity: 40,
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
      clouds: {
        all: 48,
      },
      wind: {
        speed: 5.21,
        deg: 306,
        gust: 8.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-22 21:00:00",
    },
    {
      dt: 1711152000,
      main: {
        temp: 23.77,
        feels_like: 18.57,
        temp_min: 23.77,
        temp_max: 23.77,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1007,
        humidity: 66,
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
      clouds: {
        all: 49,
      },
      wind: {
        speed: 4,
        deg: 309,
        gust: 3.94,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-23 00:00:00",
    },
    {
      dt: 1711162800,
      main: {
        temp: 24.62,
        feels_like: 24.62,
        temp_min: 24.62,
        temp_max: 24.62,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1007,
        humidity: 63,
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
      clouds: {
        all: 97,
      },
      wind: {
        speed: 1.59,
        deg: 296,
        gust: 1.88,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-23 03:00:00",
    },
    {
      dt: 1711173600,
      main: {
        temp: 25.27,
        feels_like: 25.27,
        temp_min: 25.27,
        temp_max: 25.27,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1006,
        humidity: 64,
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
      clouds: {
        all: 98,
      },
      wind: {
        speed: 2.01,
        deg: 120,
        gust: 3.2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-23 06:00:00",
    },
    {
      dt: 1711184400,
      main: {
        temp: 23.45,
        feels_like: 23.45,
        temp_min: 23.45,
        temp_max: 23.45,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1004,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 601,
          main: "Snow",
          description: "snow",
          icon: "13n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.53,
        deg: 57,
        gust: 4.16,
      },
      visibility: 218,
      pop: 1,
      snow: {
        "3h": 2.76,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-23 09:00:00",
    },
    {
      dt: 1711195200,
      main: {
        temp: 24.13,
        feels_like: 24.13,
        temp_min: 24.13,
        temp_max: 24.13,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1003,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 601,
          main: "Snow",
          description: "snow",
          icon: "13d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.59,
        deg: 81,
        gust: 3.89,
      },
      visibility: 107,
      pop: 1,
      snow: {
        "3h": 5.36,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-23 12:00:00",
    },
    {
      dt: 1711206000,
      main: {
        temp: 25.75,
        feels_like: 25.75,
        temp_min: 25.75,
        temp_max: 25.75,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1000,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 601,
          main: "Snow",
          description: "snow",
          icon: "13d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.13,
        deg: 55,
        gust: 4.83,
      },
      visibility: 107,
      pop: 1,
      snow: {
        "3h": 7.51,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-23 15:00:00",
    },
    {
      dt: 1711216800,
      main: {
        temp: 27.95,
        feels_like: 27.95,
        temp_min: 27.95,
        temp_max: 27.95,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 996,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 601,
          main: "Snow",
          description: "snow",
          icon: "13d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.06,
        deg: 17,
        gust: 4.85,
      },
      visibility: 162,
      pop: 1,
      snow: {
        "3h": 9.99,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-23 18:00:00",
    },
    {
      dt: 1711227600,
      main: {
        temp: 31.96,
        feels_like: 31.96,
        temp_min: 31.96,
        temp_max: 31.96,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 992,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: "Snow",
          description: "light snow",
          icon: "13d",
        },
        {
          id: 511,
          main: "Rain",
          description: "freezing rain",
          icon: "13d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.51,
        deg: 10,
        gust: 4.76,
      },
      visibility: 870,
      pop: 1,
      snow: {
        "3h": 0.85,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-23 21:00:00",
    },
    {
      dt: 1711238400,
      main: {
        temp: 34.45,
        feels_like: 32.09,
        temp_min: 34.45,
        temp_max: 34.45,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 991,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
        {
          id: 511,
          main: "Rain",
          description: "freezing rain",
          icon: "13n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3,
        deg: 355,
        gust: 4.74,
      },
      visibility: 799,
      pop: 1,
      rain: {
        "3h": 5.35,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-24 00:00:00",
    },
    {
      dt: 1711249200,
      main: {
        temp: 31.8,
        feels_like: 24.44,
        temp_min: 31.8,
        temp_max: 31.8,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 988,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 601,
          main: "Snow",
          description: "snow",
          icon: "13n",
        },
        {
          id: 511,
          main: "Rain",
          description: "freezing rain",
          icon: "13n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.28,
        deg: 327,
        gust: 17.6,
      },
      visibility: 5131,
      pop: 1,
      snow: {
        "3h": 3.89,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-24 03:00:00",
    },
    {
      dt: 1711260000,
      main: {
        temp: 26.62,
        feels_like: 19.02,
        temp_min: 26.62,
        temp_max: 26.62,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 991,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: "Snow",
          description: "light snow",
          icon: "13n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.98,
        deg: 314,
        gust: 12.84,
      },
      visibility: 10000,
      pop: 1,
      snow: {
        "3h": 0.23,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-24 06:00:00",
    },
    {
      dt: 1711270800,
      main: {
        temp: 17.24,
        feels_like: 7.86,
        temp_min: 17.24,
        temp_max: 17.24,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 995,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.82,
        deg: 310,
        gust: 9.51,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-24 09:00:00",
    },
    {
      dt: 1711281600,
      main: {
        temp: 18.68,
        feels_like: 10.18,
        temp_min: 18.68,
        temp_max: 18.68,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 998,
        humidity: 93,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.2,
        deg: 315,
        gust: 10.78,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-24 12:00:00",
    },
    {
      dt: 1711292400,
      main: {
        temp: 28.85,
        feels_like: 22.39,
        temp_min: 28.85,
        temp_max: 28.85,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1001,
        humidity: 77,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.11,
        deg: 326,
        gust: 10.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-24 15:00:00",
    },
    {
      dt: 1711303200,
      main: {
        temp: 32.92,
        feels_like: 28.31,
        temp_min: 32.92,
        temp_max: 32.92,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1002,
        humidity: 78,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.83,
        deg: 329,
        gust: 8.21,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-24 18:00:00",
    },
    {
      dt: 1711314000,
      main: {
        temp: 33.04,
        feels_like: 29.77,
        temp_min: 33.04,
        temp_max: 33.04,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1003,
        humidity: 88,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.58,
        deg: 357,
        gust: 7.29,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-24 21:00:00",
    },
    {
      dt: 1711324800,
      main: {
        temp: 22.73,
        feels_like: 16.99,
        temp_min: 22.73,
        temp_max: 22.73,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1006,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.29,
        deg: 325,
        gust: 5.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-25 00:00:00",
    },
    {
      dt: 1711335600,
      main: {
        temp: 18.72,
        feels_like: 12.51,
        temp_min: 18.72,
        temp_max: 18.72,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1008,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.16,
        deg: 331,
        gust: 4.09,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-25 03:00:00",
    },
    {
      dt: 1711346400,
      main: {
        temp: 17.37,
        feels_like: 10.69,
        temp_min: 17.37,
        temp_max: 17.37,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1009,
        humidity: 93,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.36,
        deg: 337,
        gust: 3.69,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-25 06:00:00",
    },
    {
      dt: 1711357200,
      main: {
        temp: 15.87,
        feels_like: 10.11,
        temp_min: 15.87,
        temp_max: 15.87,
        pressure: 1031,
        sea_level: 1031,
        grnd_level: 1010,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.56,
        deg: 336,
        gust: 2.95,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-25 09:00:00",
    },
    {
      dt: 1711368000,
      main: {
        temp: 22.53,
        feels_like: 22.53,
        temp_min: 22.53,
        temp_max: 22.53,
        pressure: 1032,
        sea_level: 1032,
        grnd_level: 1011,
        humidity: 90,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.8,
        deg: 24,
        gust: 4.59,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-25 12:00:00",
    },
    {
      dt: 1711378800,
      main: {
        temp: 31.66,
        feels_like: 26.15,
        temp_min: 31.66,
        temp_max: 31.66,
        pressure: 1032,
        sea_level: 1032,
        grnd_level: 1011,
        humidity: 80,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.59,
        deg: 48,
        gust: 10.69,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-25 15:00:00",
    },
    {
      dt: 1711389600,
      main: {
        temp: 34.88,
        feels_like: 30.04,
        temp_min: 34.88,
        temp_max: 34.88,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1009,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.5,
        deg: 42,
        gust: 9.37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-25 18:00:00",
    },
    {
      dt: 1711400400,
      main: {
        temp: 35.42,
        feels_like: 31.48,
        temp_min: 35.42,
        temp_max: 35.42,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1008,
        humidity: 95,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.56,
        deg: 49,
        gust: 11.14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-25 21:00:00",
    },
    {
      dt: 1711411200,
      main: {
        temp: 25.11,
        feels_like: 21.11,
        temp_min: 25.11,
        temp_max: 25.11,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1009,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.27,
        deg: 3,
        gust: 3.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-26 00:00:00",
    },
    {
      dt: 1711422000,
      main: {
        temp: 22.91,
        feels_like: 17.65,
        temp_min: 22.91,
        temp_max: 22.91,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1009,
        humidity: 96,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.94,
        deg: 345,
        gust: 3.56,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-26 03:00:00",
    },
    {
      dt: 1711432800,
      main: {
        temp: 20.21,
        feels_like: 15.15,
        temp_min: 20.21,
        temp_max: 20.21,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1009,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 64,
      },
      wind: {
        speed: 3.51,
        deg: 352,
        gust: 3.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-26 06:00:00",
    },
    {
      dt: 1711443600,
      main: {
        temp: 19.2,
        feels_like: 14.4,
        temp_min: 19.2,
        temp_max: 19.2,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1008,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 3.27,
        deg: 344,
        gust: 2.98,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-03-26 09:00:00",
    },
    {
      dt: 1711454400,
      main: {
        temp: 27.1,
        feels_like: 27.1,
        temp_min: 27.1,
        temp_max: 27.1,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1008,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 2.8,
        deg: 60,
        gust: 4.34,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-26 12:00:00",
    },
    {
      dt: 1711465200,
      main: {
        temp: 35.42,
        feels_like: 32,
        temp_min: 35.42,
        temp_max: 35.42,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1008,
        humidity: 84,
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
      clouds: {
        all: 25,
      },
      wind: {
        speed: 4.03,
        deg: 58,
        gust: 7.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-26 15:00:00",
    },
    {
      dt: 1711476000,
      main: {
        temp: 38.79,
        feels_like: 36.73,
        temp_min: 38.79,
        temp_max: 38.79,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1007,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 16,
      },
      wind: {
        speed: 3.22,
        deg: 75,
        gust: 4.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-26 18:00:00",
    },
    {
      dt: 1711486800,
      main: {
        temp: 37.17,
        feels_like: 33.49,
        temp_min: 37.17,
        temp_max: 37.17,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1007,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 4.59,
        deg: 91,
        gust: 6.91,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-03-26 21:00:00",
    },
  ],
  city: {
    id: 5090347,
    name: "North Conway",
    coord: {
      lat: 44.0537,
      lon: -71.1284,
    },
    country: "US",
    population: 2349,
    timezone: -14400,
    sunrise: 1711017900,
    sunset: 1711061880,
  },
};
let currentData = {
  coord: {
    lon: -71.1284,
    lat: 44.0537,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03d",
    },
  ],
  base: "stations",
  main: {
    temp: 26.62,
    feels_like: 26.62,
    temp_min: 22.08,
    temp_max: 30.13,
    pressure: 1021,
    humidity: 56,
  },
  visibility: 10000,
  wind: {
    speed: 1.01,
    deg: 311,
    gust: 1.99,
  },
  clouds: {
    all: 25,
  },
  dt: 1711057598,
  sys: {
    type: 2,
    id: 2037879,
    country: "US",
    sunrise: 1711017900,
    sunset: 1711061880,
  },
  timezone: -14400,
  id: 5090347,
  name: "North Conway",
  cod: 200,
};

String.prototype.toTitleCase = function () {
  let words = this.toLowerCase().split(" ");
  let ttlWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1, word.length)
  );
  return ttlWords.join(" ");
};

let key = "f2e36b633016e8e4455cd9e98b32a633";
let lat = 44.0537;
let lon = -71.1284;
let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
let currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
let weatherDataEl = document.getElementById("weatherData");
let currentEl = document.getElementById("currentWeather");
let currentStatsEl = document.getElementById("stats");

// > --- Weather Card ---
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

  p.innerHTML = `${value.weather[0].description.toTitleCase()} ${value.main.temp.toFixed(
    0
  )}&deg;F`;
  p2.innerHTML = `Wind: ${value.wind.speed.toFixed(0)}mph`;

  card.append(h3, img, p, p2);
  weatherDataEl.append(card);
}
function displayWeather(data) {
  //create weather card
  let wd = filterData(data);

  for (let i = 1; i < 4; i++) {
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
function filterData(data) {
  let currentData = data.list[0];
  let fiveDay = data.list.filter((x) => x.dt_txt.includes("00:00:00"));
  return [currentData, ...fiveDay];
}

// > --- CURRENT WEATHER ---
function showCurrentData(current) {
  // let temp = document.createElement("p")
  // let min = document.createElement("p")
  // let max = document.createElement("p")
  // let humidity = document.createElement("p")
  // let wind = document.createElement("p")

  let icon = document.createElement("img");

  addP(`Temp: <span>${current.main.temp}&deg;F</span>`, currentStatsEl, "temp");
  // temp.setAttribute("id", "temp")
  addP(`Min: <span>${current.main.temp_min}&deg;F</span>`, currentStatsEl);
  addP(`Max: <span>${current.main.temp_max}&deg;F</span>`, currentStatsEl);
  addP(`Humidity: <span>${current.main.humidity}%</span>`, currentStatsEl);
  addP(`Wind: <span>${current.wind.speed}mph</span>`, currentStatsEl);
  icon.src = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
  icon.alt = "weatherImg";
  icon.width = 100;
  icon.height = 100;

  currentEl.append(icon, temp);
}
function addP(value, parent, id) {
  let p = document.createElement("p");
  p.innerHTML = value;
  if (id) {
    p.setAttribute("id", id);
  }
  parent.append(p);
  return p;
}

// > --- WINDCHILL ---
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

// > --- WEATHER BACKGROUND ---
function weatherBackground() {
  // let c1 = `hsl(189, 100%, 92%)`;
  // let c1 = `hsl(221, 100%, 50%)`;
  // let c2 = `hsl(209, 100%, 50%)`;
  // let c2 = `hsl(0, 0%, 0%)`;
  let time = new Date().getHours();
  let maxHours = 23;

  let value = mapValue(time, 0, maxHours, 0, 3.14);
  let lightness = 1 - Math.sin(value).toFixed(2);
  let c1 = lerpColor([189, 100, 92], [229, 100, 41], lightness);
  let c2 = lerpColor([209, 100, 50], [0, 0, 0], lightness, 0);
  let deg = lerp(170, 190, time / maxHours);

  currentWeather.style.backgroundImage = `linear-gradient(${deg}deg, ${c1}, ${c2})`;
}
function lerpColor(c1, c2, amt, amt2 = 1) {
  let h = lerp(c1[0], c2[0], amt * amt2);
  let s = lerp(c1[1], c2[1], amt);
  let l = lerp(c1[2], c2[2], amt);
  return `hsl(${h}, ${s}%, ${l}%)`;
}
function lerp(value1, value2, amt) {
  return (value2 - value1) * amt + value1;
}
function mapValue(value, istart, istop, ostart, ostop) {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}

weatherBackground();
// displayWeather(weatherData);
// showCurrentData(currentData);

fetch(forecastURL)
  .then((res) => res.json())
  .then((weatherData) => {
    displayWeather(weatherData);
  });
fetch(currentURL)
  .then((res) => res.json())
  .then((jsObj) => {
    showCurrentData(jsObj);
  });
