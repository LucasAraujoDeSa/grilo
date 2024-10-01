import { ResponseResult } from "@/@types/response-result";
import { SignupDTO, SignupOutputDTO } from "../dtos/signup-dto";
import { api } from "@/shared/services/api";

export const signup = async (
  input: SignupDTO
): Promise<ResponseResult<SignupOutputDTO>> => {
  const response = await api.post("api/Account/Singup", input);
  return response.data;
};
