import { Query } from "../apiTypes";

export const getQueryAllUsers: Query = {
  endpoint: `/users`,
  method: "GET",
};

export const getQueryUserById = (userId: string): Query => ({
  endpoint: `/user/${userId}`,
  method: "GET",
});

export const getQueryUserPoints = (userId: string): Query => ({
  endpoint: `/user/${userId}/points`,
  method: "GET",
});
