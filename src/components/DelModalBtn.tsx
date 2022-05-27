import styled from "styled-components";

interface Props {
  text: string;
  stroke: boolean;
  onClick: Function;
}

const DelModalBtn = ({ text, stroke, onClick }: Props) => {
  return (
    <DelModalButton onClick={() => onClick()} stroke={stroke}>
      {text}
    </DelModalButton>
  );
};

const DelModalButton = styled.button<{ stroke: boolean }>`
  width: 100px;
  height: 35px;
  background: ${(props) => (props.stroke ? "#477d9e" : "#fff")};
  color: ${(props) => (props.stroke ? "#fff" : "#477d9e")};
  border: ${(props) => (props.stroke ? "none" : "1px solid #477d9e")};
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

export default DelModalBtn;
