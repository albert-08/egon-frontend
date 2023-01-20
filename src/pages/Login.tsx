import {
  IonAlert,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage
} from '@ionic/react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [login, setLogin] = useState([]);
  const [showAlert, setShowAlert] = useState(true);
  const history = useHistory();

  const loginUser = async() => {
    const url = 'http://127.0.0.1:4000/users/login';
    const user = {
      email,
      password
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    // setLogin(data);
    if (data.length > 0) {
      localStorage.setItem('sec_conn_bd', JSON.stringify(data));
      history.push('/main');
    }
  }

  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Login</IonCardTitle>
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
              <IonItem>
                <IonLabel position='stacked'>Password</IonLabel>
                <IonInput
                  type='password'
                  placeholder='password'
                  onIonChange={(e: any) => setPassword(e.target.value)}
                />
              </IonItem>
            </IonList>
          </IonCardContent>
          <Link to="/recover">Recover password</Link>
          <br />
          <Link to="/register">Register</Link>
          <br />
          <IonButton onClick={loginUser}>Login</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;