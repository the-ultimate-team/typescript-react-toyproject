import { useEffect, useState } from "react";
import styled from "styled-components";

type IdValue = {
  getId: Function;
  isFailBorderProps: boolean;
};

const IdForm = ({ getId, isFailBorderProps }: IdValue) => {
  const [userId, setUserId] = useState<string>("");
  const [emailErrMsg, setEmailErrMsg] = useState<string>("");
  const [isEmail, setIsEmail] = useState<boolean>(true);
  const [isEmailMsg, setIsEmailMsg] = useState<boolean>(true);

  useEffect(() => {
    setIsEmail(isFailBorderProps);
  }, [isFailBorderProps]);

  const onUserId = (e: React.FormEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const {
      currentTarget: { value },
    } = e;
    const emailCurrent = value;
    setUserId(value);

    if (value !== "" && !emailRegex.test(emailCurrent)) {
      setEmailErrMsg("이메일 형식이 틀렸습니다. 다시 입력해주세요.");
      setIsEmailMsg(false);
    } else if (emailRegex.test(emailCurrent)) {
      setIsEmailMsg(true);
      getId(value);
    }
  };

  return (
    <>
      <FontStyle>아이디</FontStyle>
      <InputStyle
        onChange={onUserId}
        value={userId}
        type="text"
        placeholder="이메일을 입력해주세요."
        emailState={isEmail}
      />
      {isEmailMsg ? null : <EmailErrorMsg>{emailErrMsg}</EmailErrorMsg>}
    </>
  );
};

const EmailErrorMsg = styled.div`
  color: #ce2759;
  font-size: 15px;
  margin-top: 7px;
`;

const InputStyle = styled.input<{ emailState: boolean }>`
  width: 328px;
  height: 50px;
  background: #fff;
  border: ${(props) =>
    props.emailState ? "1px solid #6fa9cd" : "1px solid #ce2759"};
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

export default IdForm;
