import { IonButton, IonButtons, IonIcon } from '@ionic/react';
import { logIn } from 'ionicons/icons';
import { Link } from 'react-router-dom';

interface ContainerProps { }

const LoginButton: React.FC<ContainerProps> = () => {
  return (
    <IonButtons slot='end'>
      <Link to="/login">
        <IonButton fill="outline">
          <IonIcon slot="start" icon={logIn}></IonIcon>
            Login
        </IonButton>
        </Link>
    </IonButtons>
  );
};

export default LoginButton;
