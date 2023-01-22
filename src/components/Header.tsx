import { IonButton, IonButtons, IonHeader, IonToolbar } from '@ionic/react';

interface ContainerProps { }

const Header: React.FC<ContainerProps> = () => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot='end'>
          <IonButton>
            <img 
              src="https://egon-cloud.com/Egon_ERP/_lib/img/logo.png"
              alt="egon-logo"
              width="20"
              height="20" 
            />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
