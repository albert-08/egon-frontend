import { IonContent, IonPage} from '@ionic/react';
import AddedSpaces from '../components/AddedSpaces';
import AddNewSpace from '../components/AddNewSpace';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Main: React.FC = (): any => {
  const getLocalStorage = localStorage.getItem('sec_conn_bd');

  return (
    <IonPage>
      <Header client={{logo: '', name: ''}}/>
        <IonContent>
          {
            getLocalStorage
              ? <AddedSpaces /> 
              : <AddNewSpace />
          }
        </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Main;
