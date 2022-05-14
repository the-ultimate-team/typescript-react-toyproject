import { useState } from "react";
import styled from "styled-components";

type NameValue = {
  getUserName: Function;
};

const NameForm = ({ getUserName }: NameValue) => {
  const [userName, setUserName] = useState("");

  const onUserName = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setUserName(value);
  };

  const onBlur = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    getUserName(value);
  };

  return (
    <>
      <FontStyle>이름</FontStyle>
      <InputStyle
        value={userName}
        onChange={onUserName}
        onBlur={onBlur}
        type="text"
        placeholder="이름을 입력해주세요."
      />
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
