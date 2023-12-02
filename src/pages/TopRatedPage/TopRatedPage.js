import { useEffect, useState } from "react";
import { topRated } from "../../api";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Loading } from "../../components/Loading";

const Wrap = styled.div`
  padding: 100px 20%;
`;
const Title = styled.h3`
  padding: 50px 0 150px 0;
  font-size: 80px;
  font-weight: 900;
  text-align: center;
`;
const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
`;
const Con = styled.div``;
const Poster = styled.div`
  height: 800px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

const PosterTitle = styled.h4`
  font-size: 30px;
  font-weight: 600;
  margin: 20px 0 80px 0;
`;

export const TopRatedPage = () => {
  // const data = topRated();
  // console.log(data);

  const [topRatedList, setTopRatedList] = useState();
  const [isLoading, setLoading] = useState(true);

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
                  <Poster $bgUrl={data.poster_path}></Poster>
                  <PosterTitle>{data.title}</PosterTitle>
                </Con>
              ))
              .slice(0, 10)}
          </ConWrap>
        </Wrap>
      )}
    </>
  );
};
