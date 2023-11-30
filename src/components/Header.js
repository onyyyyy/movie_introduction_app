import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { baseFontSize, mainColor } from "../style/GlobalStyled";

const HeaderWrap = styled.header`
  display: flex;
  justify-content: center;
`;

const Sheader = styled.div`
  width: 100%;
  padding: 20px 5%;
  /* background-color: lightgray; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const MenuWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 26px;
  margin-right: 120px;
  font-weight: 700;
  a {
    color: ${mainColor.pointColor};
  }
`;

const Gnb = styled.ul`
  display: flex;
  li {
    margin-right: 50px;
    font-size: ${baseFontSize.baseSize};
    font-weight: 500;
  }
`;

const SideIcon = styled.div`
  font-size: ${baseFontSize.baseSize};
  font-weight: 500;
`;
export const Header = () => {
  return (
    <HeaderWrap>
      <Sheader>
        <MenuWrap>
          <Logo>
            <Link to={routes.Home}>OnMOVIE</Link>
          </Logo>
          <Gnb>
            <Link to={routes.Trend}>
              <li>Trend</li>
            </Link>
            <Link to={routes.TopRatedPage}>
              <li>Top Rated</li>
            </Link>
            <Link to={""}>
              <li>현재 상영작</li>
            </Link>
            <Link to={""}>
              <li>상영 예정작</li>
            </Link>
          </Gnb>
        </MenuWrap>

        <SideIcon>
          <Link to={routes.Search}>검색</Link>
        </SideIcon>
      </Sheader>
    </HeaderWrap>
  );
};
