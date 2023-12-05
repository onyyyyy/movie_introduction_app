import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { baseFontSize, mainColor } from "../style/GlobalStyled";
import { useEffect, useRef, useState } from "react";
import { nowPlaying, upComing } from "../api";

// const HeaderWrap = styled.header`
//   display: flex;
//   justify-content: center;
// `;

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

const SideIcon = styled.div`
  font-size: ${baseFontSize.baseSize};
  font-weight: 500;
  /* @media screen and (max-width: 450px) {
    display: none;
  } */
`;

// const MoMenuWrap = styled.div`
//   display: none;
//   @media screen and (max-width: 450px) {
//     display: block;
//   }
// `;
// const MoBtn = styled.div`
//   font-size: 20px;
// `;
// const Momenu = styled.ul`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   top: 0;
//   right: -100%;
//   line-height: 50px;
//   width: 100%;
//   height: 70vh;
//   background-color: rgba(0, 0, 0, 0.9);

//   li {
//     font-size: 20px;
//     font-weight: 600;
//   }
// `;

export const Header = () => {
  const headerRef = useRef();
  // console.log(headerRef);

  const scrollHandler = () => {
    const pageY = window.scrollY;
    // console.log(pageY);
    const { current } = headerRef;
    // console.log(current);
    if (pageY > 300) {
      current.style.position = "fixed";
      current.style.backgroundColor = "rgba(0,0,0,1)";
    } else {
      current.style.position = "absolute";
      current.style.backgroundColor = "transparent";
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  });

  const [nowPlayingData, setNowPlayingData] = useState();
  const [upcomingData, setUpcomingData] = useState();
  // const [isOpen, setOpen] = useState(false);
  // const toggleMenu = () => {
  //   setOpen((isOpen) => !isOpen);
  // };

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
    <Sheader ref={headerRef}>
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
      {/* <MoMenuWrap>
        <MoBtn onClick={() => toggleMenu()}>=</MoBtn>
        <Momenu className={isOpen ? "show-menu" : "hide-menu"}>
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
          <Link to={routes.search}>
            <li>검색</li>
          </Link>
        </Momenu>
      </MoMenuWrap> */}
    </Sheader>
  );
};
