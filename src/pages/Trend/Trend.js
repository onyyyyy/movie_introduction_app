import { useEffect, useState } from "react";
import { dayTrendList, weekTrendList } from "../../api";
import styled from "styled-components";
import { TrendLayout } from "./TrendLayout";
import { Loading } from "../../components/Loading";
import { Layout } from "../../components/Layout";

const Wrap = styled.div`
  padding: 150px 5%;
`;
const Title = styled.h3`
  font-size: 100px;
  font-weight: 900;
  text-align: center;
`;

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
          <Title>Trend</Title>
          <TrendLayout titleName={"DAY"} trendListData={dayTrendData} />
          <TrendLayout titleName={"WEEK"} trendListData={weekTrendData} />
        </Wrap>
      )}
    </>
  );
};
