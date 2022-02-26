import { getApiClient } from "../axios";

export const GetRepositories = () => {
  return getApiClient().get("/repositories");
};
