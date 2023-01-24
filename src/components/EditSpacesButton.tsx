import { IonButton } from '@ionic/react';
import React from 'react';

interface ContainerProps { }

const EditSpacesButton: React.FC<ContainerProps> = () => {
  // const [space, setSpace] = useState<boolean>(false);

  // const addSpace = () => {
  //   setSpace(true);
  // }

  // if (space) {
  //   return (
  //     <AddNewSpace />
  //   );
  // }

  return (
    <IonButton
      onClick={() => console.log('Editar espacios')}
    >
      Editar Espacios
    </IonButton>
  );
};

export default EditSpacesButton;
