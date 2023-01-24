import { IonButton, IonList } from "@ionic/react";
import { useState } from "react";
import AddNewSpaceButton from "./AddNewSpaceButton";
import EditSpacesButton from "./EditSpacesButton";
import './SpacesMenu.css'

interface ContainerProps { }

const SpacesMenu: React.FC<ContainerProps> = () => {
  const [button, setButton] = useState<string>('');

  const changeLanguageButton = () => {
    setButton('language');
  }
  
  const addSpaceButton = () => {
    setButton('add');
  }
  
  const editSpaceButton = () => {
    setButton('edit');
  }

  if (button.localeCompare('language') === 0) {
    return <></>
  }

  if (button.localeCompare('add') === 0) {
    return <AddNewSpaceButton />
  }

  if (button.localeCompare('edit') === 0) {
    return <EditSpacesButton/>
  }

  return (
    <IonList>
      <IonButton
        expand="full"
        color="light"
        onClick={() => changeLanguageButton()}
      >
        Cambiar idioma
      </IonButton>  
      <IonButton
        expand="full"
        color="light"
        onClick={() => addSpaceButton()}
      >
        Agregar espacio
      </IonButton>
      <IonButton
        expand="full"
        color="light"
        onClick={() => editSpaceButton()}
      >
        Editar espacios
      </IonButton>       
    </IonList>
  );
};

export default SpacesMenu;
