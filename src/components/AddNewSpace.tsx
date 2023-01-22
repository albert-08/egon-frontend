import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { useState } from 'react';
import './AddNewSpace.css';
import AddNewSpaceButton from './AddNewSpaceButton';

interface ContainerProps { }

const AddNewSpace: React.FC<ContainerProps> = () => {
  const [alias, setAlias] = useState<string>('');
  const [cancel, setCancel] = useState<boolean>(false);

  const onCancel = () => {
    setCancel(true);
  }

  const getData = async (db: string) => {
    const response = await fetch(`http://127.0.0.1:4000/client/${db}`);
    const data = await response.json();
    localStorage.setItem('sec_conn_bd', JSON.stringify(data));
  };

  if (cancel) {
    return (
      <>
        <AddNewSpaceButton />
      </>
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
        onClick={() => getData(alias)}
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
