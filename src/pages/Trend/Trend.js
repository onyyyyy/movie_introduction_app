import { useEffect, useState } from "react";
import { dayTrendList, weekTrendList } from "../../api";
import styled from "styled-components";
import { TrendLayout } from "./TrendLayout";
import { Loading } from "../../components/Loading";

const Wrap = styled.div`
  padding: 100px 0;
`;
// const Title = styled.h3`
//   font-size: 100px;
//   font-weight: 900;
//   text-align: center;
// `;

export const Trend = () => {
  const [dayTrendData, setDayTrendData] = useState();
  const [weekTrendData, setWeekTrendData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { results: dayList } = await dayTrendList();
        // console.log(data);
        // console.log(dayList);
        setDayTrendData(dayList);

        const { results: weekList } = await weekTrendList();
        setWeekTrendData(weekList);

        setIsLoading(false);
      } catch (error) {}
    })();
  }, []);

  // console.log(dayTrendData);
  console.log(weekTrendData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrap>
          {/* <Title>인기 영화</Title> */}
          <TrendLayout
            titleName={"오늘의 트렌드"}
            trendListData={dayTrendData}
          />
          <TrendLayout
            titleName={"금주의 트렌드"}
            trendListData={weekTrendData}
          />
        </Wrap>
      )}
    </>
  );
};
