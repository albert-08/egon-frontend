import { Space } from "../../models/space.model";

export const getSpaces = (params: any) => {
  try {
    const spacesData: any = localStorage.getItem('spaces');
    const spaces = JSON.parse(spacesData);
    const database = spaces.find((space: Space) => space.bdalias === params.bdalias);
    return database;
  } catch (error) {
    console.log(error);
  }
}

export const getLogo = async (db: any) => {
  try {
    const url = 'http://127.0.0.1:4000/clients/logo/';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        bdname: db.bdname,
        csiid: db.csiid
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const logo = await response.json();
    return logo;
    // setSlides(data.slides.split(', '));
  } catch (error) {
    console.log(error);
  }
}

export const getConfiguration = async (db: any) => {
  const url = 'http://127.0.0.1:4000/clients/configuration';
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ 
        bdname: db.bdname,
        csiid: db.csiid 
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const config = await response.json();
    return config;
  } catch (error) {
    console.log(error);
  }
};

export const getInfo = async (db: any) => {
  const url = 'http://127.0.0.1:4000/clients/info';
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ 
        bdname: db.bdname,
        csiid: db.csiid 
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const info = await response.json();
    return info;
  } catch (error) {
    console.log(error);
  }
};