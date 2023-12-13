import BaseService from '../baseService';

class TodoService extends BaseService {
  getDetail = (
    request: GetTodoDetailRequest
  ): Promise<GetTodoDetailResponse> => {
    const response = this.get<GetTodoDetailResponse>(`posts/${request.postId}`);
    console.log('###response', response);
    return response;
  };
  //   createToDo = (request: GetTodoDetailRequest): GetTodoDetailResponse => {
  //     // return GET(request);
  //   };
}

const TodoServiceInstance = new TodoService();

export default TodoServiceInstance;
