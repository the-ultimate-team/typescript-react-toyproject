import styled from "styled-components";
import CartPlusImg from "../assets/cartPlusImg.svg";

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

interface Props {
  categoryFoodInfoProps: Food[];
}

const DibsFoodCard = ({ categoryFoodInfoProps }: Props) => {
  console.log(categoryFoodInfoProps);
  return (
    <>
      {categoryFoodInfoProps?.map((food) => (
        <DibsFoodCardStyle>
          <FoodName>{food.foodName}</FoodName>
          <FlexAlignItem>
            <CartDelSort>
              <CartFontStyle>장보기</CartFontStyle>
              <img src={CartPlusImg} alt="장보기 버튼 이미지" />
            </CartDelSort>
            <DibsFoodDel>삭제</DibsFoodDel>
          </FlexAlignItem>
        </DibsFoodCardStyle>
      ))}
    </>
  );
};

const FlexAlignItem = styled.div`
  display: flex;
  align-items: center;
`;

const CartDelSort = styled.div`
  display: flex;
  margin-right: 20px;
  cursor: pointer;
`;

const DibsFoodDel = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #495057;
  line-height: 19px;
  cursor: pointer;
`;

const CartFontStyle = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #7e3249;
  margin-right: 6px;
  line-height: 19px;
`;

const FoodName = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #495057;
  line-height: 24px;
`;

const DibsFoodCardStyle = styled.div`
  width: 100%;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 4px 29px 8px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  margin-top: 11px;
  padding: 23px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default DibsFoodCard;
