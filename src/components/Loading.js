import { FadeLoader } from "react-spinners";
import styled from "styled-components";

export const SLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Loading = () => {
  return (
    <SLoading>
      <FadeLoader color="#c82476" />
    </SLoading>
  );
};
