import { api } from "@/shared/services/api";
import { ResponseResult } from "@/@types/response-result";
import { Order } from "@/@types/order";
import { ResponseGetAllOrdersDTO } from "../dtos/ResponseGetAllOrdersDTO";

export const getAllOrders = async (): Promise<ResponseResult<Order[]>> => {
  const response = await api.get<ResponseResult<ResponseGetAllOrdersDTO[]>>(
    "api/Order"
  );
  return {
    content: response.data.content.map((item) => {
      const result: Order = {
        id: item.id,
        amount: item.amount,
        orderNum: item.orderNo,
        status: item.status,
        quantity: item.items.reduce((tot, val) => tot + val.quantity, 0),
      };

      return result;
    }),
    isSuccess: response.data.isSuccess,
    message: response.data.message,
    status: response.data.status,
  };
};

export const markAsDone = async (
  id: string
): Promise<ResponseResult<boolean>> => {
  const response = await api.patch<ResponseResult<boolean>>(
    `api/Order/marskAsDone/${id}`
  );
  return response.data;
};
