import { selector } from "recoil";
import { usersState } from "../atoms/usersState";
import { ACTIVE } from "../../constants/constants";

const activeUsersState = selector({
  key: "activeUsers",
  get: ({ get }) => get(usersState).filter((user) => user.status === ACTIVE),
});

export default activeUsersState;
