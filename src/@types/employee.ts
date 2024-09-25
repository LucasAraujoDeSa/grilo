export enum EmployeeStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  BLOCK = "block",
}

export type Employee = {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: EmployeeStatus;
};
