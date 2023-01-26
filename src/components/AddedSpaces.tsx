import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList } from '@ionic/react';
import { useContext } from 'react';
import ClientContext from '../context/Client/ClientContext';
import { Space } from '../models/space.model';
import SpaceItem from './SpaceItem';

interface ContainerProps { }

const AddedSpaces: React.FC<ContainerProps> = () => {
  const { clients } = useContext(ClientContext);
  
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Espacios</IonCardTitle>
        <IonCardSubtitle>Espacios agregados:</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          { clients?.map((client: Space) => <SpaceItem key={client.csiid} space={client} />) }   
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default AddedSpaces;
