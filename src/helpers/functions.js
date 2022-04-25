import { users } from "./const";

export const checkUser = (candidate) => {
  return users.find(
    (user) =>
      user.email === candidate.email && user.password === candidate.password
  );
};
