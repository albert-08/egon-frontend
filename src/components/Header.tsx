import { IonButton, IonButtons, IonHeader, IonIcon, IonToolbar } from '@ionic/react';
import { logIn } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Client } from '../models/client.model';

interface ContainerProps {
  client: Client
}

const Header: React.FC<ContainerProps> = ({ client }) => {
  const [t, i18n] = useTranslation("translation");

  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonButton>
            {
              client.logo !== ''
                ? <img
                    src={client.logo}
                    alt="logo"
                    width="40"
                    height="40"  
                  />
                : <></>
            }
          </IonButton>
          <IonButton>
            {t('main.main')}
          </IonButton>
        </IonButtons>
        <IonButtons slot='end'>
          <Link to="/login">
            <IonButton fill="outline">
              <IonIcon slot="start" icon={logIn}></IonIcon>
              Login
            </IonButton>
          </Link>
          <IonButton>
            <img 
              src="https://egon-cloud.com/Egon_ERP/_lib/img/logo.png"
              alt="egon-logo"
              width="20"
              height="20" 
            />
          </IonButton>
        </IonButtons>
        <IonButtons>
          <IonButton fill="solid" onClick={() => i18n.changeLanguage("es_mx")}>ES-MX</IonButton>
          <IonButton fill="solid" onClick={() => i18n.changeLanguage("es_col")}>ES-COL</IonButton>
          <IonButton fill="solid" onClick={() => i18n.changeLanguage("en")}>EN</IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
