import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { useContext, useState } from 'react';
import ClientContext from '../context/Client/ClientContext';
import MainContext from '../context/Main/MainContext';
import './AddNewSpace.css';

interface ContainerProps {}

const AddNewSpace: React.FC<ContainerProps> = () => {
  const { clients, getClients } = useContext(ClientContext);
  const { getMain } = useContext(MainContext);
  const [bdalias, setBDAlias] = useState<string>('');

  const url = 'http://127.0.0.1:4000/clients/';

  const getData = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ bdalias }),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      if (typeof data === "object") {
        localStorage.setItem('spaces', JSON.stringify([...clients, data]));
        getClients();
        getMain();
      } else {
        alert("Error en el nombre del espacio, verifique con atención a clientes");
      }
    } catch (error) {
      alert("Error en el nombre del espacio, verifique con atención a clientes");
    }
  };

  const onCancel = () => {
    getMain();
  }

  return (
    <IonList>
      <IonItem>
        <IonLabel>Organización:</IonLabel>
        <IonInput
          placeholder="Organización"
          onIonChange={(event: any) => {
            setBDAlias(event.target.value);
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
