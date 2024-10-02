import { ResponseResult } from "@/@types/response-result";
import { api } from "@/shared/services/api";

export const signout = async (): Promise<ResponseResult<boolean>> => {
  const response = await api.post("api/Account/Signout");
  return response.data;
};
