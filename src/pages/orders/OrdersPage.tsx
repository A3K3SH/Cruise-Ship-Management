import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { MainLayout } from '../../components/layout/MainLayout';

export const OrdersPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, checkout, orders } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [details, setDetails] = useState({ name: '', cabin: '' });

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold text-primary-800 mb-6">My Orders</h1>
        {cart.length === 0 ? (
          <p className="text-lg text-neutral-600 mb-8">Your cart is empty.</p>
        ) : (
          <>
            <table className="w-full mb-4">
              <thead>
                <tr>
                  <th className="text-left">Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={e => updateQuantity(item.id, Number(e.target.value))}
                        className="w-16 border rounded px-2"
                      />
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button onClick={() => removeFromCart(item.id)} className="text-error-600">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mb-4 font-bold">Total: ${total.toFixed(2)}</div>
            <button className="btn-primary mr-2" onClick={() => setShowCheckout(true)}>Checkout</button>
            <button className="btn-ghost" onClick={clearCart}>Clear Cart</button>
          </>
        )}

        {showCheckout && (
          <form
            className="mt-8 p-4 border rounded bg-neutral-50"
            onSubmit={e => {
              e.preventDefault();
              checkout(details);
              setShowCheckout(false);
            }}
          >
            <h2 className="text-xl font-bold mb-4">Checkout</h2>
            <input
              type="text"
              placeholder="Your Name"
              value={details.name}
              onChange={e => setDetails({ ...details, name: e.target.value })}
              className="block mb-2 p-2 border rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Cabin Number"
              value={details.cabin}
              onChange={e => setDetails({ ...details, cabin: e.target.value })}
              className="block mb-2 p-2 border rounded w-full"
              required
            />
            <button className="btn-primary mt-2" type="submit">Place Order</button>
          </form>
        )}

        <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">Order History</h2>
        {orders.length === 0 ? (
          <p className="text-neutral-600">No past orders yet.</p>
        ) : (
          <ul>
            {orders.map(order => (
              <li key={order.id} className="mb-4 border-b pb-2">
                <div className="font-semibold">Order #{order.id} — {order.date}</div>
                <div>Cabin: {order.details.cabin}, Name: {order.details.name}</div>
                <ul className="ml-4">
                  {order.items.map(i => (
                    <li key={i.id}>{i.name} x {i.quantity} — ${(i.price * i.quantity).toFixed(2)}</li>
                  ))}
                </ul>
                <div className="font-bold">Total: ${order.total.toFixed(2)}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </MainLayout>
  );
}; 