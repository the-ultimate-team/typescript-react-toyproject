import React from "react";
import styled from "styled-components";

type Props = {
  children: string;
};

const Btn = ({ children }: Props) => {
  return <BtnStyle>{children}</BtnStyle>;
};

const BtnStyle = styled.button`
  width: 328px;
  height: 50px;
  background: #adb5bd;
  border-radius: 10px;
  border: none;
`;

export default Btn;
