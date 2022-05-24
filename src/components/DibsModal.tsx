import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onClose: Function;
}

const DibsModal = ({ onClose }: Props) => {
  const ModalCloseBtn = () => {
    onClose();
  };

  return (
    <Container>
      <ModalBackground onClick={ModalCloseBtn}></ModalBackground>
      <Wrapper>
        <DibsModalFontStyle>찜목록에 추가되었습니다!</DibsModalFontStyle>
        <DibsModalXmark onClick={ModalCloseBtn}>
          <FontAwesomeIcon icon={faXmark} />
        </DibsModalXmark>
      </Wrapper>
    </Container>
  );
};

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

const DibsModalXmark = styled.div`
  width: 12px;
  height: 12px;
  color: #477d9e;
  position: absolute;
  font-size: 22px;
  font-weight: bold;
  right: 24px;
  top: 21px;
  cursor: pointer;
`;

const DibsModalFontStyle = styled.p`
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

export default DibsModal;
