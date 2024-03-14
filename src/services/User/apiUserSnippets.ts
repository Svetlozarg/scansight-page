import { User } from "../Auth/authTypes";

export type GetQueryAllUsersSnippet = {
  success: boolean;
  data: User[];
};

export type GetQueryUserPointsSnippet = {
  success: boolean;
  data: {
    points: number;
  };
};

export type PostQueryAddPointsToUserSnippet = {
  success: boolean;
  data: {
    points: number;
  };
};

export type PostQueryDeductPointsFromUserSnippet = {
  success: boolean;
  data: {
    points: number;
  };
};
