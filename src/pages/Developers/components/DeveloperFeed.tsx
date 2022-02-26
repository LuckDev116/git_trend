import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "react-query";

import { GetDevelopers } from "src/query/Developers";
import { DeveloperType } from "src/types/DeveloperType";
import { Developer } from "./Developer";

export const DeveloperFeed: React.FC = () => {
  const { isLoading, isError, data } = useQuery("developers", GetDevelopers);

  const developers = data?.data ? (data.data as DeveloperType[]) : [];

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", margin: "30px" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", margin: "30px" }}>
        Error occrued
      </Box>
    );
  }

  return (
    <Box>
      {developers
        .sort((prev, curr) => (prev.rank < curr.rank ? -1 : 1))
        .map((developer) => (
          <Developer key={developer.username} developer={developer} />
        ))}
    </Box>
  );
};
