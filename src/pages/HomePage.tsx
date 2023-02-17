import { IonContent, IonPage } from '@ionic/react';
import './Home.css';
import '@ionic/react/css/ionic-swiper.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeContainer from '../containers/HomeContainer';
import { getConfiguration, getInfo, getLogo, getSpaces } from '../utils/Home';

const HomePage: React.FC = () => {
  const [database, setDatabase] = useState<any>({});
  const [configuration, setConfiguration] = useState<any>({});
  const [info, setInfo] = useState<any>({});
  const [logo, setLogo] = useState<any>({});
  const params: any = useParams();
  
  useEffect(() => {
    setDatabase(getSpaces(params));
  }, [params]);

  useEffect(() => {
    setLogo(getLogo(database));
    setConfiguration(getConfiguration(database));
    setInfo(getInfo(database));
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