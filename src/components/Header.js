import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { baseFontSize, mainColor } from "../style/GlobalStyled";
import { useEffect, useState } from "react";
import { nowPlaying, upComing } from "../api";

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
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;

const Gnb = styled.ul`
  display: flex;
  li {
    margin-right: 50px;
    font-size: ${baseFontSize.baseSize};
    font-weight: 500;
  }
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const MoMenu = styled.div`
  display: none;
  /* @media screen and (max-width: 450px) {
    display: block;
  } */
`;
const Mbtn = styled.button`
  all: unset;
`;
const Mgnb = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 70vh;
  background-color: rgba(255, 255, 255, 0.7);
  a {
    color: #333;
    font-size: 30px;
    font-weight: 900;
  }
`;

const SideIcon = styled.div`
  font-size: ${baseFontSize.baseSize};
  font-weight: 500;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
export const Header = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [upcomingData, setUpcomingData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        setNowPlayingData(nowResults);

        const { results: upcomingResults } = await upComing();
        setUpcomingData(upcomingResults);
      } catch (error) {
        console.log("Error" + error);
      }
    })();
  }, []);

  return (
    <HeaderWrap>
      <Sheader>
        <MenuWrap>
          <Logo>
            <Link to={routes.home}>OnMOVIE</Link>
          </Logo>
          <Gnb>
            <Link to={routes.trend}>
              <li>영화 트렌드</li>
            </Link>
            <Link
              to={routes.list}
              state={{ listdata: nowPlayingData, title: "현재 상영작" }}
            >
              <li>현재 상영작</li>
            </Link>
            <Link
              to={routes.list}
              state={{ listdata: upcomingData, title: "상영 예정작" }}
            >
              <li>상영 예정작</li>
            </Link>
          </Gnb>
        </MenuWrap>

        <SideIcon>
          <Link to={routes.search}>검색</Link>
        </SideIcon>
        <MoMenu>
          <Mbtn>=</Mbtn>
          <Mgnb>
            <Link to={routes.trend}>
              <li>인기영화</li>
            </Link>
            <Link to={""}>
              <li>현재 상영작</li>
            </Link>
            <Link to={""}>
              <li>상영 예정작</li>
            </Link>
            <Link to={routes.search}>
              <li>검색</li>
            </Link>
          </Mgnb>
        </MoMenu>
      </Sheader>
    </HeaderWrap>
  );
};
