import React, { useState } from "react";
import {
  Autocomplete,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

import { usersState } from "../../recoil/atoms/usersState";
import { ACTIVE, INACTIVE, ROLES, USER } from "../../constants/constants";

const initialUser = {
  id: "",
  username: "",
  role: USER,
  email: "",
  status: ACTIVE,
};

const AddUser = (props) => {
  const { id } = props;

  const [users, setUsers] = useRecoilState(usersState);

  const [user, setUser] = useState(initialUser);

  const handleSubmit = () => {
    if (users.some((ele) => ele.email === user.email)) {
      alert("Email already exist");
    } else {
      const uniqueId = uuidv4();
      setUsers((users) => [...users, { ...user, id: uniqueId }]);
      setUser(initialUser);
    }
  };

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
      <TextField
        name="username"
        label="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <TextField
        name="email"
        label="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <Autocomplete
        options={ROLES}
        value={user.role}
        onChange={(e, value) => setUser({ ...user, role: value })}
        renderInput={(params) => <TextField {...params} label="Role" />}
        fullWidth
      />
      <RadioGroup
        row
        aria-labelledby="user-status-group-label"
        name="user-status-buttons-group"
        defaultValue={ACTIVE}
        onChange={(e) => setUser({ ...user, status: e.target.value })}
      >
        <FormControlLabel value={ACTIVE} control={<Radio />} label="Active" />
        <FormControlLabel
          value={INACTIVE}
          control={<Radio />}
          label="Inactive"
        />
      </RadioGroup>
      <Button variant="contained" sx={{ width: 100 }} onClick={handleSubmit}>
        {id ? "Update" : "Save"}
      </Button>
    </Stack>
  );
};

export default AddUser;
