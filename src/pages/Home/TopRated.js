import { Link } from "react-router-dom";
import { routes } from "../../routes";
import styled from "styled-components";
import { IMG_URL } from "../../constants";

const Wrap = styled.div`
  padding: 100px 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 80px;
  font-weight: 900;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 80px 0 50px 0;
`;
const ConWarp = styled.div`
  width: 30%;
  h4 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: 600;
  }
`;
const Con = styled.div`
  width: 100%;
  height: 500px;
  background-color: lightcoral;
  /* &:first-child {
    background: url(${IMG_URL}/w500/${(props) => props.$bgUrl1}) no-repeat
      center / cover;
  } */

  &:nth-child(2) {
    background: url(${IMG_URL}/w500/${(props) => props.$bgUrl2}) no-repeat
      center / cover;
  }

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
      <Title>Top Rated</Title>
      <Container>
        <ConWarp>
          <Con></Con>
          <h4>{topData[0].title}</h4>
        </ConWarp>
        <ConWarp>
          <Con></Con>
          <h4>{topData[1].title}</h4>
        </ConWarp>
        <ConWarp>
          <Con></Con>
          <h4>{topData[2].title}</h4>
        </ConWarp>
      </Container>
      <ViewBtn>
        <Link to={routes.TopRatedPage}>View More +</Link>
      </ViewBtn>
    </Wrap>
  );
};
