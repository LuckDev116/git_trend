import { getApiClient } from "src/axios";

export const GetDevelopers = () => {
  return getApiClient().get("/developers");
};
