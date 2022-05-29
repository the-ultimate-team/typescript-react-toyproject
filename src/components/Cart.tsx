import styled from "styled-components";
import DibsFoodNone from "./DibsFoodNone";
import DibsCartMinusBtnImg from "../assets/dibsCartMinusBtnImg.svg";
import { useRecoilState } from "recoil";
import { CartFoodState } from "../states";
import CheckBox from "./CheckBox";
import { Food } from "../states";

const Cart = () => {
  const [foodCartList, setFoodCartList] = useRecoilState<Food[]>(CartFoodState);

  const cartFoodIdDel = (foodId: number) => {
    setFoodCartList(foodCartList.filter((food) => food.id !== foodId));
  };

  const checkboxHandler = (foodId: number, ingredientName: string) => {
    setFoodCartList(
      foodCartList.map((food) =>
        food.id === foodId
          ? {
              ...food,
              ingredients: food.ingredients.map((ingredient) =>
                ingredient.name === ingredientName
                  ? { ...ingredient, checked: !ingredient.checked }
                  : ingredient
              ),
            }
          : food
      )
    );
  };
  return (
    <CartWrapper>
      <CartListFontStyle>장보기 목록</CartListFontStyle>

      {foodCartList.map((food) => (
        <CartFoodCard>
          <FoodNameMinusStyle>
            <FoodNameStyle>{food.foodName}</FoodNameStyle>
            <img
              onClick={() => cartFoodIdDel(food.id)}
              src={DibsCartMinusBtnImg}
              alt="장바구니 목록 삭제 버튼 이미지"
            />
          </FoodNameMinusStyle>
          <FoodIngredientsPadding>
            {food.ingredients.map((item, index) => (
              <FoodIngredientsSort key={`ingredients__${index}`}>
                <CheckBoxWrap>
                  <CheckBox
                    foodId={food.id}
                    name={item.name}
                    checked={item.checked}
                    onClick={checkboxHandler}
                  />
                  <FoodIngredients>{item.name}</FoodIngredients>
                </CheckBoxWrap>
                <div style={{ display: "flex" }}>
                  <FoodIngredientsGram>{item.gram}</FoodIngredientsGram>
                </div>
              </FoodIngredientsSort>
            ))}
          </FoodIngredientsPadding>
        </CartFoodCard>
      ))}
      {foodCartList.length === 0 ? (
        <CenterSort>
          <DibsFoodNone
            text="장보기 목록이 비어있습니다."
            subText={`장바구니로 추가하는 메뉴의 재료 목록이 여기에 표시 됩니다.`}
          />
        </CenterSort>
      ) : null}
    </CartWrapper>
  );
};

const FoodIngredientsGram = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #495057;
`;
const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
`;

const FoodIngredients = styled.div`
  margin-left: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #7e3249;
`;

const FoodIngredientsSort = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
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
  min-height: 100%;
  padding: 27px 30px 86px 30px;
`;

export default Cart;
