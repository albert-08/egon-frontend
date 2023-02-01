import { GET_ADD_BUTTON, GET_ADD_SPACES, GET_DELETE_BUTTON, GET_LANGUAGE_BUTTONS, GET_MAIN, GET_MENU, HIDE_MENU, SAVE_DELETE } from "../types"

export default (state: any, action: any) => {
  const { payload, type } = action;

  switch (type) {
    case GET_MAIN:
      return {
        main: true,
        addSpaces: false,
        deleteSpace: false,
        menu: false,
        addButton: false,
        editButton: false,
        languageButtons: false
      }
    case GET_ADD_SPACES:
      return {
        main: false,
        addSpaces: true,
        deleteSpace: false,
        menu: false,
        addButton: false,
        editButton: false,
        languageButtons: false
      }
    case GET_MENU:
      return {
        ...state,
        menu: true
      }
    case HIDE_MENU:
      return {
        ...state,
        menu: false
      }
    case GET_ADD_BUTTON:
      return {
        main: false,
        addSpaces: false,
        deleteSpace: false,
        menu: false,
        addButton: true,
        editButton: false,
        languageButtons: false
      }
    case GET_DELETE_BUTTON:
      return {
        main: false,
        addSpaces: false,
        deleteSpaces: true,
        menu: false,
        addButton: false,
        languageButtons: false
      }
    case SAVE_DELETE:
      return {
        ...state,
        deleteSpaces: false
      }
    case GET_LANGUAGE_BUTTONS:
      return {
        main: false,
        addSpaces: false,
        deleteSpace: false,
        menu: false,
        addButton: false,
        editButton: false,
        languageButtons: true
      }
  
    default:
      return state
  }
}