import { DataTable } from "@/components/data-table";
import { OrdersData } from "@/data/orders-data";
import { OrdersColumns } from "./orders-columns";

export function OrderMenu() {
  return (
    <div className="pb-4">
      <h1 className="pb-4 fluid-xl font-bold">Orders</h1>
      <DataTable columns={OrdersColumns} data={OrdersData} />
    </div>
  );
}
