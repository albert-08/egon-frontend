import { IonContent, IonLabel, IonPage } from '@ionic/react';

import './Home.css';
import '@ionic/react/css/ionic-swiper.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Space } from '../models/space.model';
import HomeSlides from '../components/HomeSlides';
import HomeDescription from '../components/HomeDescription';
import Header from '../components/Header';
import HomeLogo from '../components/HomeLogo';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const [client, setClient] = useState<any>({});
  const [logo, setLogo] = useState<any>({});
  const [slides, setSlides] = useState<any>([]);
  const [spaces, setSpaces] = useState<any>([]);
  const params: any = useParams();

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

  useEffect(() => {
    const spacesData: any = localStorage.getItem('spaces');
    const spaces = JSON.parse(spacesData);
    setClient(spaces);
    const database = spaces.find((space: Space) => space.bdalias === params.bdalias);
    getClientData(database);
  }, [])
  
  return (
    <>
      <IonPage>
        <Header logo={logo}/> 
        <IonContent>
          <HomeLogo logo={logo}/>
          {/* <HomeSlides slides={slides}/>
          <HomeDescription client={client}/> */}
        </IonContent>
        <Footer />
      </IonPage>
    </>
  )
};

export default Home;