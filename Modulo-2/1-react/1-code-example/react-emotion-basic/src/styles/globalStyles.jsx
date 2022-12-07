import { Global } from "@emotion/react";


const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => [
        {
          "*": {
            fontFamily: "Regular",
            boxSizing: "border-box",
          },
          "html,body": {
            padding: 0,
            margin: 0,
            backgroundColor: theme.palette.background.main,
          },
          "::-webkit-scrollbar": {
            width: theme.spacing(0.75),
          },
          "::-webkit-scrollbar-track": {
            boxShadow: `inset 0 0 5px red}`,
          },
          "::-webkit-scrollbar-thumb": {
            width: theme.spacing(0.75),
            borderRadius: theme.spacing(0.5),
          },
          a: {
            color: "inherit",
            textDecoration: "none",
          },
        },
      ]}
    />
  );
};

export default GlobalStyles;
