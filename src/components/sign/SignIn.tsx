import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Btn from "./Btn";
import IdForm from "./IdForm";
import PasswordFrom from "./PasswordFrom";

const SignIn = () => {
  return (
    <Wrapper>
      <LoginFontStyle>로그인</LoginFontStyle>
      <div style={{ marginTop: "64px" }}>
        <IdForm />
      </div>
      <div style={{ marginTop: "20px" }}>
        <PasswordFrom text="비밀번호" />
      </div>
      <div style={{ marginTop: "45px" }}>
        <Btn text="로그인" btnColor={false} />
      </div>
      <LinkStyle to="/signup">
        <SignUpLinkStyle>회원가입 하러가기</SignUpLinkStyle>
      </LinkStyle>
    </Wrapper>
  );
};

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
