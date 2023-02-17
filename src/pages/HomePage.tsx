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
  const [configuration, setConfiguration] = useState<any>({});
  const [info, setInfo] = useState<any>({});
  const [logo, setLogo] = useState<any>({});
  const params: any = useParams();
  
  const getClientLogo = async (database: any) => {
    setLogo(await getLogo(database));
  }

  const getClientConfiguration = async (database: any) => {
    setConfiguration(await getConfiguration(database));
  }

  const getClientInfo = async (database: any) => {
    setInfo(await getInfo(database));
  }

  useEffect(() => {
    const database = getSpaces(params);
    getClientLogo(database);
    getClientConfiguration(database);
    getClientInfo(database);
  }, [params]);
  
  console.log(JSON.stringify(info));
  console.log(JSON.stringify(configuration));

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