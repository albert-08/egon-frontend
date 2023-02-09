import { IonButton, IonList } from "@ionic/react";
import { useContext } from "react";
import MainContext from "../context/Main/MainContext";
import './SpacesMenu.css'

interface ContainerProps { }

const SpacesMenu: React.FC<ContainerProps> = () => {
  const { getAddSpaces, getDeleteButton, getLanguageButtons } = useContext(MainContext);

  const changeLanguageButton = () => {
    getLanguageButtons();
  }
  
  const addSpaceButton = () => {
    getAddSpaces();
  }
  
  const deleteSpaces = () => {
    getDeleteButton();
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
        Agregar Organización
      </IonButton>
      <IonButton
        expand="full"
        color="light"
        onClick={() => deleteSpaces()}
      >
        Eliminar Organizaciones
      </IonButton>       
    </IonList>
  );
};

export default SpacesMenu;
