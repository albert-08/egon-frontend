import { IonContent, IonPage} from '@ionic/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

const MainPage: React.FC = (): any => {
  return (
    <IonPage>
      <Header client={{logo: '', name: '', logo2: '', slides: ''}}/>
        <IonContent>
          <Main />
        </IonContent>
      <Footer />
    </IonPage>
  );
};

export default MainPage;
