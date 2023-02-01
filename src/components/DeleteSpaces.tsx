import { IonButton, IonCard, IonCardContent, IonList } from '@ionic/react';
import { useContext } from 'react';
import ClientContext from '../context/Client/ClientContext';
import MainContext from '../context/Main/MainContext';
import { Space } from '../models/space.model';
import DeleteSpaceItem from './DeleteSpaceItem';

interface ContainerProps { }

const DeleteSpaces: React.FC<ContainerProps> = () => {
  const { clients } = useContext(ClientContext);
  const { saveDelete } = useContext(MainContext);

  const onSave = () => {
    saveDelete();
  }

  return (
    <IonCard>
      <IonCardContent>
        <IonList>
          { clients?.map((client: Space) => <DeleteSpaceItem key={client.csiid} space={client} />) }   
        </IonList>
      </IonCardContent>
      <IonButton
        color='danger'
        onClick={onSave}
      >
        Salir
      </IonButton>
    </IonCard>
  );
};

export default DeleteSpaces;
