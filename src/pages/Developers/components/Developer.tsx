import React from "react";
import { Box, Typography, Link, Button } from "@mui/material";

import { Avatar } from "src/components/Avatar";
import { DeveloperType } from "src/types/DeveloperType";
import { UserType } from "src/types/RepositoryType";
import { FireIcon } from "src/components/Icons/FireIcon";
import { BranchIcon } from "src/components/Icons/BranchIcon";
import { HeartIcon } from "src/components/Icons/HeartIcon";

interface DeveloperProps {
  developer: DeveloperType;
}

export const Developer: React.FC<DeveloperProps> = ({ developer }) => {
  const user: UserType = {
    username: developer.username,
    url: developer.url,
    avatar: developer.avatar,
  };
  return (
    <Box
      sx={{
        padding: "20px",
        borderWidth: "0 0 1px 0",
        borderColor: "secondary.main",
        borderStyle: "solid",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      <Typography sx={{ width: "16px", fontSize: "12px", textAlign: "center" }}>
        {developer.rank}
      </Typography>
      <Box sx={{ marginX: "16px" }}>
        <Avatar user={user} size={"48px"} />
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            width: "33.33%",
            display: "flex",
            flexDirection: "column",
            paddingRight: "8px",
          }}
        >
          <Link
            href={developer.url}
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#58a6ff",
              textDecoration: "none",
              marginBottom: "4px",
              ":hover": {
                textDecoration: "underline",
              },
            }}
          >
            {developer.name}
          </Link>
          <Link
            href={developer.url}
            sx={{
              fontSize: "16px",
              color: "text.secondary",
              textDecoration: "none",
              marginBottom: "4px",
              ":hover": {
                color: "#58a6ff",
                textDecoration: "underline",
              },
            }}
          >
            {developer.username}
          </Link>
        </Box>
        <Box
          sx={{
            width: "33.33%",
            paddingRight: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "4px",
            }}
          >
            <FireIcon />
            <Typography
              sx={{
                fontSize: "12px",
                textTransform: "uppercase",
                marginLeft: "4px",
              }}
            >
              Popular Repo
            </Typography>
          </Box>
          <Link
            href={developer.popularRepository.url}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textDecoration: "none",
              color: "#58a6ff",
              marginBottom: "4px",
              ":hover": {
                textDecoration: "underline",
              },
            }}
          >
            <BranchIcon />
            <Typography
              sx={{ fontSize: "16px", fontWeight: 600, marginLeft: "4px" }}
            >
              {developer.popularRepository.repositoryName}
            </Typography>
          </Link>
          {developer.popularRepository.description && (
            <Typography>{developer.popularRepository.description}</Typography>
          )}
        </Box>
        <Box
          sx={{
            width: "33.33%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              padding: "3px 12px",
              borderRadius: "6px",
              borderColor: "secondary.main",
              bgcolor: "background.paper",
              marginRight: "8px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              ":hover": {
                borderColor: "text.secondary",
              },
            }}
          >
            <HeartIcon />
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                color: "text.primary",
                marginLeft: "6px",
                textTransform: "none",
              }}
            >
              Sponsor
            </Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              padding: "3px 12px",
              borderRadius: "6px",
              borderColor: "secondary.main",
              bgcolor: "background.paper",
              ":hover": {
                borderColor: "text.secondary",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                color: "text.primary",
                textTransform: "none",
              }}
            >
              Follow
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
