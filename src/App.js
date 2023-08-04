import React from "react";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { RecoilRoot } from "recoil";

import theme from "./theme";
import { HomeScreen } from "./screens";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RecoilRoot>
          <HomeScreen />
        </RecoilRoot>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
