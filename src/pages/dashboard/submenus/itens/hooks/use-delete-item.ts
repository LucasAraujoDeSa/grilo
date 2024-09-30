import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItem } from "../services/item-service";
import { toast } from "react-toastify";

export function useDeleteItem() {
  const query = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteItem,
    onMutate: () => {
      toast.dismiss();
      toast.loading("Deleting...");
    },
    onSuccess: () => {
      toast.dismiss();
      query.invalidateQueries({ queryKey: ["itens"] });
      toast.success("item deleted successfully");
    },
  });

  return mutation;
}
