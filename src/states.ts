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

// 찜목록 상태관리
export const DibsState = atom<number[]>({
  key: "dibsState",
  default: [],
});

//

// 장보기 상태관리
export const CartFoodState = atom<number[]>({
  key: "cartFoodState",
  default: [],
});
