import { Query } from "../apiTypes";
import {
  PostQueryAddPointsToUserInput,
  PostQueryDeductPointsFromUserInput,
  PostQueryIpdateUserLocationInput,
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

export const postQueryIpdateUserLocation = (
  userId: string,
  body: PostQueryIpdateUserLocationInput
): Query => ({
  endpoint: `/user/${userId}/location`,
  method: "PUT",
  variables: body,
});
