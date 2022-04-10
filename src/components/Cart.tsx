import React from "react";
import styled from "styled-components";
import DibsFoodNone from "./DibsFoodNone";
import DibsCartMinusBtnImg from "../assets/dibsCartMinusBtnImg.svg";

const Cart = () => {
  return (
    <CartWrapper>
      <CartListFontStyle>장보기 목록</CartListFontStyle>
      <CartFoodCard>
        <FoodNameMinusStyle>
          <FoodNameStyle>음식이름</FoodNameStyle>
          <img src={DibsCartMinusBtnImg} alt="장바구니 목록 삭제 버튼 이미지" />
        </FoodNameMinusStyle>
      </CartFoodCard>
      {/* <CenterSort>
        <DibsFoodNone
          text="장보기 목록이 비어있습니다."
          subText={`장바구니로 추가하는 메뉴의 재료 목록이 여기에 표시 됩니다.`}
        />
      </CenterSort> */}
    </CartWrapper>
  );
};

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
