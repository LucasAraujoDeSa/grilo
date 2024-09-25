import { DataTable } from "@/components/data-table";
import { itensData } from "@/data/itens-data";
import { itensColumns } from "./itens-columns";

export function ItensMenu() {
  return (
    <div className="pb-4">
      <div>
        <h1 className="pb-4 text-2xl font-bold">Itens</h1>
      </div>
      <DataTable columns={itensColumns} data={itensData} />
    </div>
  );
}
