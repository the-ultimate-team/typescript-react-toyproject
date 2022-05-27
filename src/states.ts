import { atom } from "recoil";

interface Food {
  id: number;
  foodName: string;
  category: string;
  dibs: boolean;
  level: string;
  time: string;
  img: string;
  recipe: string[];
  ingredients: { name: string; gram: string }[];
}

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

// 장보기 상태관리
export const CartFoodState = atom<Food[]>({
  key: "cartFoodState",
  default: [],
});
