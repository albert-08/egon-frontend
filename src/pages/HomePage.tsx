import { IonContent, IonPage } from '@ionic/react';
import './Home.css';
import '@ionic/react/css/ionic-swiper.css';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeContainer from '../containers/HomeContainer';
import { useGetDataBase } from '../hooks/home/useGetDataBase';
import { useGetClientData } from '../hooks/home/useGetClientData';

const HomePage: React.FC = () => {
  const params: any = useParams();

  const { dataBase } = useGetDataBase(params);
  const configuration = useGetClientData({ db: dataBase, path: 'configuration'});
  const info = useGetClientData({ db: dataBase, path: 'info'});
  const logo = useGetClientData({ db: dataBase, path: 'logo'});

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
            description={info?.ppodescripcion}
            slides={configuration?.gen_config?.carrusel}
          />
        </IonContent>
        <Footer background={navBackgroundColor} />
      </IonPage>
    </>
  )
};

export default HomePage;