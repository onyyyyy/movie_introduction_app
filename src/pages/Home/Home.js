import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { nowPlaying, topRated } from "../../api";
import { Banner } from "./Banner";
import { TopRated } from "./TopRated";

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
              <TopRated topData={topRatedData} />
            </>
          )}
        </>
      )}
    </>
  );
};
