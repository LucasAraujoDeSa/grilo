import { useQuery } from "@tanstack/react-query";
import { getAllItens } from "../services/item-service";

export function useItensData() {
  const query = useQuery({
    queryKey: ["itens"],
    queryFn: getAllItens,
  });

  return {
    ...query,
    data: query.data,
  };
}
