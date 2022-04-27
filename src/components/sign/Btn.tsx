import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  btnColor: boolean;
}

const Btn = ({ text, btnColor }: Props) => {
  return <BtnStyle btnBackgroundColor={btnColor}>{text}</BtnStyle>;
};

const BtnStyle = styled.button<{ btnBackgroundColor: boolean }>`
  width: 328px;
  height: 50px;
  background: ${(props) => (props.btnBackgroundColor ? "#477D9E" : "#adb5bd")};
  border-radius: 10px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #ffffff;
  cursor: pointer;
`;

export default Btn;
