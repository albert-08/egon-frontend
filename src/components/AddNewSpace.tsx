import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { useContext, useState } from 'react';
import ClientContext from '../context/Client/ClientContext';
import './AddNewSpace.css';

interface ContainerProps {}

const AddNewSpace: React.FC<ContainerProps> = () => {
  const { clients } = useContext(ClientContext);
  const [bdalias, setBDAlias] = useState<string>('');
  const [agree, setAgree] = useState<boolean>(false);
  const [cancel, setCancel] = useState<boolean>(false);

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
      localStorage.setItem('sec_conn_bd', JSON.stringify([...clients, data]));
      alert("Espacio añadido exitosamente");
      setAgree(true);
    } catch (error) {
      alert("Error en el nombre del espacio, verifique con atención a clientes");
    }
  };

  const onCancel = () => {
    setCancel(true);
  }

  if (agree) {
    return (
      <></>
    );
  }
    
  if (cancel) {
    return (
      <></>
    );
  }

  return (
    <IonList>
      <IonItem>
        <IonLabel>Espacio:</IonLabel>
        <IonInput
          placeholder="Espacio"
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
