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
          <ActiveUsers users={users} />
        </Grid>
        <Grid item sm={12} md={6} lg={6} xl={4}>
          <InActiveUsers users={users} />
        </Grid>
        <Grid item sm={12} md={6} lg={6} xl={4}>
          <AddUser />
        </Grid>
      </Grid>
    </Stack>
  );
};

const users = [
  {
    id: 1,
    username: "user1",
    role: "admin",
    email: "user1@example.com",
    status: "active",
  },
  {
    id: 2,
    username: "user2",
    role: "user",
    email: "user2@example.com",
    status: "active",
  },
  {
    id: 3,
    username: "user3",
    role: "user",
    email: "user3@example.com",
    status: "inactive",
  },
  {
    id: 4,
    username: "user4",
    role: "user",
    email: "user4@example.com",
    status: "active",
  },
  {
    id: 5,
    username: "user5",
    role: "user",
    email: "user5@example.com",
    status: "inactive",
  },
  {
    id: 6,
    username: "user6",
    role: "user",
    email: "user6@example.com",
    status: "active",
  },
  {
    id: 7,
    username: "user7",
    role: "user",
    email: "user7@example.com",
    status: "active",
  },
  {
    id: 8,
    username: "user8",
    role: "user",
    email: "user8@example.com",
    status: "inactive",
  },
  {
    id: 9,
    username: "user9",
    role: "user",
    email: "user9@example.com",
    status: "active",
  },
  {
    id: 10,
    username: "user10",
    role: "user",
    email: "user10@example.com",
    status: "inactive",
  },
];

export default Home;

// Active user
// De-Active user
// Add/Edit User Form
