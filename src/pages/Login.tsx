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
import { Link, useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [login, setLogin] = useState([]);
  const history = useHistory();

  const loginUser = async() => {
    const url = 'http://127.0.0.1:4000/users/login';
    const user = {
      username,
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
    setLogin(data);
    history.push('/tab2');
  }

  if (login.length > 0) {
    localStorage.setItem('user', JSON.stringify(login));
  }

  return (
    <IonPage>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Login</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            <IonItem>
              <IonLabel position='stacked'>Username</IonLabel>
              <IonInput
                placeholder='username'
                onIonChange={(e: any) => setUsername(e.target.value)}
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
    </IonPage>
  );
};

export default Login;