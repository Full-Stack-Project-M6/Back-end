import { Announce } from "../entities/announce";
import { User } from "../entities/user";
import { IAnnounceResponce } from "./announce";
import { IUserResponse } from "./user";

export interface ICommentRequest {
  comment: string;
}

export interface ICommentResponse {
  id: string;
  comment: string;
  createdAt: Date;
  user: IUserResponse;
  announce: IAnnounceResponce;
}

export interface ICommentUpdate {
  comment?: string;
}
