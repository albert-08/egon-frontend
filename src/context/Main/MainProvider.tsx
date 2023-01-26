import { useReducer } from "react";
import MainReducer from "./MainReducer";
import MainContext from "./MainContext";

interface MainProviderProps {
  children: JSX.Element | JSX.Element[]
}

const MainProvider: React.FC<MainProviderProps>  = ({ children }) => {
  const initialState: any = {
    main: true,
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

  const getAddButton = () => {
    dispatch({
      type: 'GET_ADD_BUTTON',
      payload: null
    });
  };

  const getEditButton = () => {
    dispatch({
      type: 'GET_EDIT_BUTTON',
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
      addButton: state.addButton,
      editButton: state.editButton,
      languageButtons: state.languageButtons,
      getMain,
      getAddButton,
      getEditButton,
      getLanguageButtons
    }}>
      { children }
    </MainContext.Provider>
  )
}

export default MainProvider;