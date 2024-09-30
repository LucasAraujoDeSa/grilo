import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createItem } from "../services/item-service";
import { toast } from "react-toastify";

export function useAddItem() {
  const query = useQueryClient();

  const mutation = useMutation({
    mutationFn: createItem,
    mutationKey: ["itens"],
    onSuccess: (result) => {
      toast.dismiss();
      if (result.isSuccess) {
        toast.success(result.message);
        query.invalidateQueries({ queryKey: ["itens"] });
      } else {
        toast.error(result.message);
      }
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(error.message);
    },
  });

  return mutation;
}
