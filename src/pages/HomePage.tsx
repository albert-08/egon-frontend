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
  const [client, setClient] = useState<any>({});
  const [logo, setLogo] = useState<any>({});
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
          <HomeContainer logo={logo} />
        </IonContent>
        <Footer />
      </IonPage>
    </>
  )
};

export default HomePage;