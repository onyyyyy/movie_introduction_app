import styled from "styled-components";
import { mainColor } from "../style/GlobalStyled";

const Emessage = styled.span`
  color: ${mainColor.pointColor};
  font-weight: 700;
  margin-top: 10px;
`;

export const ErrorMessage = ({ message }) => {
  return (
    <Emessage>
      <span>{message}</span>
    </Emessage>
  );
};
