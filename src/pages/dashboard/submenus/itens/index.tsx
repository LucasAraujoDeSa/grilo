import { DataTable } from "@/components/data-table";
import { getItensColumns } from "./itens-columns";
import { NewItemFormDialog } from "./forms/new-item-form";
import { useItensData } from "./hooks/use-itens-data";
import { Item } from "@/@types/item";
import { toast } from "react-toastify";
import { useMemo } from "react";

export function ItensMenu() {
  const { data, isLoading, error } = useItensData();

  if (error) {
    toast.dismiss();
    toast.error(data?.message);
  }

  const columns = useMemo(() => getItensColumns(), []);
  return (
    <div className="pb-4">
      <div className="mb-4 flex justify-between">
        <h1 className="fluid-xl font-bold">Itens</h1>
        <NewItemFormDialog />
      </div>
      <DataTable
        columns={columns}
        data={data !== undefined ? (data.content as Item[]) : []}
        isLoading={isLoading}
      />
    </div>
  );
}
