import { Employee, EmployeeStatus } from "@/@types/employee";

export const employeeData: Employee[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    status: EmployeeStatus.ACTIVE,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "(987) 654-3210",
    status: EmployeeStatus.INACTIVE,
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "(555) 555-5555",
    status: EmployeeStatus.BLOCK,
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    phone: "(777) 777-7777",
    status: EmployeeStatus.ACTIVE,
  },
  {
    id: 5,
    name: "Mary Wilson",
    email: "mary.wilson@example.com",
    phone: "(333) 333-3333",
    status: EmployeeStatus.ACTIVE,
  },
  {
    id: 6,
    name: "David Garcia",
    email: "david.garcia@example.com",
    phone: "(222) 222-2222",
    status: EmployeeStatus.ACTIVE,
  },
  {
    id: 7,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "(444) 444-4444",
    status: EmployeeStatus.INACTIVE,
  },
];
