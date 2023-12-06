import { Link } from "react-router-dom";
import { routes } from "../../routes";
import styled from "styled-components";
import { IMG_URL } from "../../constants";

const Wrap = styled.div`
  /* padding: 100px 5%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  @media screen and (max-width: 450px) {
    margin-bottom: 80px;
  }
`;
const Title = styled.h3`
  font-size: 80px;
  font-weight: 900;
  @media screen and (max-width: 768px) {
    font-size: 60px;
  }
  @media screen and (max-width: 450px) {
    font-size: 50px;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 80px 0 50px 0;
  @media screen and (max-width: 768px) {
    margin: 60px 0 40px 0;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;
const ConWarp = styled.div`
  width: 30%;

  h4 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    margin: 60px 0 40px 0;
    h4 {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 450px) {
    width: 90%;
    margin-bottom: 30px;
    h4 {
      margin-top: 10px;
      font-size: 24px;
    }
  }
`;
const Con = styled.div`
  width: 100%;
  height: 500px;
  /* background-color: lightcoral; */
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  transition-duration: 0.5s;
  &:hover {
    transform: translateY(-20px);
  }

  @media screen and (max-width: 768px) {
    height: 300px;
  }
  @media screen and (max-width: 450px) {
    height: 400px;
  }
  /* &:first-child {
    background: url(${IMG_URL}/w500/${(props) => props.$bgUrl1}) no-repeat
      center / cover;
  } */

  /* &:nth-child(2) {
    background: url(${IMG_URL}/w500/${(props) => props.$bgUrl2}) no-repeat
      center / cover;
  } */

  /* &:last-child {
    background: url(${IMG_URL}/w500/${(props) => props.$bgUrl3}) no-repeat
      center / cover;
  } */
`;
const ViewBtn = styled.button`
  all: unset;
  padding: 15px 20px;
  background-color: #808080;
  border-radius: 30px;
`;

export const TopRated = ({ topData }) => {
  return (
    <Wrap>
      <Title>영화 랭킹</Title>
      <Container>
        {topData
          .map((data) => (
            <ConWarp key={data.id}>
              <Link to={`/detail/${data.id}`}>
                <Con $bgUrl={data.poster_path}></Con>
                <h4>{data.title}</h4>
              </Link>
            </ConWarp>
          ))
          .slice(0, 3)}
      </Container>
      <ViewBtn>
        <Link to={routes.topRatedPage}>View More +</Link>
      </ViewBtn>
    </Wrap>
  );
};
