import { ResponseResult } from "@/@types/response-result";
import { api } from "@/shared/services/api";
import { SigninDTO, SigninOutputDTO } from "../dtos/signin-dto";

export const signin = async (
  input: SigninDTO
): Promise<ResponseResult<SigninOutputDTO>> => {
  const response = await api.post("api/Account/Signin", input);
  return response.data;
};
