import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import "@fontsource/rubik";
import "@fontsource/staatliches";

const theme = extendTheme({
  fonts: {
    heading: `'Staatliches', cursive;`,
    body: `'Rubik', sans-serif;`,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
