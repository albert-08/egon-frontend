import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage
} from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Recover: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  return (
    <IonPage>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Recover password</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            <IonItem>
              <IonLabel position='stacked'>Email</IonLabel>
              <IonInput
                placeholder='email'
                onIonChange={(e: any) => setEmail(e.target.value)}
              />
            </IonItem>
          </IonList>
        </IonCardContent>
        <Link to="/">
          <IonButton>
            OK
          </IonButton>
        </Link>
        <Link to="/login">
          <IonButton>
            Return
          </IonButton>
        </Link>
      </IonCard>
    </IonPage>
  );
};

export default Recover;