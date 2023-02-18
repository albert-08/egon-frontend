import { IonFooter, IonTitle, IonToolbar } from '@ionic/react';

interface ContainerProps { background: any }

const Footer: React.FC<ContainerProps> = ({background}) => {
  console.log(background)
  const el: HTMLIonFooterElement | null = document.querySelector('ion-footer');
  el?.style.setProperty('--background', background);

  return (
    <IonFooter>
      <IonToolbar>
        <IonTitle>
          Egon
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
