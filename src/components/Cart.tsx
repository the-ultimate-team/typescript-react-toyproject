import React from "react";
import styled from "styled-components";
import DibsFoodNone from "./DibsFoodNone";
import DibsCartMinusBtnImg from "../assets/dibsCartMinusBtnImg.svg";
import CartCloseBtnImg from "../assets/cartCloseBtnImg.svg";
import { useRecoilState } from "recoil";
import { CartFoodState } from "../states";

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

const Cart = () => {
  const [foodCartList, setFoodCartList] = useRecoilState<Food[]>(CartFoodState);

  return (
    <CartWrapper>
      <CartListFontStyle>장보기 목록</CartListFontStyle>

      {foodCartList.map((food) => (
        <CartFoodCard>
          <FoodNameMinusStyle>
            <FoodNameStyle>{food.foodName}</FoodNameStyle>
            <img
              src={DibsCartMinusBtnImg}
              alt="장바구니 목록 삭제 버튼 이미지"
            />
          </FoodNameMinusStyle>
          <FoodIngredientsPadding>
            <FoodIngredientsSort>
              <div>
                <div></div>
                <FoodIngredients>재료이름</FoodIngredients>
              </div>
              <div style={{ display: "flex" }}>
                <FoodIngredientsGram>그램</FoodIngredientsGram>
                <img src={CartCloseBtnImg} alt="음식 재료 닫기 버튼" />
              </div>
            </FoodIngredientsSort>
          </FoodIngredientsPadding>
        </CartFoodCard>
      ))}

      {/* <CenterSort>
        <DibsFoodNone
          text="장보기 목록이 비어있습니다."
          subText={`장바구니로 추가하는 메뉴의 재료 목록이 여기에 표시 됩니다.`}
        />
      </CenterSort> */}
    </CartWrapper>
  );
};

const FoodIngredientsGram = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #495057;
  margin-right: 30px;
`;

const FoodIngredients = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #7e3249;
`;

const FoodIngredientsSort = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FoodIngredientsPadding = styled.div`
  padding: 17px 25px 26px 25px;
`;

const FoodNameStyle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #fc9596;
`;

const FoodNameMinusStyle = styled.div`
  height: 45px;
  background: #ffefd1;
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartFoodCard = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 29px 8px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  margin-top: 13px;
`;

const CenterSort = styled.div`
  height: calc(100vh - 204px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CartListFontStyle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #477d9e;
`;

const CartWrapper = styled.div`
  background: #f1f3f5;
  height: 100vh;
  padding: 27px 30px 0 30px;
`;

export default Cart;
