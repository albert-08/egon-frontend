import { createContext } from "react";

export type ClientContextProps = {
  clients: any,
  getClients: any 
}

const ClientContext = createContext<ClientContextProps>({} as ClientContextProps);

export default ClientContext;