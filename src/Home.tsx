import React from "react";
import styled from "styled-components";
import MainHomeImage from "./assets/mainHomeImage.svg";

const Home = () => {
  return (
    <MainTagStyle>
      <MainTitleFontStyle>오늘 뭐 먹지?</MainTitleFontStyle>
      <MainSubTitleFontStyle>내가 즐겨 먹는 요리 추천</MainSubTitleFontStyle>
      <div>
        <img src={MainHomeImage} alt="메인 홈 이미지" />
      </div>
      <MainMaualFontStyle>
        시작하기를 누르면 오늘의 추천 요리가 뜹니다.
      </MainMaualFontStyle>
      <div style={{ margin: "24px 0 96px 0" }}>
        <MainStartButtonStyle>시작하기</MainStartButtonStyle>
      </div>
    </MainTagStyle>
  );
};

const MainStartButtonStyle = styled.button`
  background: #477d9e;
  width: 150px;
  height: 45px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  border-radius: 10px;
`;

const MainMaualFontStyle = styled.div`
  font-size: 14px;
  color: #343a40;
  margin-top: 60px;
`;

const MainSubTitleFontStyle = styled.div`
  font-size: 14px;
  color: #adb5bd;
  margin-top: 5px;
`;

const MainTitleFontStyle = styled.div`
  font-size: 24px;
  color: #212529;
  font-weight: bold;
  margin-top: 122px;
`;

const MainTagStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
