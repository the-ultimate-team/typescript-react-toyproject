import React from "react";
import styled from "styled-components";
import DibsResultNoneImg from "../assets/dibsResultNoneImg.svg";

type EmptyText = {
  text: string;
  subText: string;
};

const DibsFoodNone = ({ text, subText }: EmptyText) => {
  return (
    <>
      <div>
        <img src={DibsResultNoneImg} alt="찜 목록 빈 아이콘" />
      </div>
      <DibsEmptyFontStyle>{text}</DibsEmptyFontStyle>
      <DibsSubFontStyle>{subText}</DibsSubFontStyle>
    </>
  );
};

const DibsSubFontStyle = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #868e96;
  margin-top: 7px;
  max-width: 232px;
  text-align: center;
`;

const DibsEmptyFontStyle = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #868e96;
  margin-top: 18px;
`;

export default DibsFoodNone;
