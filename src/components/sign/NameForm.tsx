import { useState } from "react";
import styled from "styled-components";

type NameValue = {
  getUserName: Function;
};

const NameForm = ({ getUserName }: NameValue) => {
  const [userName, setUserName] = useState("");
  const [useNameErrMsg, setUserNameErrMsg] = useState("");
  const [isUserName, setIsUserName] = useState(true);

  const onUserName = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setUserName(value);

    if (value !== "" && value.length < 3) {
      setUserNameErrMsg("이름은 3글자 이상으로 입력해주세요.");
      setIsUserName(false);
    } else if (value.length > 2) {
      setIsUserName(true);
      getUserName(value);
    }
  };

  return (
    <>
      <FontStyle>이름</FontStyle>
      <InputStyle
        value={userName}
        onChange={onUserName}
        type="text"
        userNameState={isUserName}
        placeholder="이름을 입력해주세요."
      />
      {isUserName ? null : (
        <UserNameErrMsgStyle>{useNameErrMsg}</UserNameErrMsgStyle>
      )}
    </>
  );
};

const UserNameErrMsgStyle = styled.div`
  color: #ce2759;
  font-size: 15px;
  margin-top: 7px;
`;

const InputStyle = styled.input<{ userNameState: boolean }>`
  width: 328px;
  height: 50px;
  background: #ffffff;
  border: ${(props) =>
    props.userNameState ? "1px solid #6fa9cd" : "1px solid #ce2759"};
  border-radius: 10px;
  padding: 0 20px;
  margin-top: 7px;
  :focus {
    outline: none;
  }
`;

const FontStyle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #6fa9cd;
`;

export default NameForm;
