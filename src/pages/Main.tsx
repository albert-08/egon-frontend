import { IonContent, IonPage} from '@ionic/react';
import AddedSpaces from '../components/AddedSpaces';
import AddNewSpace from '../components/AddNewSpace';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Main: React.FC = (): any => {
  // useEffect(() => {
  //   getData();
  //   getInfo();
  // }, []);
  // // const prediosData: any = localStorage.getItem('sec_conn_bd');
  // // const predios: any = JSON.parse(prediosData);
    
  // const prediosData: any = localStorage.getItem('sec_conn_bd');
  // const predios: any = JSON.parse(prediosData);
  // console.log(`Local storage: ${JSON.stringify(predios)}`);

  const getLocalStorage = localStorage.getItem('sec_conn_bd');

  return (
    <IonPage>
      <Header />
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
