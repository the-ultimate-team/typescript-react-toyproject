import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import FoodLevelImg from "../assets/foodLevelImg.svg";
import FoodTimeImg from "../assets/foodTimeImg.svg";
import { useNavigate, useParams } from "react-router";
import foodsData from "../foods.json";
import { useRecoilState } from "recoil";
import { DibsState } from "../states";
import DibsHeart from "../assets/dibsHeart.svg";

type Food = {
  id: number;
  foodName: string;
  category: string;
  dibs: boolean;
  level: string;
  time: string;
  img: string;
  recipe: string[];
  ingredients: { name: string; gram: string }[];
};

const Detail = () => {
  const { foodId } = useParams<{ foodId: string }>();
  const [detailFood, setDetailFood] = useState<Food>();
  const [dibsList, setDibsList] = useRecoilState<number[]>(DibsState);
  const [isDibsHeart, setIsDibsHeart] = useState<boolean>(false);

  let foodIdNumber: number = 0;

  const navigate = useNavigate();
  if (foodId !== undefined) {
    foodIdNumber = parseInt(foodId);
  }

  useEffect(() => {
    if (foodId !== undefined)
      // setDetailFood(foodsData.foods.filter((item) => item.id === +foodId)[0]);
      setDetailFood(foodsData.foods[+foodId - 1]);
    dibsFoodHeartMatch();
  }, [foodId]);

  const dibsFoodHeartMatch = () => {
    if (dibsList.includes(foodIdNumber)) {
      setIsDibsHeart(true);
    } else {
      setIsDibsHeart(false);
    }
  };

  return (
    <div
      style={{
        background: "#477d9e",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <FoodTitleBackgroundStyle>
        <FontAwesomeStyle onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </FontAwesomeStyle>
        <FoodTitleCategory>
          <FoodTitle>{detailFood?.foodName}</FoodTitle>
          <FoodCategory>{detailFood?.category}</FoodCategory>
        </FoodTitleCategory>
        <Sort>
          <SubContent>순서대로 차근차근 만들어보세요.</SubContent>
          <HeartStyle isHeart={isDibsHeart}>
            <FontAwesomeIcon icon={faHeart} />
          </HeartStyle>
        </Sort>
      </FoodTitleBackgroundStyle>
      <FoodRecipe>
        <FoodTimeLevelPadding>
          <FoodTimeLevel stroke={false} style={{ marginRight: "8px" }}>
            <div>
              <img src={FoodTimeImg} alt="음식 시간 이미지" />
            </div>
            <FontTimeLevel>{detailFood?.time}</FontTimeLevel>
          </FoodTimeLevel>
          <FoodTimeLevel stroke={true}>
            <div style={{ display: "flex" }}>
              <img src={FoodLevelImg} alt="음식 난이도 이미지" />
              <FontTimeLevel>{detailFood?.level}</FontTimeLevel>
            </div>
          </FoodTimeLevel>
        </FoodTimeLevelPadding>
        <FoodIngredientsStyle>
          <UlStyle>
            {detailFood?.ingredients.map((item, index) => (
              <LiStyle key={`ingredients__${index}`}>
                <FoodIngredientsName>{item.name}</FoodIngredientsName>
                <FoodGram>{item.gram}</FoodGram>
              </LiStyle>
            ))}
          </UlStyle>
        </FoodIngredientsStyle>

        <FoodRecipeIndexContent>
          <ul>
            {detailFood?.recipe.map((item, index) => (
              <FoodRecipeIndexContentLi key={`recipe__${index}`}>
                <FoodRecipeIndexStyle>{index + 1}</FoodRecipeIndexStyle>
                <FoodRecipeContentStyle>{item}</FoodRecipeContentStyle>
              </FoodRecipeIndexContentLi>
            ))}
          </ul>
        </FoodRecipeIndexContent>
      </FoodRecipe>
    </div>
  );
};

const FoodRecipeContentStyle = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #343a40;
  line-height: 140%;
`;

const FoodRecipeIndexStyle = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #6fa9cd;
  margin-right: 12px;
  line-height: 110%;
`;

const FoodRecipeIndexContentLi = styled.li`
  display: flex;
  margin-top: 7px;
`;

const FoodRecipeIndexContent = styled.div`
  margin-top: 31px;
  padding-right: 37px;
  overflow-y: scroll;
  position: absolute;
  top: 200px;
  bottom: 220px;
`;

const FoodGram = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #7e3249;
  margin-top: 10px;
`;

const FoodIngredientsName = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #7e3249;
  min-width: 50px;
`;

const LiStyle = styled.li`
  text-align: center;
  padding-right: 45px;
`;

const UlStyle = styled.ul`
  display: flex;
`;

const FoodIngredientsStyle = styled.div`
  background: #ffefd1;
  height: 104px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-top: 31px;
  padding: 30px 0 30px 26px;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const FontTimeLevel = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #6fa9cd;
  margin-left: 11px;
`;

const FoodTimeLevel = styled.div<{ stroke: boolean }>`
  width: 160px;
  height: 54px;
  background: ${(props) => (props.stroke ? "#E4F1F8" : "#fff")};
  border: ${(props) => (props.stroke ? "none" : "1px solid #6FA9CD")};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 25px 15px 22px;
`;

const FoodTimeLevelPadding = styled.div`
  padding-right: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FoodRecipe = styled.div`
  height: 100%;
  padding: 30px 0 4px 31px;
  background: #fff;
  border-radius: 30px 30px 0 0;
  position: relative;
`;

const HeartStyle = styled.div<{ isHeart: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: ${(props) => (props.isHeart ? "#FC9596" : "#ced4da")};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContent = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #f1f3f5;
`;

const Sort = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`;

const FoodCategory = styled.div`
  width: 50px;
  height: 21px;
  background: #fff;
  color: #495057;
  font-size: 14px;
  font-weight: 500;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FoodTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #fff;
  margin-right: 10px;
`;

const FoodTitleCategory = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

const FontAwesomeStyle = styled.div`
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const FoodTitleBackgroundStyle = styled.div`
  height: 141px;
  padding: 12px 41px 34px 31px;
`;

export default Detail;
