import { useRecoilState } from "recoil";
import styled from "styled-components";
import DibsCartPlusFooter from "./DibsCartPlusFooter";
import DibsFoodCard from "./DibsFoodCard";
import { DibsState, CartFoodState } from "../states";
import DibsFoodNone from "./DibsFoodNone";
import { useEffect, useState } from "react";
import foodsData from "../foods.json";
import DelNoticeModal from "./DelNoticeModal";
import { Food } from "../states";

const FOOD_CATEGORY = ["전체", "한식", "일식", "중식", "양식"];

const Dibs = () => {
  const [dibsList, setDibsList] = useRecoilState<number[]>(DibsState);
  const [foodCartList, setFoodCartList] = useRecoilState<Food[]>(CartFoodState);
  const [categorySelectTab, setCategorySelectTab] = useState<string>("전체");
  const [isDibsFoodDelModal, setIsDibsFoodDelModal] = useState<boolean>(false);

  // 삭제 시, 아이디 저장용
  const [foodDeleteIdSave, setFoodDeleteIdSave] = useState<number>(0);

  // 찜록록으로 가져온 데이터 전체 유지
  const [dibsFoodList, setDibsFoodList] = useState<Food[]>([]);

  // 찜목록 음식 카테고리 분류
  const [categoryFood, setCategoryFood] = useState<Food[]>([]);

  // 찜록록(dibsList)에 있는 정보로 데이터 가져오기
  useEffect(() => {
    setDibsFoodList(
      foodsData.foods.filter((food) => dibsList.includes(food.id))
    );
  }, [dibsList]);

  // 처음 찜록록 들어갔을 시에 나오는 목록
  useEffect(() => {
    setCategoryFood(dibsFoodList);
  }, [dibsFoodList]);

  const categorySelectHandler = (category: string) => {
    setCategorySelectTab(category);
    if (category === "전체") setCategoryFood(dibsFoodList);
    else
      setCategoryFood(
        dibsFoodList.filter((food) => food.category === category)
      );
  };

  // 찜록록 삭제 아이디 저장
  const foodIdDelIdSave = (foodId: number) => {
    setFoodDeleteIdSave(foodId);
    // setDibsList(dibsList.filter((id) => id !== foodId));
  };

  // 찜록록 음식 삭제 시, 모달창 띄우기
  const DibsDelModal = () => {
    setIsDibsFoodDelModal((prev) => !prev);
  };

  // 모달창 닫기 호출
  const DelCloseModal = () => {
    DibsDelModal();
  };

  // 찜록록 음식 리스트 삭제
  const foodIdDel = () => {
    setDibsList(dibsList.filter((id) => id !== foodDeleteIdSave));
    DibsDelModal();
  };

  // 장바구니 추가 함수
  const foodCartAdd = (foodObj: Food) => {
    if (!foodCartList.includes(foodObj)) {
      setFoodCartList((foodCartList) => [...foodCartList, foodObj]);
    }
  };

  return (
    <>
      {isDibsFoodDelModal ? (
        <DelNoticeModal
          text="찜록록"
          foodIdDelUp={foodIdDel}
          onClose={DelCloseModal}
        />
      ) : null}
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

          {/* 찜목록 카테고리에 없을 시 출력 */}
          {categoryFood.length === 0 ? (
            <DibsFontSort>
              <DibsFoodNone
                text="찜목록이 비어있습니다."
                subText="찜하기로 추가하는 메뉴가 여기에 표시 됩니다."
              />
            </DibsFontSort>
          ) : (
            <DibsFoodCard
              categoryFoodInfoProps={categoryFood}
              foodIdUp={foodIdDelIdSave}
              foodCartIdUp={foodCartAdd}
              DibsDelModalUp={DibsDelModal}
            />
          )}
        </Wrapper>
        <CartFooterList>
          {foodCartList.length !== 0 ? <DibsCartPlusFooter /> : null}
        </CartFooterList>
      </div>
    </>
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
