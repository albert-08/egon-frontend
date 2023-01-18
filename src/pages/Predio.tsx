import { IonButton, IonInput, IonItem, IonLabel, IonList, IonAlert, IonContent } from '@ionic/react';
import React, { useState } from 'react';

const Predio: React.FC = (): any => {
  const [state, setState] = useState({
    interface: true,
    data: [],
    id: 0
  });
  const [showAlert, setShowAlert] = useState(true);

  const getData = async (queryId: number) => {
    const response = await fetch(`http://127.0.0.1:4000/api/v1/predios/${queryId}`, {
      method: 'GET',
      mode: 'cors'
    });
    const newData = await response.json();
    setState({
      ...state,
      interface: false,
      data: newData
    });
  };
  
  const onSetId = (value: number) => {
    setState({
      ...state,
      id: value
    });
  };

  const onGetData = (queryId: number) => {
    getData(queryId);
  };

  const onReturn = () => {
    setState({
      ...state,
      interface: true,
      id: 0
    });
  };
  
  if (state.interface) {
    return (
      <IonList>
        <IonItem>
          <IonLabel>Ingrese ID de predio: </IonLabel>
          <IonInput
            placeholder="ID"
            onIonChange={(event: any) => {
              onSetId(event.target.value);
            }}
          ></IonInput>
          <IonButton
            onClick={() => {
              onGetData(state.id);
              console.log(state);
            }}
          >Get data</IonButton>
        </IonItem>
      </IonList>
    );
  } else {
    if (state.id <= 0) {
      return (
        <IonContent>
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="Alert"
            subHeader="Important message"
            message="Ingresa un ID valido!"
            buttons={[{
              text: 'OK',
              handler: () => {
                onReturn();
              }
            }]}
          />
        </IonContent>
      );  
    } else {
      return state.data.map((d: any) => (
        <>
          <IonItem>
            <IonLabel>
              <h2>Precuenta:</h2>
              <p>{d.precuenta}</p>
              <h2>Pernomde:</h2>
              <p>{d.pernomdes}</p>
            </IonLabel>
            <IonButton
              onClick={() => {
                onReturn();
              }}
            >Return</IonButton>
          </IonItem>
        </>
      ));
    }
  }
};

export default Predio;
