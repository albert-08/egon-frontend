import { GET_CLIENTS } from "../types"

export default (state: any, action: any) => {
  const { payload, type } = action;

  switch (type) {
    case GET_CLIENTS:
      return {
        ...state,
        clients: payload
      }
      break;
  
    default:
      break;
  }
}