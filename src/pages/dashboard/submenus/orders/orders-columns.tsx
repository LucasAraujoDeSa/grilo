import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/shared/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { Order } from "@/@types/order";
import { OrdersActions } from "./components/orders-action";

export const OrdersColumns: ColumnDef<Order>[] = [
  {
    accessorKey: "orderNum",
    header: () => {
      return <div className="text-left">OrderNum</div>;
    },
    cell: ({ row }) => {
      return (
        <div className="text-left pl-4 font-medium">
          {row.getValue("orderNum")}
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          Quantity
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const quantity = Number(row.getValue("quantity"));
      return (
        <div
          className={`font-medium ${
            quantity === 0 ? "text-red-600" : "text-green-600"
          }`}
        >
          {quantity}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status");
      return <div>{String(status).toLocaleLowerCase()}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) =>
      OrdersActions({
        data: row,
      }),
  },
];
