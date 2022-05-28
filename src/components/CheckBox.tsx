import styled, { css, keyframes } from "styled-components";

interface Props {
  id: string;
  checked: boolean;
}
const CheckBox = ({ id, checked }: Props) => {
  return (
    <CheckboxWrapper>
      <CheckBoxLabel>
        <CheckBoxInput id={id} type="checkbox" checked={checked} />
        <CheckBoxIcon checked={checked}>
          <svg width="15px" height="12px" viewBox="0 0 14 12">
            <polyline points="0.5 6 4.5 9 11.5 1"></polyline>
          </svg>
        </CheckBoxIcon>
        {/* <CheckBoxText checked={isChecked}>{children}</CheckBoxText> */}
      </CheckBoxLabel>
    </CheckboxWrapper>
  );
};
const wave = keyframes`
  50% {
    transform: scale(0.9);
  }
`;

const CheckBoxSpan = styled.span`
  display: inline-block;
  transform: translate3d(0, 0, 0);
`;

const CheckBoxIcon = styled(CheckBoxSpan)<{ checked: boolean }>`
  position: relative;
  width: 17px;
  height: 17px;
  margin: 2px 0 0 0;
  border: 1px solid var(--secondary);
  border-radius: 2px;
  vertical-align: middle;
  transition: all 0.2s ease;
  & > svg {
    position: absolute;
    top: 2px;
    left: 1px;
    fill: none;
    stroke: #ffffff;
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #7e3249;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }
  ${(props) =>
    props.checked === true &&
    css`
      background: #7e3249;
      border: 1px solid #7e3249;
      animation: ${wave} 0.4s ease;
      & > svg {
        stroke-dashoffset: 0;
      }
      &:before {
        transform: scale(2);
        opacity: 0;
        transition: all 0.6s ease;
      }
    `}
`;

const CheckBoxLabel = styled.label`
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  font-weight: 400;
  line-height: 19px;
  position: relative;
  display: flex;
`;

const CheckBoxText = styled(CheckBoxSpan)`
  display: inline-block;
  margin: 1px 0 0 13px;
`;

const CheckBoxInput = styled.input`
  display: none;
`;

const CheckboxWrapper = styled.div`
  & + & {
    margin: 12px 0 0 0;
  }
`;
export default CheckBox;
