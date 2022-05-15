import { useState } from "react";
import styled from "styled-components";

interface PasswordType {
  getPassword: Function;
}

const PasswordConfirmForm = ({ getPassword }: PasswordType) => {
  //비밀번호 상태값 관리
  const [userPassword, setUserPassword] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState("");
  const [isPassword, setIsPassword] = useState(true);

  // 비밀번호 확인 상태값 관리
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [passwordConfirmMsg, setPasswordConfirmMsg] = useState("");
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(true);

  const onUserPassword = (e: React.FormEvent<HTMLInputElement>) => {
    const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const {
      currentTarget: { value },
    } = e;
    const passwordCurrent = value;
    setUserPassword(value);

    if (value !== "" && !passwordReg.test(passwordCurrent)) {
      setPasswordErrMsg("영문/숫자 포함하여 8자리 이상 입력해주세요.");
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const onUserPasswordConfirm = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setUserPasswordConfirm(value);

    if (value.length > 7 && value !== userPassword) {
      setPasswordConfirmMsg("비밀번호가 일치하지 않습니다 다시 입력해주세요.");
      setIsPasswordConfirm(false);
    } else if (value.length > 7 && value === userPassword) {
      setIsPasswordConfirm(true);
      // 비밀번호 확인까지 완료되면 값 보내기
      getPassword(value);
    }
  };

  return (
    <>
      <FontStyle>비밀번호</FontStyle>
      <InputStyle
        value={userPassword}
        onChange={onUserPassword}
        type="password"
        passwordState={isPassword}
        placeholder="영문/숫자 조합으로 8자 이상을 사용하세요."
      />
      {isPassword ? null : (
        <PasswordErrorMsg>{passwordErrMsg}</PasswordErrorMsg>
      )}
      <div style={{ marginTop: "14px" }}>
        <FontStyle>비밀번호 확인</FontStyle>
        <InputStyle
          value={userPasswordConfirm}
          onChange={onUserPasswordConfirm}
          type="password"
          passwordState={isPasswordConfirm}
          placeholder="영문/숫자 조합으로 8자 이상을 사용하세요."
        />
        {isPasswordConfirm ? null : (
          <PasswordErrorMsg>{passwordConfirmMsg}</PasswordErrorMsg>
        )}
      </div>
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

export default PasswordConfirmForm;
