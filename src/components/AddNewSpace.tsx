import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { useState } from 'react';
import AddNewSpaceButton from './AddNewSpaceButton';
import './AddNewSpace.css';

interface ContainerProps { }

const AddNewSpace: React.FC<ContainerProps> = () => {
  const [alias, setAlias] = useState<string>('');
  const [cancel, setCancel] = useState<boolean>(false);
  const [clients, setClients] = useState<any>([]); 

  const url = 'http://127.0.0.1:4000/clients/';

  const onCancel = () => {
    setCancel(true);
  }

  const getData = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ alias }),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      setClients([...clients, data]);
    } catch (error) {
      alert("Error en el nombre del espacio, verifique con atención a clientes");
    }
  };

  if (clients.length > 0) {
    localStorage.setItem('sec_conn_bd', JSON.stringify(clients));  
  }
    
  if (cancel) {
    return (
      <></>
    )
  }

  return (
    <IonList>
      <IonItem>
        <IonLabel>Espacio:</IonLabel>
        <IonInput
          placeholder="Espacio"
          onIonChange={(event: any) => {
            setAlias(event.target.value);
          }}
        ></IonInput>
      </IonItem>
      <IonButton
        color='success'
        onClick={() => getData()}
      >
        Aceptar
      </IonButton>
      <IonButton
        color='danger'
        onClick={() => onCancel()}
      >
        Cancelar
      </IonButton>
    </IonList>
  );
};

export default AddNewSpace;
