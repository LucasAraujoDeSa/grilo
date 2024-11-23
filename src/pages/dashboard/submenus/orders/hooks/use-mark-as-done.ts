import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markAsDone } from "../services/order-service";
import { toast } from "react-toastify";

export function useMarkAsDone() {
  const query = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["orders"],
    mutationFn: markAsDone,
    onSuccess: () => {
      toast.dismiss();
      query.invalidateQueries({ queryKey: ["orders"] });
      toast.success("order done");
    },
    onError: (data) => {
      console.log(data.message);
    },
  });

  return mutation;
}
