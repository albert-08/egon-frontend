import { IonButton, IonButtons } from '@ionic/react';
import { useTranslation } from 'react-i18next';

interface ContainerProps { }

const ChangeLanguageButtons: React.FC<ContainerProps> = () => {
  const [t, i18n] = useTranslation("translation");

  return (
    <IonButtons>
      <IonButton fill="solid" onClick={() => i18n.changeLanguage("es_mx")}>ES-MX</IonButton>
      <IonButton fill="solid" onClick={() => i18n.changeLanguage("es_col")}>ES-COL</IonButton>
      <IonButton fill="solid" onClick={() => i18n.changeLanguage("en")}>EN</IonButton>
    </IonButtons>
  );
};

export default ChangeLanguageButtons;
