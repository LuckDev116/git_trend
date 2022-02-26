import React from "react";
import { Link } from "@mui/material";

import { UserType } from "src/types/RepositoryType";

interface AvatarProp {
  user: UserType;
  size: string;
}

export const Avatar: React.FC<AvatarProp> = ({ user, size }) => {
  return (
    <Link
      href={user.url}
      width={size}
      height={size}
      sx={{
        display: "block",
        borderRadius: "50%",
        overflow: "hidden",
        marginX: "2px",
      }}
    >
      <img src={user.avatar} width={size} height={size} alt="User Avatar" />
    </Link>
  );
};
