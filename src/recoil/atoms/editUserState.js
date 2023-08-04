import { atom } from "recoil";
import { initialUser } from "../../constants/constants";

export const editUserState = atom({
  key: "editUser",
  default: initialUser,
});
