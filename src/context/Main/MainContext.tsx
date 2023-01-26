import { createContext } from "react";

export type MainContextProps = {
  main: boolean,
  addButton: boolean,
  editButton: boolean,
  languageButtons: boolean,
  getMain: any,
  getAddButton: any,
  getEditButton: any,
  getLanguageButtons: any
}

const MainContext = createContext<MainContextProps>({} as MainContextProps);

export default MainContext;