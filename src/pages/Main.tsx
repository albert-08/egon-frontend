import { IonContent, IonPage} from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import AddedSpaces from '../components/AddedSpaces';
import AddNewSpace from '../components/AddNewSpace';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ClientContext from '../context/Client/ClientContext';

const Main: React.FC = (): any => {
  const { getClients } = useContext(ClientContext);
  const [spaces, setSpaces] = useState([]);
  
  useEffect(() => {
    // getClients();
    const getLocalStorage: any = localStorage.getItem('sec_conn_bd');
    if (getLocalStorage) {
      setSpaces(JSON.parse(getLocalStorage));
    }
  }, []);

  console.log(spaces);

  return (
    <IonPage>
      <Header client={{logo: '', name: '', logo2: '', slides: ''}}/>
        <IonContent>
          {
            spaces.length > 0
              ? <AddedSpaces /> 
              : <AddNewSpace />
          }
        </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Main;
