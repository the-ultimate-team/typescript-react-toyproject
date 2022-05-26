import { useRecoilState } from "recoil";
import styled from "styled-components";
import DibsCartPlusFooter from "./DibsCartPlusFooter";
import DibsFoodCard from "./DibsFoodCard";
import { DibsState } from "../states";
import DibsFoodNone from "./DibsFoodNone";
import { useEffect, useState } from "react";
import foodsData from "../foods.json";

const FOOD_CATEGORY = ["전체", "한식", "일식", "중식", "양식"];

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

const Dibs = () => {
  const [dibsList, setDibsList] = useRecoilState<number[]>(DibsState);
  const [categorySelectTab, setCategorySelectTab] = useState<string>("전체");

  // 찜록록 전체 유지
  const [dibsFoodList, setDibsFoodList] = useState<Food[]>([]);

  // 찜목록 음식 카테고리 분류
  const [categoryFood, setCategoryFood] = useState<Food[]>([]);

  // 처음 찜록록 들어갔을 시에 나오는 목록
  useEffect(() => {
    setDibsFoodList(
      foodsData.foods.filter((food) => dibsList.includes(food.id))
    );
    setCategoryFood(
      foodsData.foods.filter((food) => dibsList.includes(food.id))
    );
  }, []);

  const categorySelectHandler = (category: string) => {
    setCategorySelectTab(category);
    if (category === "전체") setCategoryFood(dibsFoodList);
    else
      setCategoryFood(
        dibsFoodList.filter((food) => food.category === category)
      );
  };

  return (
    <div style={{ position: "relative", width: "100vw" }}>
      <Wrapper>
        <DibsFontStyle>찜목록</DibsFontStyle>
        <BtnSort>
          {FOOD_CATEGORY.map((category, index) => (
            <FoodCategoryBtn
              onClick={() => categorySelectHandler(category)}
              selectTab={category === categorySelectTab}
              key={`category_${index}`}
            >
              {category}
            </FoodCategoryBtn>
          ))}
        </BtnSort>

        {dibsList.length === 0 ? (
          <DibsFontSort>
            <DibsFoodNone
              text="찜목록이 비어있습니다."
              subText="찜하기로 추가하는 메뉴가 여기에 표시 됩니다."
            />
          </DibsFontSort>
        ) : (
          <DibsFoodCard categoryFoodInfoProps={categoryFood} />
        )}
      </Wrapper>
      <CartFooterList>{/* <DibsCartPlusFooter /> */}</CartFooterList>
    </div>
  );
};

const CartFooterList = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const FoodCategoryBtn = styled.button<{ selectTab: boolean }>`
  background: ${(props) => (props.selectTab ? "#6fa9cd" : "#fff")};
  border: 1px solid #6fa9cd;
  font-weight: ${(props) => (props.selectTab ? 600 : 500)};
  font-size: 14px;
  color: ${(props) => (props.selectTab ? "#fff" : "#6fa9cd")};
  border-radius: 15px;
  width: 56px;
  height: 30px;
  margin-right: 7px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

const BtnSort = styled.div`
  display: flex;
  margin-top: 17px;
  margin-bottom: 25px;
`;

const DibsFontStyle = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #6fa9cd;
`;

const DibsFontSort = styled.div`
  height: calc(100vh - 204px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background: #e4f1f8;
  height: 100vh;
  padding: 27px 31px 0 31px;
`;

export default Dibs;
