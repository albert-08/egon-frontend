import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList } from '@ionic/react';
import { Link } from 'react-router-dom';

interface ContainerProps { }

const AddedSpaces: React.FC<ContainerProps> = ({props}: any) => {
  const clientsData: any = localStorage.getItem('sec_conn_bd');
  const clients: any = JSON.parse(clientsData);

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Espacios</IonCardTitle>
        <IonCardSubtitle>Espacios agregados:</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          {
            clients.map((client: any) => (
              <div key={client.csiid}>
                <Link to="/home">
                  <IonItem>
                    <IonAvatar>
                      <img
                        src='logo'
                        alt='logo-name'
                      />
                    </IonAvatar>
                    <IonLabel>
                      <p>{client.alias}</p>
                    </IonLabel>
                  </IonItem>
                </Link>
              </div>
            ))
          }
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default AddedSpaces;
