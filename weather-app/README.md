# Weather App

Weather App je jednostavna React aplikacija koja omogućava korisnicima da pretražuju trenutne vremenske uslove i sedmodnevnu vremensku prognozu za bilo koji grad. Aplikacija koristi GeoDB Cities API za pretragu gradova i OpenWeather API za preuzimanje vremenskih podataka.

![Screenshot](assets/screenshot.png)

## Sadržaj

- [Instalacija](#instalacija)
- [Korišćenje](#korišćenje)
- [Tehnologije](#tehnologije)

## Instalacija

1. Klonirajte repozitorijum
    ```bash
    git clone https://github.com/tvoj-korisnicki-username/weather-app.git
    ```

2. Instalirajte dependencije
    ```bash
    npm install
    ```

3. Postavite svoj OpenWeather API ključ u `api.js` fajl. Otvorite `src/api.js` i unesite svoj API ključ:
    ```javascript
    export const WEATHER_API_KEY = 'VAŠ_API_KLJUČ';
    export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
    ```

4. Pokrenite aplikaciju
    ```bash
    npm start
    ```

## Korišćenje

- Unesite naziv grada u polje za pretragu da biste dobili trenutne vremenske uslove i sedmodnevnu prognozu.
- Aplikacija prikazuje informacije kao što su trenutna temperatura, osećaj temperature, brzina vetra, vlažnost, pritisak i još mnogo toga.

## Tehnologije

- **React** - JavaScript biblioteka za izgradnju korisničkih interfejsa.
- **react-accessible-accordion** - Komponenta koja omogućava kreiranje pristupačnih akordeon menija.
- **GeoDB Cities API** - API koji pruža podatke o gradovima za pretragu.
- **OpenWeather API** - API za preuzimanje trenutnih vremenskih uslova i prognoze.
- **CSS** - Kaskadni stilovi za stilizaciju korisničkog interfejsa.

