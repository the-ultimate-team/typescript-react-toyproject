import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import FoodLevelImg from "../assets/foodLevelImg.svg";
import FoodTimeImg from "../assets/foodTimeImg.svg";

const Detail = () => {
  return (
    <div style={{ background: "#477d9e" }}>
      <FoodTitleBackgroundStyle>
        <FontAwesomeStyle>
          <FontAwesomeIcon icon={faArrowLeft} />
        </FontAwesomeStyle>
        <FoodTitleCategory>
          <FoodTitle>김치찌개</FoodTitle>
          <FoodCategory>한식</FoodCategory>
        </FoodTitleCategory>
        <Sort>
          <SubContent>순서대로 차근차근 만들어보세요.</SubContent>
          <HeartStyle>
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
            <FontTimeLevel>30~40min</FontTimeLevel>
          </FoodTimeLevel>
          <FoodTimeLevel stroke={true}>
            <div>
              <img src={FoodLevelImg} alt="음식 난이도 이미지" />
            </div>
            <FontTimeLevel>만들기 쉬움</FontTimeLevel>
          </FoodTimeLevel>
        </FoodTimeLevelPadding>
        <FoodIngredientsStyle>
          <UlStyle>
            <LiStyle>
              <FoodIngredientsName>재료</FoodIngredientsName>
              <FoodGram>그람</FoodGram>
            </LiStyle>
          </UlStyle>
        </FoodIngredientsStyle>

        <FoodRecipeIndexContent>
          <ul>
            <FoodRecipeIndexContentLi>
              <FoodRecipeIndexStyle>1</FoodRecipeIndexStyle>
              <FoodRecipeContentStyle>
                돼지고기는 1.5cm 정도로 먹기 좋게 자른다.
              </FoodRecipeContentStyle>
            </FoodRecipeIndexContentLi>
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
`;

const LiStyle = styled.li`
  text-align: center;
  padding-right: 45px;
  &:last-child {
    padding-right: 0;
  }
`;

const UlStyle = styled.ul`
  display: flex;
`;

const FoodIngredientsStyle = styled.div`
  background: #ffefd1;
  height: 104px;
  border-radius: 10px;
  margin-top: 31px;
  padding: 30px 0 30px 26px;
`;

const FontTimeLevel = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #6fa9cd;
`;

const FoodTimeLevel = styled.div<{ stroke: boolean }>`
  width: 160px;
  height: 54px;
  background: ${(props) => (props.stroke ? "#E4F1F8" : "#fff")};
  border: ${(props) => (props.stroke ? "none" : "1px solid #6FA9CD")};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 25px 15px 22px;
`;

const FoodTimeLevelPadding = styled.div`
  padding-right: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FoodRecipe = styled.div`
  padding: 30px 0 4px 31px;
  background: #fff;
  border-radius: 30px 30px 0 0;
`;

const HeartStyle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #ced4da;
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
`;

const FoodTitleBackgroundStyle = styled.div`
  height: 141px;
  padding: 12px 41px 34px 31px;
`;

export default Detail;
