import { DataTable } from "@/components/data-table";
import { itensData } from "@/data/itens-data";
import { itensColumns } from "./itens-columns";
import { NewItemFormDialog } from "./forms/new-item-form";

export function ItensMenu() {
  return (
    <div className="pb-4">
      <div className="mb-4 flex justify-between">
        <h1 className="fluid-xl font-bold">Itens</h1>
        <NewItemFormDialog />
      </div>
      <DataTable columns={itensColumns} data={itensData} />
    </div>
  );
}
