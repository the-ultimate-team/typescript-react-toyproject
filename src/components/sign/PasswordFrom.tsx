import { useState } from "react";
import styled from "styled-components";

interface PasswordType {
  text: string;
  getPassword: Function;
}

const PasswordFrom = ({ text, getPassword }: PasswordType) => {
  const [userPasswrod, setUserPasswrod] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState("");
  const [isPassword, setIsPassword] = useState(true);

  const onUserPassword = (e: React.FormEvent<HTMLInputElement>) => {
    const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const {
      currentTarget: { value },
    } = e;
    const passwordCurrent = value;
    setUserPasswrod(value);

    if (value !== "" && !passwordReg.test(passwordCurrent)) {
      setPasswordErrMsg("영문/숫자 포함하여 8자리 이상 입력해주세요.");
      setIsPassword(false);
    } else {
      setIsPassword(true);
      getPassword(value);
    }
  };

  return (
    <>
      <FontStyle>{text}</FontStyle>
      <InputStyle
        value={userPasswrod}
        onChange={onUserPassword}
        type="password"
        passwordState={isPassword}
        placeholder="영문/숫자 조합으로 8자 이상을 사용하세요."
      />
      {isPassword ? null : (
        <PasswordErrorMsg>{passwordErrMsg}</PasswordErrorMsg>
      )}
    </>
  );
};

const PasswordErrorMsg = styled.div`
  color: #ce2759;
  font-size: 15px;
  margin-top: 7px;
`;

const InputStyle = styled.input<{ passwordState: boolean }>`
  width: 328px;
  height: 50px;
  background: #fff;
  border: ${(props) =>
    props.passwordState ? "1px solid #6fa9cd" : "1px solid #ce2759"};
  border-radius: 10px;
  padding: 0 20px;
  margin-top: 7px;
  :focus {
    outline: none;
  }
`;

const FontStyle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #6fa9cd;
`;

export default PasswordFrom;
