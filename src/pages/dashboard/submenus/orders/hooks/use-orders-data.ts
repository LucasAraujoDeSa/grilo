import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../services/order-service";

export function useOrdersData() {
  const query = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
  });

  return {
    ...query,
    data: query.data,
  };
}
