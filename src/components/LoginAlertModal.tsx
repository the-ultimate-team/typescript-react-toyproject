import styled from "styled-components";

interface Props {
  message: string;
  loginAlertModalCloseUp: Function;
}

const LoginAlertModal = ({ message, loginAlertModalCloseUp }: Props) => {
  const ModalCloseStateUp = () => {
    loginAlertModalCloseUp();
  };

  return (
    <Container>
      <ModalBackground onClick={ModalCloseStateUp}></ModalBackground>
      <Wrapper>
        <LoginAlertMessage>{message}</LoginAlertMessage>
      </Wrapper>
    </Container>
  );
};

const LoginAlertMessage = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.333333px;
  color: #6fa9cd;
`;

const Wrapper = styled.div`
  width: 328px;
  height: 100px;
  background: #fff;
  box-shadow: 0px 4px 29px 8px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 21px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
`;

export default LoginAlertModal;
