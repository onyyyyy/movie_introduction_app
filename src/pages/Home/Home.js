import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { nowPlaying, topRated } from "../../api";
import { Banner } from "./Banner";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

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
`;
const ViewBtn = styled.button`
  all: unset;
  padding: 15px 20px;
  background-color: #808080;
  border-radius: 30px;
`;

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [topRatedData, setTopRatedData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowPlayingResults } = await nowPlaying();
        // console.log(data);
        // console.log(results);
        setNowPlayingData(nowPlayingResults);

        const { results: topRatedResults } = await topRated();
        // console.log(topRatedResults);
        setTopRatedData(topRatedResults);

        setLoading(false);
      } catch (error) {}
    })();
  }, []);

  // console.log(nowPlayingData);
  console.log(topRatedData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {nowPlayingData && (
            <>
              <Banner bannerData={nowPlayingData[0]} />
              <Wrap>
                <Title>Top Rated</Title>
                <Container>
                  <ConWarp>
                    <Con></Con>
                    <h4>{topRatedData[0].title}</h4>
                  </ConWarp>
                  <ConWarp>
                    <Con></Con>
                    <h4>{topRatedData[1].title}</h4>
                  </ConWarp>
                  <ConWarp>
                    <Con></Con>
                    <h4>{topRatedData[2].title}</h4>
                  </ConWarp>
                </Container>
                <ViewBtn>
                  <Link to={routes.TopRatedPage}>View More +</Link>
                </ViewBtn>
              </Wrap>
            </>
          )}
        </>
      )}
    </>
  );
};
