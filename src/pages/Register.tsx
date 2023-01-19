import {
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
  IonPage,
} from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user.model';

const Register: React.FC = () => {
  const [state, setState] = useState<User>({
    name: '',
    secondName: '',
    lastName: '',
    secondLastName: '',
    email: '',
    password: ''
  });

  const [cstate, setCstate] = useState({
    cemail: '',
    cpassword: ''
  })

  const registerUser = async () => {
    const url = 'http://127.0.0.1:4000/users';
    const user = {
      ...state
    }
    console.log(`State: ${JSON.stringify(user)}`)
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Register</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel position='stacked'>Name</IonLabel>
                <IonInput
                  placeholder='name'
                  onIonChange={(e: any) => setState(
                      {
                        ...state,
                        name: e.target.value
                      }
                    )
                  }
                />
              </IonItem>
              <IonItem>
                <IonLabel position='stacked'>Second Name</IonLabel>
                <IonInput
                  placeholder='second name'
                  onIonChange={(e: any) => setState(
                      {
                        ...state,
                        secondName: e.target.value
                      }
                    )
                  }
                />
              </IonItem>
              <IonItem>
                <IonLabel position='stacked'>Last Name</IonLabel>
                <IonInput
                  placeholder='last name'
                  onIonChange={(e: any) => setState(
                      {
                        ...state,
                        lastName: e.target.value
                      }
                    )
                  }
                />
              </IonItem>
              <IonItem>
                <IonLabel position='stacked'>Second Last Name</IonLabel>
                <IonInput
                  placeholder='second last name'
                  onIonChange={(e: any) => setState(
                      {
                        ...state,
                        secondLastName: e.target.value
                      }
                    )
                  }
                />
              </IonItem>
              <IonItem>
                <IonLabel position='stacked'>Email</IonLabel>
                <IonInput
                  placeholder='email'
                  onIonChange={(e: any) => setState(
                      {
                        ...state,
                        email: e.target.value
                      }
                    )
                  }
                />
              </IonItem>
              <IonItem>
                <IonLabel position='stacked'>Confirm Email</IonLabel>
                <IonInput
                  placeholder='confirm email'
                  onIonChange={(e: any) => setCstate(
                      {
                        ...cstate,
                        cemail: e.target.value
                      }
                    )
                  }
                />
              </IonItem>
              <IonItem>
                <IonLabel position='stacked'>Password</IonLabel>
                <IonInput
                  type='password'
                  placeholder='password'
                  onIonChange={(e: any) => setState(
                      {
                        ...state,
                        password: e.target.value
                      }
                    )
                  }
                />
              </IonItem>
              <IonItem>
                <IonLabel position='stacked'>Confirm Password</IonLabel>
                <IonInput
                  type='password'
                  placeholder='confirm password'
                  onIonChange={(e: any) => setCstate(
                      {
                        ...cstate,
                        cpassword: e.target.value
                      }
                    )
                  }
                />
              </IonItem>
            </IonList>
          </IonCardContent>
          <IonButton onClick={registerUser}>Register</IonButton>
          <Link to="/login">
            <IonButton>
              Return
            </IonButton>
          </Link>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
