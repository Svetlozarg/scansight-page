import { Query } from "../apiTypes";
import {
  PostQueryAddPointsToUserInput,
  PostQueryDeductPointsFromUserInput,
} from "./apiUserInputs";

export const postQueryAddPointsToUser = (
  userId: string,
  body: PostQueryAddPointsToUserInput
): Query => ({
  endpoint: `/user/${userId}/points`,
  method: "POST",
  variables: body,
});

export const postQueryDeductPointsFromUser = (
  userId: string,
  body: PostQueryDeductPointsFromUserInput
): Query => ({
  endpoint: `/user/${userId}/points/deduct`,
  method: "POST",
  variables: body,
});
