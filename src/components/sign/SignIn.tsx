import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Btn from "./Btn";
import IdForm from "./IdForm";
import PasswordFrom from "./PasswordFrom";
import { User } from "../../states";
import { useState } from "react";
import { useNavigate } from "react-router";

const SignIn = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(User);
  const [loginFailBorder, setLoginFailBorder] = useState<boolean>(true);

  // 로그인 인풋값 가져와서 상태관리에 저장되어 있는거랑 비교하기위한 저장용
  const [userId, setUserId] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  // 로그인 실패 시, 메세지 출력용
  const [loginFailMessage, setLoginFailMessage] = useState<string>("");
  const [isLoginFail, setIsLoginFail] = useState<boolean>(true);

  const getId = (value: string) => {
    setUserId(value);
  };
  const getPassword = (value: string) => {
    setUserPassword(value);
  };

  const signInHandler = () => {
    if (userInfo.id !== userId || userInfo.password !== userPassword) {
      setIsLoginFail(false);
      setLoginFailBorder(false);
      setLoginFailMessage("아이디 혹은 비밀번호가 일치하지 않습니다.");
      return;
    } else {
      setIsLoginFail(true);
      setLoginFailBorder(true);
      setUserInfo({ ...userInfo, isLogin: true });
      navigate("/");
    }
  };

  return (
    <Wrapper>
      <LoginFontStyle>로그인</LoginFontStyle>
      <div style={{ marginTop: "64px" }}>
        <IdForm isFailBorderProps={loginFailBorder} getId={getId} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <PasswordFrom
          isFailBorderProps={loginFailBorder}
          text="비밀번호"
          getPassword={getPassword}
        />
      </div>
      <div style={{ marginTop: "45px", position: "relative" }}>
        {isLoginFail ? null : (
          <LoginFailMessage>{loginFailMessage}</LoginFailMessage>
        )}
        <Btn text="로그인" onClick={signInHandler} />
      </div>
      <LinkStyle to="/signup">
        <SignUpLinkStyle>회원가입 하러가기</SignUpLinkStyle>
      </LinkStyle>
    </Wrapper>
  );
};

const LoginFailMessage = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #ce2759;
  position: absolute;
  top: -22px;
  left: 42px;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
`;

const SignUpLinkStyle = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-top: 22px;
  color: #477d9e;
`;

const LoginFontStyle = styled.div`
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
  position: relative;
`;

export default SignIn;
