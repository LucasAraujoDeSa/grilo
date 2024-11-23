import { DataTable } from "@/shared/components/data-table";
import { OrdersColumns } from "./orders-columns";
import { useOrdersData } from "./hooks/use-orders-data";
import { toast } from "react-toastify";
import { Order } from "@/@types/order";

export function OrderMenu() {
  const { data, isLoading, error } = useOrdersData();

  if (error) {
    toast.dismiss();
    toast.error("Internal error, please try again later");
  }

  return (
    <div className="pb-4">
      <h1 className="pb-4 fluid-xl font-bold">Orders</h1>
      <DataTable
        columns={OrdersColumns}
        data={data !== undefined ? (data.content as Order[]) : []}
        isLoading={isLoading}
      />
    </div>
  );
}
