import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// コメントを追加するだけです。
import theme from "./theme/theme";
import { Router } from "./router/Router";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
