import { IonButton, IonButtons, IonHeader, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MainContext from '../context/Main/MainContext';
import { Client } from '../models/client.model';
import SpacesMenu from './SpacesMenu';

interface ContainerProps {
  logo: any
}

const Header: React.FC<ContainerProps> = ({ logo }) => {
  let history = useHistory();
  const { menu, getMenu, hideMenu } = useContext(MainContext);

  const toMain = () => {
    history.push("/EgonPortal");
  }

  const toggleMenu = () => {
    if (menu) {
      hideMenu();
    } else {
      getMenu();
    }
  }

  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonButton>
            {
              logo.logoURL !== ''
                ? <img
                    src={logo.logoURL}
                    alt="logo"
                    width="40"
                    height="40"  
                  />
                : <></>
            }
          </IonButton>
          <IonButton
            onClick={toMain}
          >
            Inicio
          </IonButton>
        </IonButtons>
        <IonButtons slot='end'>
          <IonButton
            onClick={() => toggleMenu()}
          >
            <img 
              src="https://egon-cloud.com/Egon_ERP/_lib/img/logo.png"
              alt="egon-logo"
              width="20"
              height="20" 
            />
          </IonButton>
        </IonButtons>
      </IonToolbar>
      {
        menu
          ? <SpacesMenu />
          : <></>
      }
    </IonHeader>
  );
};

export default Header;
