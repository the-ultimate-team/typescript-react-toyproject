import { atom } from "recoil";

export const User = atom({
  key: "userState",
  default: {
    name: "",
    id: "",
    password: "",
  },
});
