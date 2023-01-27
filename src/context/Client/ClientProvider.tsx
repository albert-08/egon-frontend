import { useReducer } from "react";
import ClientReducer from "./ClientReducer";
import ClientContext from "./ClientContext";

interface ClientProviderProps {
  children: JSX.Element | JSX.Element[]
}

const ClientProvider: React.FC<ClientProviderProps>  = ({ children }) => {
  const initialState: any = {
    clients: [],
  };
  const [state, dispatch] = useReducer(ClientReducer, initialState);

  const getClients = () => {
    // get data from API
    const getLocalStorageData: any = localStorage.getItem('spaces');
    const data: any = JSON.parse(getLocalStorageData);
    dispatch({
      type: 'GET_CLIENTS',
      payload: data
    });
  };

  return (
    <ClientContext.Provider value={{
      clients: state.clients,
      getClients
    }}>
      { children }
    </ClientContext.Provider>
  )
}

export default ClientProvider;