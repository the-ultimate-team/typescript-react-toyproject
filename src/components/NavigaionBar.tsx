import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faStar,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const NavigaionBar = () => {
  return (
    <NavigationBarStyle>
      <FontAwesomeSize>
        <FontAwesomeIcon icon={faHouse} />
      </FontAwesomeSize>
      <FontAwesomeSize>
        <FontAwesomeIcon icon={faStar} />
      </FontAwesomeSize>
      <FontAwesomeSize>
        <FontAwesomeIcon icon={faCartShopping} />
      </FontAwesomeSize>
      <FontAwesomeSize>
        <FontAwesomeIcon icon={faBars} />
      </FontAwesomeSize>
    </NavigationBarStyle>
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
