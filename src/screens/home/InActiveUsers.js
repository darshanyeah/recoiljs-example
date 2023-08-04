import React from "react";
import {
  Badge,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useRecoilValue } from "recoil";

import { usersState } from "../../recoil/atoms/usersState";

const InActiveUsers = () => {
  const users = useRecoilValue(usersState);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell colSpan={5} align="center">
            <Typography fontWeight={800} letterSpacing={1} fontSize={18}>
              Inactive Users
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Status</TableCell>
          <TableCell colSpan={2} />
        </TableRow>
      </TableHead>
      <TableBody>
        {users
          ?.filter((user) => user.status === "inactive")
          .map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Typography>{user.username}</Typography>
                <Typography variant="caption" letterSpacing={1}>
                  {user.email}
                </Typography>
              </TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell align="center">
                <Badge
                  badgeContent={user.status}
                  color="primary"
                  sx={{
                    textTransform: "capitalize",
                    ".MuiBadge-badge": { fontWeight: 700 },
                  }}
                />
              </TableCell>
              <TableCell>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default InActiveUsers;
