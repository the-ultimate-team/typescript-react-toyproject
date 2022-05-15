import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  onClick: Function;
  disabled?: boolean;
}

const Btn = ({ text, onClick, disabled }: Props) => {
  return (
    <BtnStyle onClick={() => onClick()} disabled={disabled}>
      {text}
    </BtnStyle>
  );
};

const BtnStyle = styled.button`
  width: 328px;
  height: 50px;
  background: #477d9e;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #ffffff;
  cursor: pointer;
  :disabled {
    background: #adb5bd;
  }
`;

export default Btn;
