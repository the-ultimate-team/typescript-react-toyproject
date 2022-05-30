import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faStar,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { User } from "../states";
import { useState } from "react";
import LoginAlertModal from "./LoginAlertModal";

const NavigaionBar = () => {
  const [userInfo, setUserInfo] = useRecoilState(User);
  const [isLoginAlertModal, setIsLoginAlertModal] = useState<boolean>(false);
  const [isLoginAlertMessage, setIsLoginAlertMessage] = useState<string>("");

  const notLink = () => {
    setIsLoginAlertMessage("로그인 후, 이용하실 수 있습니다.");
    setIsLoginAlertModal(true);
  };

  const loginAlertModalClose = () => {
    setIsLoginAlertModal(false);
  };

  return (
    <>
      {isLoginAlertModal ? (
        <LoginAlertModal
          loginAlertModalCloseUp={loginAlertModalClose}
          message={isLoginAlertMessage}
        />
      ) : null}
      <NavigationBarStyle>
        <Link to="/">
          <FontAwesomeSize>
            <FontAwesomeIcon icon={faHouse} />
          </FontAwesomeSize>
        </Link>

        {userInfo.isLogin ? (
          <Link to="/dibs">
            <FontAwesomeSize>
              <FontAwesomeIcon icon={faStar} />
            </FontAwesomeSize>
          </Link>
        ) : (
          <FontAwesomeSize onClick={notLink}>
            <FontAwesomeIcon icon={faStar} />
          </FontAwesomeSize>
        )}

        {userInfo.isLogin ? (
          <Link to="/cart">
            <FontAwesomeSize>
              <FontAwesomeIcon icon={faCartShopping} />
            </FontAwesomeSize>
          </Link>
        ) : (
          <FontAwesomeSize onClick={notLink}>
            <FontAwesomeIcon icon={faCartShopping} />
          </FontAwesomeSize>
        )}

        <Link to="/login">
          <FontAwesomeSize>
            <FontAwesomeIcon icon={faBars} />
          </FontAwesomeSize>
        </Link>
      </NavigationBarStyle>
    </>
  );
};

const FontAwesomeSize = styled.div`
  font-size: 22px;
  color: #9dc9dd;
`;

const NavigationBarStyle = styled.nav`
  width: 100vw;
  height: 76px;
  background: #fff;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
`;

export default NavigaionBar;
