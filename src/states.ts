import { atom } from "recoil";

export interface UserTypes {
  name: string;
  id: string;
  password: string;
}

export const User = atom<UserTypes>({
  key: "userState",
  default: {
    name: "",
    id: "",
    password: "",
  },
});

export const DibsState = atom<number[]>({
  key: "dibsState",
  default: [],
});
