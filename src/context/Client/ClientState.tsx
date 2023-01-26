import { useReducer } from "react";
import ClientReducer from "./ClientReducer";
import ClientContext from "./ClientContext";

const ClientState = (props: any) => {
  const initialState: any = {
    clients: [],
  };
  const [state, dispatch] = useReducer(ClientReducer, initialState);

  const getClients = () => {
    // get data from API
    dispatch({
      type: 'GET_CLIENTS'
      payload: res.data.data
    });
  };

  return (
    <ClientContext.Provider value={{
      clients: state.clients,
      getClients
    }}>
      {props.childres}
    </ClientContext.Provider>
  )
}

export default ClientState;