import { useState } from "react";
import { Order, OrderStatus } from "../../../types";
import { useForm, SubmitHandler } from "react-hook-form";
import { Table } from "~/components/ui-components";

type OrdersViewProps = {
  orders: Order[];
};

const mockOrders: Order[] = [
  {
    id: 1,
    customer: "Alice Johnson",
    total: 150.0,
    status: OrderStatus.Pending,
    items: [
      { productName: "Product A", quantity: 2, price: 50.0 },
      { productName: "Product B", quantity: 1, price: 50.0 },
    ],
  },
  {
    id: 2,
    customer: "Bob Smith",
    total: 200.0,
    status: OrderStatus.Processing,
    items: [{ productName: "Product C", quantity: 2, price: 100.0 }],
  },
  {
    id: 3,
    customer: "Charlie Brown",
    total: 300.0,
    status: OrderStatus.Completed,
    items: [{ productName: "Product D", quantity: 3, price: 100.0 }],
  },
];

const OrdersView: React.FC<OrdersViewProps> = ({ orders = mockOrders }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Order>();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [viewingOrder, setViewingOrder] = useState<Order | null>(null);

  const onSubmit: SubmitHandler<Order> = async (data) => {
    if (selectedOrder) {
      reset();
      setSelectedOrder(null);
      // Re-fetch or update the orders list here if needed
    }
  };

  const handleEditClick = (order: Order) => {
    setSelectedOrder(order);
    setValue("status", order.status);
    setValue("total", order.total);
  };

  const handleViewClick = (order: Order) => {
    setViewingOrder(order);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeadCell>Order ID</Table.HeadCell>
            <Table.HeadCell>Customer</Table.HeadCell>
            <Table.HeadCell>Total</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {orders.map((order) => (
            <Table.Row key={order.id}>
              <Table.DataCell>{order.id}</Table.DataCell>
              <Table.DataCell>{order.customer}</Table.DataCell>
              <Table.DataCell>${order.total}</Table.DataCell>
              <Table.DataCell>{order.status}</Table.DataCell>
              <Table.DataCell>
                <button
                  onClick={() => handleViewClick(order)}
                  className="text-blue-500 mr-4"
                >
                  View
                </button>
                <button
                  onClick={() => handleEditClick(order)}
                  className="text-blue-500"
                >
                  Edit
                </button>
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      {/* Order Details View */}
      {viewingOrder && (
        <div className="mt-6 p-4 border rounded shadow">
          <h3 className="text-lg font-medium mb-2">Order Details</h3>
          <p>
            <strong>Order ID:</strong> {viewingOrder.id}
          </p>
          <p>
            <strong>Customer:</strong> {viewingOrder.customer}
          </p>
          <p>
            <strong>Total:</strong> ${viewingOrder.total}
          </p>
          <p>
            <strong>Status:</strong> {viewingOrder.status}
          </p>
          <p>
            <strong>Items:</strong>
          </p>
          <ul className="list-disc ml-5">
            {viewingOrder?.items.map((product) => (
              <li key={product.productName}>
                {product.productName} - ${product.price}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setViewingOrder(null)}
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      )}

      {/* Edit Order Form */}
      {selectedOrder && (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <h3 className="text-lg font-medium">Edit Order</h3>

          <label className="block mt-2">
            Status
            <select
              {...register("status", { required: true })}
              className="border border-gray-300 rounded mt-1 p-2 w-full"
            >
              {Object.values(OrderStatus).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            {errors.status && (
              <span className="text-red-500">Status is required</span>
            )}
          </label>

          <label className="block mt-2">
            Total
            <input
              type="number"
              step="0.01"
              {...register("total", { required: true, min: 0 })}
              className="border border-gray-300 rounded mt-1 p-2 w-full"
            />
            {errors.total && (
              <span className="text-red-500">Total is required</span>
            )}
          </label>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default OrdersView;
