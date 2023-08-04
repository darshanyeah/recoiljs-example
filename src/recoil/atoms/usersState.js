import { atom } from "recoil";
import data from "../../dummy_data.json";

export const usersState = atom({
  key: "users",
  default: data.users,
});
