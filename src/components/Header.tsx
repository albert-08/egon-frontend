import { IonButton, IonButtons, IonHeader, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import MainContext from '../context/Main/MainContext';
import { Client } from '../models/client.model';
import SpacesMenu from './SpacesMenu';

interface ContainerProps {
  logo: any
}

const Header: React.FC<ContainerProps> = ({ logo }) => {
  const { menu, getMenu, hideMenu } = useContext(MainContext);

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
