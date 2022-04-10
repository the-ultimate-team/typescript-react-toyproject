import React from "react";
import styled from "styled-components";
import RecommendResultImg from "../assets/reommendResultImg.svg";
import FoodDibsImg from "../assets/foodDibsImg.svg";
import FoodRecipeImg from "../assets/foodRecipeImg.svg";
import FoodRefreshImg from "../assets/foodRefreshImg.svg";

const RecommendPage = () => {
  return (
    <RecommendTagStyle>
      <RecommendTitleFontStyle>추천 음식 이름</RecommendTitleFontStyle>
      <RecommnedSubTitleFontStyle>
        이걸 해먹어 보는건 어때요?
      </RecommnedSubTitleFontStyle>
      <RecommendResultImgStyle>
        <img src={RecommendResultImg} alt="추천 결과 음식 이미지" />
      </RecommendResultImgStyle>
      <ThreeBtnSort>
        <BtnFontStyle>
          <BtnClickStyle stroke={true}>
            <img src={FoodDibsImg} alt="찜하기 이미지" />
          </BtnClickStyle>
          <IconExplanationStyle>찜하기</IconExplanationStyle>
        </BtnFontStyle>

        <BtnFontStyle>
          <BtnClickStyle stroke={false}>
            <img src={FoodRefreshImg} alt="찜하기 이미지" />
          </BtnClickStyle>
          <IconExplanationStyle>재추천</IconExplanationStyle>
        </BtnFontStyle>

        <BtnFontStyle>
          <BtnClickStyle stroke={true}>
            <img src={FoodRecipeImg} alt="찜하기 이미지" />
          </BtnClickStyle>
          <IconExplanationStyle>레시피</IconExplanationStyle>
        </BtnFontStyle>
      </ThreeBtnSort>
    </RecommendTagStyle>
  );
};

const IconExplanationStyle = styled.p`
  font-size: 12px;
  text-align: center;
  color: #343a40;
`;

const BtnClickStyle = styled.div<{ stroke: boolean }>`
  width: 60px;
  height: 60px;
  background: ${(props) => (props.stroke ? "#9dc9dd" : "#fff")};
  border: ${(props) => (props.stroke ? "none" : "1px solid #9dc9dd")};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
`;

const BtnFontStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThreeBtnSort = styled.div`
  width: 266px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 47px 0 94px 0;
  padding: 0 62px;
`;

const RecommendResultImgStyle = styled.div`
  /* height: 292px; */
  margin-top: 34px;
`;

const RecommnedSubTitleFontStyle = styled.div`
  font-size: 14px;
  color: #adb5bd;
  margin-top: 5px;
`;

const RecommendTitleFontStyle = styled.div`
  font-size: 24px;
  color: #212529;
  font-weight: bold;
  margin-top: 125px;
`;

const RecommendTagStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default RecommendPage;
