import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList } from '@ionic/react';
import { Space } from '../models/space.model';
import SpaceItem from './SpaceItem';

interface ContainerProps { }

const AddedSpaces: React.FC<ContainerProps> = () => {
  const spacesData: any = localStorage.getItem('sec_conn_bd');
  const spaces: any = JSON.parse(spacesData);
  
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Espacios</IonCardTitle>
        <IonCardSubtitle>Espacios agregados:</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          { spaces?.map((space: Space) => <SpaceItem key={space.csiid} space={space} />) }   
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default AddedSpaces;
