import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faStar,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavigaionBar = () => {
  return (
    <NavigationBarStyle>
      <Link to="/">
        <FontAwesomeSize>
          <FontAwesomeIcon icon={faHouse} />
        </FontAwesomeSize>
      </Link>

      <Link to="/dibs">
        <FontAwesomeSize>
          <FontAwesomeIcon icon={faStar} />
        </FontAwesomeSize>
      </Link>

      <Link to="/cart">
        <FontAwesomeSize>
          <FontAwesomeIcon icon={faCartShopping} />
        </FontAwesomeSize>
      </Link>

      <Link to="/login">
        <FontAwesomeSize>
          <FontAwesomeIcon icon={faBars} />
        </FontAwesomeSize>
      </Link>
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
