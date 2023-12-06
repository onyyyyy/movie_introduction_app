import { useEffect, useState } from "react";
import { topRated } from "../../api";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Loading } from "../../components/Loading";
import { Link } from "react-router-dom";
import { useScrollTop } from "../../lib/useScrollTop";

const Wrap = styled.div`
  padding: 100px 20%;
  @media screen and (max-width: 1024px) {
    padding: 100px 15%;
  }
  @media screen and (max-width: 768px) {
    padding: 100px 10%;
  }
  @media screen and (max-width: 450px) {
    padding: 100px 5%;
  }
`;
const Title = styled.h3`
  padding: 50px 0 150px 0;
  font-size: 80px;
  font-weight: 900;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 60px;
    padding-bottom: 100px;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 80px;
    font-size: 50px;
    font-weight: 900;
  }
`;
const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 60px;
  @media screen and (max-width: 450px) {
    column-gap: 30px;
    row-gap: 40px;
  }
`;
const Con = styled.div``;
const Poster = styled.div`
  height: 800px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;

  @media screen and (max-width: 1024px) {
    height: 600px;
  }
  @media screen and (max-width: 768px) {
    height: 400px;
  }
  @media screen and (max-width: 450px) {
    height: 300px;
  }
`;

const PosterTitle = styled.h4`
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
    margin-top: 10px;
    line-height: 24px;
  }
`;

export const TopRatedPage = () => {
  // const data = topRated();
  // console.log(data);

  const [topRatedList, setTopRatedList] = useState();
  const [isLoading, setLoading] = useState(true);
  useScrollTop();

  useEffect(() => {
    (async () => {
      const { results } = await topRated();
      // console.log(results);
      setTopRatedList(results);
      setLoading(false);
    })();
  }, []);

  // setLoading(false);
  // console.log(topRatedList);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrap>
          <Title>Top Rated</Title>
          <ConWrap>
            {topRatedList
              .map((data) => (
                <Con key={data.id}>
                  <Link to={`/detail/${data.id}`}>
                    <Poster $bgUrl={data.poster_path}></Poster>
                    <PosterTitle>{data.title}</PosterTitle>
                  </Link>
                </Con>
              ))
              .slice(0, 10)}
          </ConWrap>
        </Wrap>
      )}
    </>
  );
};
