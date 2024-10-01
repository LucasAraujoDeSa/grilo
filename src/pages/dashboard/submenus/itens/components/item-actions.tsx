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
import { EditItemFormDialog } from "../forms/edit-item-form";
import { useDeleteItem } from "../hooks/use-delete-item";

type ItemActionsProps = {
  data: Row<Item>;
};

export function ItemActions({ data }: ItemActionsProps) {
  const { mutateAsync } = useDeleteItem();
  const onDelete = async () => {
    await mutateAsync(data.original.id.toString());
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
        <DropdownMenuItem
          className="text-red-600 cursor-pointer"
          onClick={() => onDelete()}
        >
          Delete
        </DropdownMenuItem>
        <EditItemFormDialog item={data.original} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
