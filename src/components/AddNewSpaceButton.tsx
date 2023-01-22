import { IonButton } from '@ionic/react';
import React, { useState } from 'react';
import AddNewSpace from './AddNewSpace';
import './AddNewSpace.css';

interface ContainerProps { }

const AddNewSpaceButton: React.FC<ContainerProps> = () => {
  const [space, setSpace] = useState<boolean>(false);

  const addSpace = () => {
    setSpace(true);
  }

  if (space) {
    return (
      <AddNewSpace />
    );
  }

  return (
    <IonButton
      onClick={() => addSpace()}
    >
      Nuevo Espacio
    </IonButton>
  );
};

export default AddNewSpaceButton;
