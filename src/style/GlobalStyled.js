import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColor = {
  blackColor: "#1d1d1d",
  pointColor: "crimson",
};

export const baseFontSize = {
  baseSize: "16px",
};

export const GlobalStyled = createGlobalStyle`
${reset}

*{
    box-sizing: border-box;
}

body{
background-color: ${mainColor.blackColor};
font-family: 'Noto Sans KR', sans-serif;
color: white;
}

ul, li{
    list-style: none;
}

a{
    text-decoration: none;
    color: white;
}
`;
