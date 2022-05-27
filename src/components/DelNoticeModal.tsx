import styled from "styled-components";
import DelModalBtn from "./DelModalBtn";

interface Props {
  onClose: Function;
  foodIdDelUp: Function;
  text: string;
}

const DelNoticeModal = ({ onClose, foodIdDelUp, text }: Props) => {
  const ModalCloseBtn = () => {
    onClose();
  };

  const foodDelUp = () => {
    foodIdDelUp();
  };

  return (
    <Container>
      <ModalBackground></ModalBackground>
      <Wrapper>
        <DelConfirmMsgFontStyle>
          {text}에서 삭제하시겠습니까?
        </DelConfirmMsgFontStyle>
        <ModalBtnSort>
          <div style={{ marginRight: "8px" }}>
            <DelModalBtn onClick={foodDelUp} text="삭제하기" stroke={true} />
          </div>
          <div>
            <DelModalBtn onClick={ModalCloseBtn} text="아니요" stroke={false} />
          </div>
        </ModalBtnSort>
      </Wrapper>
    </Container>
  );
};

const ModalBtnSort = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DelConfirmMsgFontStyle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #477d9e;
`;

const Wrapper = styled.div`
  width: 328px;
  height: 120px;
  background: #fff;
  padding: 10px 52px;
  box-shadow: 0px 4px 29px 8px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  z-index: 2;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
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

export default DelNoticeModal;
