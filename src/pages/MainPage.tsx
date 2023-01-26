import { IonContent, IonPage} from '@ionic/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContainer from '../containers/MainContainer';

const MainPage: React.FC = (): any => {
  return (
    <IonPage>
      <Header client={{logo: '', name: '', logo2: '', slides: ''}}/>
        <IonContent>
          <MainContainer />
        </IonContent>
      <Footer />
    </IonPage>
  );
};

export default MainPage;
