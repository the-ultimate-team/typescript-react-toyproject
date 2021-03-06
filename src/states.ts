import { atom } from "recoil";

export interface Food {
  id: number;
  foodName: string;
  category: string;
  dibs: boolean;
  level: string;
  time: string;
  img: string;
  recipe: string[];
  ingredients: { name: string; gram: string; checked: boolean }[];
}

export interface UserTypes {
  name: string;
  id: string;
  password: string;
  isLogin: boolean;
}

export const User = atom<UserTypes>({
  key: "userState",
  default: {
    name: "",
    id: "",
    password: "",
    isLogin: false,
  },
});

// 찜목록 상태관리
export const DibsState = atom<number[]>({
  key: "dibsState",
  default: [],
});

// 장보기 상태관리
export const CartFoodState = atom<Food[]>({
  key: "cartFoodState",
  default: [],
});
