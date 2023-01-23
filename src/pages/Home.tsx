import { IonContent, IonPage } from '@ionic/react';
import { useTranslation } from 'react-i18next';

import './Home.css';
import '@ionic/react/css/ionic-swiper.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Space } from '../models/space.model';
import HomeSlides from '../components/HomeSlides';
import HomeDescription from '../components/HomeDescription';
import Header from '../components/Header';
import HomeLogo from '../components/HomeLogo';

const Home: React.FC = () => {
  const params: any = useParams();

  useEffect(() => {
    const spacesData: any = localStorage.getItem('sec_conn_bd');
    const spaces: any = JSON.parse(spacesData);
    const database = spaces.find((space: Space) => space.alias === params.alias);
    console.log(`Data base: ${JSON.stringify(database.db)}`);
  }, [])

  return (
    <>
      <IonPage>
        <Header /> 
        <IonContent>
          <HomeLogo />
          <HomeSlides />
          <HomeDescription />
        </IonContent>
      </IonPage>
    </>
  )
};

export default Home;