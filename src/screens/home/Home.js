import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AddUser from "./AddUser";
import ActiveUsers from "./ActiveUsers";
import InActiveUsers from "./InActiveUsers";

const Home = () => {
  return (
    <Stack alignItems="center" minHeight="100vh" padding={3}>
      <Typography
        variant="h4"
        fontWeight="600"
        letterSpacing={2}
        alignSelf="center"
        borderBottom={"1px solid #515151"}
        mb={3}
      >
        Recoil JS - Example
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6} lg={6} xl={4}>
          <ActiveUsers />
        </Grid>
        <Grid item sm={12} md={6} lg={6} xl={4}>
          <InActiveUsers />
        </Grid>
        <Grid item sm={12} md={6} lg={6} xl={4}>
          <AddUser />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Home;
