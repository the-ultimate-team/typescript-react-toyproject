import { useState } from "react";
import styled from "styled-components";

interface PasswordType {
  text: string;
  getPassword: Function;
}

const PasswordFrom = ({ text, getPassword }: PasswordType) => {
  const [userPasswrod, setUserPasswrod] = useState("");

  const onUserPassword = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setUserPasswrod(value);
  };

  const onBlur = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    getPassword(value);
  };

  return (
    <>
      <FontStyle>{text}</FontStyle>
      <InputStyle
        value={userPasswrod}
        onChange={onUserPassword}
        onBlur={onBlur}
        type="password"
        placeholder="영문/숫자 조합으로 8자 이상을 사용하세요."
      />
    </>
  );
};

const InputStyle = styled.input`
  width: 328px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #6fa9cd;
  border-radius: 10px;
  padding: 0 20px;
  margin-top: 7px;
`;

const FontStyle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #6fa9cd;
`;

export default PasswordFrom;
