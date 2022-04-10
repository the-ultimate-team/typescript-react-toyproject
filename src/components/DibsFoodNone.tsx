import React from "react";
import styled from "styled-components";
import DibsResultNoneImg from "../assets/dibsResultNoneImg.svg";

const DibsFoodNone = () => {
  return (
    <>
      <div>
        <img src={DibsResultNoneImg} alt="찜 목록 빈 아이콘" />
      </div>
      <DibsEmptyFontStyle>찜목록이 비어있습니다.</DibsEmptyFontStyle>
      <DibsSubFontStyle>
        찜하기로 추가하는 메뉴가 여기에 표시 됩니다.
      </DibsSubFontStyle>
    </>
  );
};

const DibsSubFontStyle = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #868e96;
  margin-top: 7px;
`;

const DibsEmptyFontStyle = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #868e96;
  margin-top: 18px;
`;

export default DibsFoodNone;
