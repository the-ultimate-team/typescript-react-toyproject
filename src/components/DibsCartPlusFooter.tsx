import React from "react";
import styled from "styled-components";
import DibsCartPlusCloseBtnImg from "../assets/dibsCartPlusCloseBtnImg.svg";
import DibsCartMinusBtnImg from "../assets/dibsCartMinusBtnImg.svg";
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

const DibsCartPlusFooter = () => {
  const [foodCartList, setFoodCartList] = useRecoilState<Food[]>(CartFoodState);

  const cartFoodDel = (foodId: number) => {
    console.log(foodId);
    setFoodCartList(foodCartList.filter((food) => food.id !== foodId));
  };

  return (
    <CartFooterWrapper>
      <CartCloseBtnSort>
        <CartFontStyle>장바구니</CartFontStyle>
        <div>
          <img
            src={DibsCartPlusCloseBtnImg}
            alt="찜 목록 장바구니 닫기 버튼 이미지"
          />
        </div>
      </CartCloseBtnSort>
      <CartListSort>
        {foodCartList.map((food, index) => (
          <CartFoodCard key={`foodName__${index}`}>
            <CartFoodName>{food.foodName}</CartFoodName>
            <img
              onClick={() => cartFoodDel(food.id)}
              src={DibsCartMinusBtnImg}
              alt="찜 목록 장바구치 음식 해제 버튼 이미지"
            />
          </CartFoodCard>
        ))}
      </CartListSort>
    </CartFooterWrapper>
  );
};

const CartListSort = styled.div`
  display: flex;
`;

const CartFoodName = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #7e3249;
  margin-right: 15px;
`;

const CartFoodCard = styled.div`
  background: #ffefd1;
  border-radius: 5px;
  padding: 10px;
  /* width: 103px; */
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
`;

const CartFontStyle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #7e3249;
`;

const CartCloseBtnSort = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 31px;
`;

const CartFooterWrapper = styled.div`
  height: 206px;
  box-shadow: 4px 4px 20px 20px rgba(65, 15, 90, 0.02);
  border-radius: 30px 30px 0px 0px;
  background: #fff;
  padding: 23px 0 20px 21px;
`;
export default DibsCartPlusFooter;
