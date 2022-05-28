import styled, { css, keyframes } from "styled-components";

interface Props {
  foodId: number;
  name: string;
  checked: boolean;
  onClick: Function;
}

const CheckBox = ({ foodId, name, checked, onClick }: Props) => {
  return (
    <CheckboxWrapper>
      <CheckBoxLabel>
        <CheckBoxInput
          type="checkbox"
          foodId={foodId} // input 타입이 기본적으로 가지고 있지 않은 props라서 에러남
          name={name}
          checked={checked}
          onClick={() => onClick(foodId, name)}
        />
        <CheckBoxIcon checked={checked}>
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <polyline points="4 11 8 15 16 6"></polyline>
          </svg>
        </CheckBoxIcon>
      </CheckBoxLabel>
    </CheckboxWrapper>
  );
};

const wave = keyframes`
  50% {
    transform: translate3d(0, 0, 0);
  }
`;

const CheckBoxIcon = styled.span<{ checked: boolean }>`
  position: relative;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  transform: scale(1);
  vertical-align: middle;
  transition: all 0.2s ease;
  border: 2px solid #7e3249;
  svg {
    position: absolute;
    top: -1px;
    left: -1px;
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 20px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  :before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
    transition-delay: 0.2s;
  }
  ${(props) =>
    props.checked === true &&
    css`
      border: 2px solid #7e3249;
      background: #7e3249;
      animation: ${wave} 0.4s ease;
      svg {
        stroke-dashoffset: 0;
      }
      :before {
        transform: scale(2.2);
        opacity: 0;
        transition: all 0.6s ease;
      }
    `};
`;

const CheckBoxLabel = styled.label`
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }
`;
// error : No overload matches this call.
// 원인 : TS + styled-components 문제. 스타일드 컴포넌트에 임의로 만든 props를 전달하려고 해서 발생
// 해결 : 컴포넌트를 선언하는 부분에서 styled.태그이름 뒤에 <인터페이스 이름>을 추가해서 생성한 인터페이스로 타입을 지정
const CheckBoxInput = styled.input<Props>`
  display: none;
`;

const CheckboxWrapper = styled.div`
  & + & {
    margin: 12px 0 0 0;
  }
`;
export default CheckBox;
