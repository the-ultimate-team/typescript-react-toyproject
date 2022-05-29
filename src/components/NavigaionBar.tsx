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

const NavigaionBar = () => {
  const [userInfo, setUserInfo] = useRecoilState(User);

  const notLink = () => {
    alert("로그인 이용 후, 사용하시길 바랍니다.");
  };

  return (
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
