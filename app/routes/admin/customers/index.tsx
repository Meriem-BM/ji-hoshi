// CustomersView.tsx
import { useState } from "react";
import { Customer } from "~/types";

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
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Verified</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{customer.name}</td>
              <td className="px-4 py-2 border-b">{customer.email}</td>
              <td className="px-4 py-2 border-b">
                {customer.verified ? "Yes" : "No"}
              </td>
              <td className="px-4 py-2 border-b">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => toggleVerification(customer.id)}
                >
                  {customer.verified ? "Unverify" : "Verify"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersView;
