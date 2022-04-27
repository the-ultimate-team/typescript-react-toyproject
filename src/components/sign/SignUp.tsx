import { Link } from "react-router-dom";
import styled from "styled-components";
import Btn from "./Btn";
import IdForm from "./IdForm";
import NameForm from "./NameForm";
import PasswordFrom from "./PasswordFrom";

const SignUp = () => {
  return (
    <Wrapper>
      <SignUpStyle>회원가입</SignUpStyle>
      <div style={{ marginTop: "34px" }}>
        <NameForm />
      </div>
      <div style={{ marginTop: "14px" }}>
        <IdForm />
      </div>
      <div style={{ marginTop: "14px" }}>
        <PasswordFrom text="비밀번호" />
      </div>
      <div style={{ marginTop: "14px" }}>
        <PasswordFrom text="비밀번호 확인" />
      </div>
      <div style={{ marginTop: "40px" }}>
        <Btn text="회원가입" btnColor={true} />
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
