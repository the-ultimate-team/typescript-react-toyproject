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
      isLoginFailToggle();
      setLoginFailMessage("아이디 혹은 비밀번호가 일치하지 않습니다.");
      return;
    } else {
      isLoginFailToggle();
      navigate("/");
    }
  };

  // 로그인 성공여부 토글용
  const isLoginFailToggle = () => {
    setIsLoginFail((prev) => !prev);
  };

  return (
    <Wrapper>
      <LoginFontStyle>로그인</LoginFontStyle>
      <div style={{ marginTop: "64px" }}>
        <IdForm getId={getId} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <PasswordFrom text="비밀번호" getPassword={getPassword} />
      </div>
      {isLoginFail ? null : (
        <LoginFailMessage>{loginFailMessage}</LoginFailMessage>
      )}
      <div style={{ marginTop: "45px" }}>
        <Btn text="로그인" onClick={signInHandler} />
      </div>
      <LinkStyle to="/signup">
        <SignUpLinkStyle>회원가입 하러가기</SignUpLinkStyle>
      </LinkStyle>
    </Wrapper>
  );
};

const LoginFailMessage = styled.span`
  color: red;
  font-size: 15px;
  margin-top: 20px;
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
`;

export default SignIn;
