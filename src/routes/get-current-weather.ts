//http://api.weatherstack.com/current?access_key={WEATHER_TOKEN}&query=27958&units=f

import { GOOGLE_API_TOKEN, TOKEN, WEATHER_TOKEN } from "../constants.ts";

export async function getCurrentWeather(): Promise<string> {
    if(navigator) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              const zipcode = await getZipFromLatLon(latitude, longitude);
              if (zipcode) {
                const weather = getWeather(zipcode);
              }
            },
            (error) => {
              console.error("Error getting location", error);
            }
        );


    }
    return Promise.resolve('');
}

export async function getZipFromLatLon(
    latitude: number,
    longitude: number,
): Promise<string | undefined> {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_TOKEN}`
    );
    const data = await response.json();
    if (data.status === "OK") {
      const zipComponent = data.results[0].address_components.find((component: any) =>
        component.types.includes("postal_code")
      );
      return zipComponent ? zipComponent.long_name : undefined;
    } else {
      return undefined;
    }
}

export async function getWeather(zipcode: string): Promise<string> {
    try {
        console.log(`http://api.weatherstack.com/current?access_key=${WEATHER_TOKEN}&query=${zipcode}&units=f`)
        const response = await fetch(
            `http://api.weatherstack.com/current?access_key=${WEATHER_TOKEN}&query=${zipcode}&units=f`, {
            method: "GET",
        });
        console.log(response.status);
        console.log(response.body);

    } catch (error) {
        console.error(`Error getting weather for zip: ${zipcode}`);
    }

    return '';
}