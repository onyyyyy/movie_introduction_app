import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { nowPlaying } from "../../api";
import { Banner } from "./Banner";

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowPlayingResults } = await nowPlaying();
        // console.log(data);
        // console.log(results);
        setNowPlayingData(nowPlayingResults);

        setLoading(false);
      } catch (error) {}
    })();
  }, []);

  console.log(nowPlayingData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>{nowPlayingData && <Banner bannerData={nowPlayingData[0]} />}</>
      )}
    </>
  );
};
