import styled from "styled-components";

const Container = styled.div`
  padding: 100px 5%;
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
