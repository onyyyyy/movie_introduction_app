import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { nowPlaying, topRated, upComing } from "../../api";
import { Banner } from "./Banner";
import { TopRated } from "./TopRated";
import { PageTitle } from "../../components/PageTitle";
import { MovieList } from "./MovieList";

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [topRatedData, setTopRatedData] = useState();
  const [upComingData, setUpComingData] = useState();
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

        const { results: upComingResults } = await upComing();
        // console.log(upComingResults);
        setUpComingData(upComingResults);

        setLoading(false);
      } catch (error) {}
    })();
  }, []);

  // console.log(nowPlayingData);
  // console.log(topRatedData);
  // console.log(upComingData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {nowPlayingData && (
            <>
              <PageTitle titleName={"Home"} />
              <Banner bannerData={nowPlayingData[0]} />
              <TopRated topData={topRatedData} />
              <MovieList
                titleName={"현재 상영작"}
                movieListData={nowPlayingData}
              />
              <MovieList
                titleName={"상영 예정작"}
                movieListData={upComingData}
              />
            </>
          )}
        </>
      )}
    </>
  );
};
