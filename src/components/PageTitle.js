import { Helmet, HelmetProvider } from "react-helmet-async";

export const PageTitle = ({ titleName }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>onxezy | {titleName}</title>
      </Helmet>
    </HelmetProvider>
  );
};
