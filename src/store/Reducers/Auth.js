import { TapGestureHandler } from "react-native-gesture-handler";
import { AuthState, LogOut } from "../type";

const initalState = {
  isLogin: false,
  login: false,
  loading: false,
  signUp: false,
  created: false,
  appLoading: true
};

export default (state = initalState, action) => {
  switch (action.type) {
    case AuthState:
      return {
        ...state,
        ...action.payload,
      };
    case LogOut:
      return initalState;

    default:
      return state;
  }
};
