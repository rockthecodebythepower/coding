import { Global } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global styles={(theme) => [
      {
        "*": {
          fontFamily: "Regular",
          boxSizing: "border-box",
        },
        "html, body": {
          padding: 0,
          margin: 0,
          backgroundColor: theme.palette.background,
          color: theme.palette.color
        },
        a: {
          color: "inherit",
          textDecoration: "none"
        }
      },
    ]}
    />
  )
}

export default GlobalStyles