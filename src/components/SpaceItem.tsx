import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
import { Link } from 'react-router-dom';
import { Space } from '../models/space.model';

interface ContainerProps { 
  space: Space
}

const SpaceItem: React.FC<ContainerProps> = ({space}) => {
  return (
    <Link to="/home">  
      <IonItem>
        <IonAvatar slot='start'>
          <img
            src='logo'
            alt='logo-name'
          />
        </IonAvatar>
        <IonLabel>
          <p>{space.alias}</p>
        </IonLabel>
      </IonItem>
    </Link>      
  );
};

export default SpaceItem;
