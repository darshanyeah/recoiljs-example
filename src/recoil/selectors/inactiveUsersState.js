import { selector } from "recoil";
import { usersState } from "../atoms/usersState";
import { INACTIVE } from "../../constants/constants";

const inactiveUsersState = selector({
  key: "inactiveUsers",
  get: ({ get }) => get(usersState).filter((user) => user.status === INACTIVE),
});

export default inactiveUsersState;
