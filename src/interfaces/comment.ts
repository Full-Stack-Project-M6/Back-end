import { Announce } from "../entities/announce";
import { User } from "../entities/user";

export interface ICommentRequest {
  comment: string;
}

export interface ICommentResponse {
  id: string;
  comment: string;
  createdAt: Date;
  user: User;
  announce: Announce;
}
