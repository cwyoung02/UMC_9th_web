import type { PAGINATION_ORDER } from "../enums/common";

export type CommonResponse<T> ={
  status: boolean;
  statusCode: number;
  message: string;
  data: T;
};

export type CursorBasedResponse<T> =CommonResponse<{
  data: T;
  nextCursor: number;
  hasNext: boolean;
}>;

export type PaginationDto ={
  cursor?: number;
  limit?: number;
  search?: string;
  order?: PAGINATION_ORDER;
};

export type CommentsDto ={
  lpId: number;
  cursor?: number;
  limit?: number;
  order?: PAGINATION_ORDER;
}