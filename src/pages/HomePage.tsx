import { IonContent, IonPage } from '@ionic/react';
import './Home.css';
import '@ionic/react/css/ionic-swiper.css';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeContainer from '../containers/HomeContainer';
import { useGetDataBase } from '../hooks/home/useGetDataBase';
import { useGetConfiguration } from '../hooks/home/useGetConfiguration';
import { useGetInfo } from '../hooks/home/useGetInfo';
import { useGetLogo } from '../hooks/home/useGetLogo';

const HomePage: React.FC = () => {
  const params: any = useParams();

  const { dataBase } = useGetDataBase(params);
  const { configuration } = useGetConfiguration(dataBase);
  const { info } = useGetInfo(dataBase);
  const { logo } = useGetLogo(dataBase);

  const bodyBackgroundColor = configuration?.styles?.body_background_color;
  const navBackgroundColor = configuration?.styles?.nav_background_color;

  const el: HTMLIonContentElement | null = document.querySelector('ion-content');
  el?.style.setProperty('--background', bodyBackgroundColor);
  
  return (
    <>
      <IonPage>
        <Header logo={logo} background={navBackgroundColor} /> 
        <IonContent>
          <HomeContainer
            logo={logo}
            description={info.ppodescripcion}
            slides={configuration?.gen_config?.carrusel}
          />
        </IonContent>
        <Footer background={navBackgroundColor} />
      </IonPage>
    </>
  )
};

export default HomePage;