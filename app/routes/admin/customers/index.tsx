import { useState } from "react";
import { Customer } from "~/types";
import { Table } from "~/components/ui-components";

// mockData.ts
export const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    verified: true,
  },
  { id: "2", name: "Bob Smith", email: "bob@example.com", verified: false },
  {
    id: "3",
    name: "Carol Williams",
    email: "carol@example.com",
    verified: true,
  },
  { id: "4", name: "Dave Brown", email: "dave@example.com", verified: false },
];

const CustomersView: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);

  const toggleVerification = (id: string) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === id
          ? { ...customer, verified: !customer.verified }
          : customer
      )
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Customers</h2>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Verified</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {customers.map((customer) => (
            <Table.Row key={customer.id}>
              <Table.DataCell>{customer.name}</Table.DataCell>
              <Table.DataCell>{customer.email}</Table.DataCell>
              <Table.DataCell>
                {customer.verified ? "Yes" : "No"}
              </Table.DataCell>
              <Table.DataCell>
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => toggleVerification(customer.id)}
                >
                  {customer.verified ? "Unverify" : "Verify"}
                </button>
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CustomersView;
