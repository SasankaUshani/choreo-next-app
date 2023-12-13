interface GetTodoDetailRequest {
  postId: number;
}

interface GetTodoDetailResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}
