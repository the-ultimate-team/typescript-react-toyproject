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
  font-size: 18px;
  list-style: none;
`;

const NavigationBarStyle = styled.nav`
  height: 76px;
  /* background: lightcyan; */
  background: #faf9f9;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default NavigaionBar;