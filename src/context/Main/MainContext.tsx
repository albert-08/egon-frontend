import { createContext } from "react";

export type MainContextProps = {
  main: boolean,
  addSpaces: boolean,
  deleteSpaces: boolean,
  menu: boolean,
  addButton: boolean,
  deleteButton: boolean,
  languageButtons: boolean,
  getMain: any,
  getAddSpaces: any,
  getMenu: any,
  hideMenu: any,
  saveDelete: any,
  getAddButton: any,
  getDeleteButton: any,
  getLanguageButtons: any
}

const MainContext = createContext<MainContextProps>({} as MainContextProps);

export default MainContext;