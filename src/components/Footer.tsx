import { IonFooter, IonTitle, IonToolbar } from '@ionic/react';

interface ContainerProps { }

const Footer: React.FC<ContainerProps> = () => {
  return (
    <IonFooter>
      <IonToolbar color='primary'>
        <IonTitle>
          Egon
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
