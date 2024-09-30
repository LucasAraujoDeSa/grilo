export type ResponseResult<T = any> = {
  isSuccess: boolean;
  message: string;
  content: T;
  status: string;
};
