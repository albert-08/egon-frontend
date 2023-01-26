import { createContext } from "react";

export type MainContextProps = {
  main: boolean,
  menu: boolean,
  addButton: boolean,
  editButton: boolean,
  languageButtons: boolean,
  getMain: any,
  getMenu: any,
  hideMenu: any,
  getAddButton: any,
  getEditButton: any,
  getLanguageButtons: any
}

const MainContext = createContext<MainContextProps>({} as MainContextProps);

export default MainContext;