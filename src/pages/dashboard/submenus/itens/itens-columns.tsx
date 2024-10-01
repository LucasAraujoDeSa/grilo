import { Item } from "@/@types/item";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/shared/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { ItemActions } from "./components/item-actions";

export const getItensColumns = (): ColumnDef<Item>[] => [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const title = String(row.getValue("title"));

      return <div className="text-left pl-4 font-medium">{title}</div>;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

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
    id: "actions",
    cell: ({ row }) =>
      ItemActions({
        data: row,
      }),
  },
];
