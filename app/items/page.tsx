// app/items/page.tsx
import React from 'react';
import Link from 'next/link';

interface Item {
  _id: string;
  name: string;
  quantity: number;
}

const ItemsPage = async () => {
  const res = await fetch('http://localhost:3010/items');
  const items: Item[] = await res.json();

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <Link href={`/items/${item._id}`}>
              {item.name} - Quantity: {item.quantity}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsPage;
