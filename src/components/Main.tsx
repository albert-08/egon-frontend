import { useContext, useEffect } from 'react';
import ClientContext from '../context/Client/ClientContext';
import AddedSpaces from './AddedSpaces';
import AddNewSpace from './AddNewSpace';

interface ContainerProps { }

const Main: React.FC<ContainerProps> = () => {
  const { clients, getClients } = useContext(ClientContext);
  
  useEffect(() => {
    if (!localStorage.getItem('sec_conn_bd')) {
      localStorage.setItem('sec_conn_bd', JSON.stringify([]));
    }
    getClients();
  }, []);
  
  if (clients.length > 0) {
    return <AddedSpaces />
  } else {
    return <AddNewSpace />
  }
};

export default Main;