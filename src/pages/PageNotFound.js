import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";

const PageIMG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const ReturnBtn = styled.div`
  width: 200px;
  height: 50px;
  background-color: lightgray;
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const PageNotFound = () => {
  return (
    <PageIMG>
      <img
        src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page-internet-error-page-or-issue-not-found-on-network-404-error-present-by-man-sleep-on-display_1150-55450.jpg?w=996&t=st=1701651448~exp=1701652048~hmac=bd0066fc01de758fef2befd26456d63070050a7250f58d8a5803e01a7ba5c769"
        alt="errorpage"
      />
      <ReturnBtn>
        <Link to={routes.home}>홈으로 되돌아가기</Link>
      </ReturnBtn>
    </PageIMG>
  );
};
