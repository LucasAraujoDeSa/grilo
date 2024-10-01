import { DataTable } from "@/shared/components/data-table";
import { employeeData } from "@/data/employee-data";
import { employeesColumns } from "./employees-columns";

export function EmployeeMenu() {
  return (
    <div className="pb-4">
      <h1 className="pb-4 fluid-xl font-bold">Employees</h1>
      <DataTable
        columns={employeesColumns}
        data={employeeData}
        isLoading={false}
      />
    </div>
  );
}
