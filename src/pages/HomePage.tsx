import { IonContent, IonPage } from '@ionic/react';

import './Home.css';
import '@ionic/react/css/ionic-swiper.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Space } from '../models/space.model';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeContainer from '../containers/HomeContainer';

const HomePage: React.FC = () => {
  const [database, setDatabase] = useState<any>({});
  const [configuration, setConfiguration] = useState<any>({});
  const [info, setInfo] = useState<any>({});
  const [logo, setLogo] = useState<any>({});
  const params: any = useParams();
  
  const getSpaces = () => {
    const spacesData: any = localStorage.getItem('spaces');
    const spaces = JSON.parse(spacesData);
    const database = spaces.find((space: Space) => space.bdalias === params.bdalias);
    setDatabase(database);
  }

  const getClientData = async (db: any) => {
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
    const data = await response.json();
    setLogo(data);
    // setSlides(data.slides.split(', '));
  }

  const getConfiguration = async (db: any) => {
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
      setConfiguration(config);
    } catch (error) {
      alert("Error en el nombre del espacio, verifique con atención a clientes");
    }
  };

  const getInfo = async (db: any) => {
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
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      alert("Error en el nombre del espacio, verifique con atención a clientes");
    }
  };

  useEffect(() => {
    console.log('First useEffect');
    getSpaces();
  }, [params]);

  useEffect(() => {
    console.log('Second useEffect');
    getClientData(database);
    getConfiguration(database);
    getInfo(database);
  }, [database]);
  
  const bodyBackgroundColor = configuration?.styles?.body_background_color;
  const navBackgroundColor = configuration?.styles?.nav_background_color;
  
  const el: HTMLIonContentElement | null = document.querySelector('ion-content');
  el?.style.setProperty('--background', bodyBackgroundColor);
  
  return (
    <>
      <IonPage>
        <Header logo={logo} background={navBackgroundColor}/> 
        <IonContent>
          <HomeContainer logo={logo}/>
        </IonContent>
        <Footer />
      </IonPage>
    </>
  )
};

export default HomePage;