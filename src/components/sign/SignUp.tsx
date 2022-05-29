import { Link } from "react-router-dom";
import styled from "styled-components";
import Btn from "./Btn";
import IdForm from "./IdForm";
import NameForm from "./NameForm";
import { useRecoilState } from "recoil";
import { User } from "../../states";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PasswordConfirmForm from "./PasswordConfirmForm";

const SignUp = () => {
  const [userInfo, setUserInfo] = useRecoilState(User);
  const [signUpUserInfo, setSignUpUserInfo] = useState({
    name: "",
    id: "",
    password: "",
    isLogin: false,
  });
  // button 활성화 상태값
  const [isCheckSignUp, setIsCheckSignUp] = useState(true);

  const isEmptyValue = useCallback((signUpUserInfo) => {
    let result: boolean = false;
    for (let prop in signUpUserInfo) {
      if (signUpUserInfo[prop] === "") return false;
      else result = true;
    }
    return result;
  }, []);

  // 유효성 체크가 다 완료되면 버튼 활성화
  useEffect(() => {
    if (isEmptyValue(signUpUserInfo)) setIsCheckSignUp(false);
  }, [signUpUserInfo, isEmptyValue]);

  const navigate = useNavigate();

  // Form에 있는 값 끌어올리기
  const getUserName = (value: string) => {
    setSignUpUserInfo({ ...signUpUserInfo, name: value });
  };
  const getId = (value: string) => {
    setSignUpUserInfo({ ...signUpUserInfo, id: value });
  };
  const getPassword = (value: string) => {
    setSignUpUserInfo({ ...signUpUserInfo, password: value });
  };

  // recoil에 저장 후 이동
  const signUpRecoilHandler = () => {
    setUserInfo(signUpUserInfo);
    navigate("/login");
  };

  return (
    <Wrapper>
      <SignUpStyle>회원가입</SignUpStyle>
      <div style={{ marginTop: "34px" }}>
        <NameForm getUserName={getUserName} />
      </div>
      <div style={{ marginTop: "14px" }}>
        <IdForm isFailBorderProps={true} getId={getId} />
      </div>
      <div style={{ marginTop: "14px" }}>
        <PasswordConfirmForm getPassword={getPassword} />
      </div>
      <div style={{ marginTop: "40px" }}>
        <Btn
          text="회원가입"
          onClick={signUpRecoilHandler}
          disabled={isCheckSignUp}
        />
      </div>
      <LinkStyle to="/login">
        <LoginLinkStyle>로그인 하러가기</LoginLinkStyle>
      </LinkStyle>
    </Wrapper>
  );
};

const LinkStyle = styled(Link)`
  text-decoration: none;
`;

const LoginLinkStyle = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-top: "22px";
  color: #477d9e;
`;

const SignUpStyle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #495057;
`;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 76px);
  background: #f1f3f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SignUp;
