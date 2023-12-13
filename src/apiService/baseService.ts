// class BaseService{
//     function GET<T>(request:any): T {
//         return null;
//     }
//     function POST<T>(request:any): T {

//     }
//     function execute(method:string){}
// }

interface RequestOptions extends RequestInit {
  // You can extend the RequestOptions interface with additional options as needed.
  // For example, authentication token handling.
  authToken?: string;
}

class BaseService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  //   constructor(baseUrl: string) {
  //     this.baseUrl = baseUrl;
  //   }

  private async handleRequest(
    url: string,
    options?: RequestOptions
  ): Promise<Response> {
    const requestUrl = `${this.baseUrl}/${url}`;
    const mergedOptions: RequestOptions = {
      method: options?.method,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    };

    // Add authentication token to headers if provided
    if (options?.authToken) {
      mergedOptions.headers = {
        ...mergedOptions.headers,
        Authorization: `Bearer ${options.authToken}`,
      };
    }

    try {
      const response = await fetch(requestUrl, mergedOptions);

      // Add any response interceptors here if needed

      return response;
    } catch (error) {
      console.error(`Request to ${requestUrl} failed:`, error);
      throw error;
    }
  }

  async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const response = await this.handleRequest(endpoint, options);
    const data = await response.json();
    console.log('data', data);

    return data;
  }

  async post<T>(
    endpoint: string,
    data: any,
    options?: RequestOptions
  ): Promise<T> {
    const mergedOptions: RequestOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    };

    const response = await this.handleRequest(endpoint, mergedOptions);
    const responseData = await response.json();
    return responseData;
  }
}

export default BaseService;
// Example usage
// const api = new BaseService();

// // Make a GET request
// api
//   .get<{ userId: number }>('posts/1')
//   .then((data) => console.log('GET Response:', data))
//   .catch((error) => console.error('GET Error:', error));

// // Make a POST request
// api
//   .post<{ id: number }>('posts', {
//     title: 'New Post',
//     body: 'This is a new post.',
//     userId: 1,
//   })
//   .then((data) => console.log('POST Response:', data))
//   .catch((error) => console.error('POST Error:', error));
