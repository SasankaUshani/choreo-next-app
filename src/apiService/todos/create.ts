interface GetTodoDetailRequest {
  postId: number;
}

export interface GetTodoDetailResponse {
  userId: number;
  id: number;
  title: string;
  body: {};
}
