import { Item } from "@/@types/item";
import { api } from "@/services/api";
import { NewItemDTO } from "../dtos/new-item-dto";
import { EditItemDTO } from "../dtos/edit-item-dto";

export const getAllItens = async (): Promise<Item[]> => {
  const response = await api.get("api/Item");
  return response.data;
};

export const createItem = async (input: NewItemDTO): Promise<Item> => {
  const response = await api.post("api/Item", {
    title: input.title,
    price: input.price,
    quantity: input.quantity,
  });
  return response.data;
};

export const updateItem = async (input: EditItemDTO): Promise<Item> => {
  const response = await api.put("api/Item", {
    id: input.id,
    title: input.title,
    price: input.price,
    quantity: input.quantity,
  });
  return response.data;
};

export const deleteItem = async (id: string) => {
  await api.delete(`api/Item/${id}`);
};
