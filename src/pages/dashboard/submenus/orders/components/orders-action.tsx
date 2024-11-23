import { Item } from "@/@types/item";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useMarkAsDone } from "../hooks/use-mark-as-done";
import { Order } from "@/@types/order";
import { toast } from "react-toastify";

type OrderActionsProps = {
  data: Row<Order>;
};

export function OrdersActions({ data }: OrderActionsProps) {
  const { mutateAsync } = useMarkAsDone();
  const onMarkAsDone = async () => {
    const result = await mutateAsync(data.original.id.toString());
    if (!result.isSuccess) {
      toast.dismiss();
      toast.error(result.message);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem className="text-red-600 cursor-pointer">
          Cancel
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-green-600 cursor-pointer"
          onClick={() => onMarkAsDone()}
        >
          Done
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
