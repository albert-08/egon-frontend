import { Space } from "../../models/space.model";

const getData = async (url: string, db: any) => {
  if (Object.entries(db).length === 0) return {}

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

  const data = await response.json();
  return data;
}

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

export const getClientData = async (url: string, db: any) => {
  try {
    const data = await getData(url, db);
    return data;
    // setSlides(data.slides.split(', '));
  } catch (error) {
    console.log(error);
  }
}