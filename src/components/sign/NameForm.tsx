import styled from "styled-components";

const NameForm = () => {
  return (
    <>
      <FontStyle>이름</FontStyle>
      <InputStyle type="text" placeholder="이메일을 입력해주세요." />
    </>
  );
};

const InputStyle = styled.input`
  width: 328px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #6fa9cd;
  border-radius: 10px;
  padding: 0 20px;
  margin-top: 7px;
`;

const FontStyle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #6fa9cd;
`;

export default NameForm;
