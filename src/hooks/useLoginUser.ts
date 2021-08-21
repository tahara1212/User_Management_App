import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
} from "../providers/LoginUserProvider";

// コンポーネント単位でuseContextを使用するのを省略する為、HOOKS化
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
