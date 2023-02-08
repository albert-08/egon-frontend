import { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import ClientContext from '../context/Client/ClientContext';
import AddedSpaces from './AddedSpaces';
import AddNewSpace from './AddNewSpace';

interface ContainerProps { }

const Main: React.FC<ContainerProps> = () => {
  const { clients, getClients } = useContext(ClientContext);
  
  useEffect(() => {
    if (!localStorage.getItem('spaces')) {
      localStorage.setItem('spaces', JSON.stringify([]));
    }
    getClients();
  }, []);
   
  if (clients.length === 1) {
    const spacesData: any = localStorage.getItem('spaces');
    const spaces = JSON.parse(spacesData);
    const baseUrl = spaces[0].url;
    const bdalias = spaces[0].bdalias;
    const url = `https://${baseUrl}/${bdalias}`;
    return <>{window.location.replace(url)}</>
  } else if (clients.length > 1) {
    return <AddedSpaces />
  } else {
    return <AddNewSpace />
  }
};

export default Main;
