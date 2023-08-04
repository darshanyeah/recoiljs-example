export const ADMIN = "admin";
export const USER = "user";
export const PARTNER = "partner";
export const ANALYST = "analyst";

export const ROLES = [ADMIN, USER, PARTNER, ANALYST];

export const ACTIVE = "active";
export const INACTIVE = "inactive";

export const initialUser = {
  id: "",
  username: "",
  role: USER,
  email: "",
  status: ACTIVE,
};
