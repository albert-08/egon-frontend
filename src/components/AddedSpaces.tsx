import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList } from '@ionic/react';
import { Link } from 'react-router-dom';

interface ContainerProps { }

const AddedSpaces: React.FC<ContainerProps> = ({props}: any) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Espacios</IonCardTitle>
        <IonCardSubtitle>Espacios agregados:</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <Link to="/">
            <IonItem>
              <IonAvatar>
                <img
                  src='logo'
                  alt='logo-name'
                />
              </IonAvatar>
              <IonLabel>
                <p>name</p>
              </IonLabel>
            </IonItem>
          </Link> 
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default AddedSpaces;
