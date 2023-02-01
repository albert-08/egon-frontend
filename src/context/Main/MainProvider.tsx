import { useReducer } from "react";
import MainReducer from "./MainReducer";
import MainContext from "./MainContext";

interface MainProviderProps {
  children: JSX.Element | JSX.Element[]
}

const MainProvider: React.FC<MainProviderProps>  = ({ children }) => {
  const initialState: any = {
    main: true,
    addSpaces: false,
    deleteSpace: false,
    menu: false,
    addButton: false,
    editButton: false,
    languageButtons: false
  };
  const [state, dispatch] = useReducer(MainReducer, initialState);

  const getMain = () => {
    dispatch({
      type: 'GET_MAIN',
      payload: null
    });
  };

  const getAddSpaces = () => {
    dispatch({
      type: 'GET_ADD_SPACES',
      payload: null
    });
  };

  const getMenu = () => {
    dispatch({
      type: 'GET_MENU',
      payload: null
    });
  };

  const hideMenu = () => {
    dispatch({
      type: 'HIDE_MENU',
      payload: null
    });
  };

  const getAddButton = () => {
    dispatch({
      type: 'GET_ADD_BUTTON',
      payload: null
    });
  };

  const getDeleteButton = () => {
    dispatch({
      type: 'GET_DELETE_BUTTON',
      payload: null
    });
  };

  const getLanguageButtons = () => {
    dispatch({
      type: 'GET_LANGUAGE_BUTTONS',
      payload: null
    });
  };

  return (
    <MainContext.Provider value={{
      main: state.main,
      addSpaces: state.addSpaces,
      deleteSpace: state.deleteSpace,
      menu: state.menu,
      addButton: state.addButton,
      deleteButton: state.deleteButton,
      languageButtons: state.languageButtons,
      getMain,
      getAddSpaces,
      getMenu,
      hideMenu,
      getAddButton,
      getDeleteButton,
      getLanguageButtons
    }}>
      { children }
    </MainContext.Provider>
  )
}

export default MainProvider;