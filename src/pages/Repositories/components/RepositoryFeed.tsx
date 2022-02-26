import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "react-query";

import { GetRepositories } from "src/query/Repositories";
import { RepositoryType } from "src/types/RepositoryType";
import { Repository } from "./Repository";


export const RepositoryFeed: React.FC = () => {
    
  const { isLoading, isError, data } = useQuery(
    "repositories",
    GetRepositories
  );
  
  const repositories = data?.data ? (data.data as RepositoryType[]) : [];

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

  console.log("Success");

  return (
    <Box>
      {repositories
        .sort((prev, curr) => (prev.rank < curr.rank ? -1 : 1))
        .map((repository) => (
          <Repository key={repository.repositoryName} repository={repository} />
        ))}
    </Box>
  );
};
