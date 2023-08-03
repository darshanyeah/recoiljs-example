import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const AddUser = (props) => {
  const { id } = props;
  return (
    <Stack spacing={3}>
      <Typography
        fontWeight={800}
        letterSpacing={1}
        fontSize={18}
        py={2}
        borderBottom={"1px solid #515151"}
        textAlign="center"
      >
        {id ? "Update" : "Add"} User
      </Typography>
      <TextField name="username" label="Username" />
      <TextField name="email" label="Email" />
      <TextField name="role" label="Role" />
      <TextField name="status" label="Status" />
      <Button variant="contained" sx={{ width: 100 }}>
        {id ? "Update" : "Save"}
      </Button>
    </Stack>
  );
};

export default AddUser;
