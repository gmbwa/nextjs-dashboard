// app/items/[id]/page.tsx
import React from 'react';

interface Item {
  _id: string;
  name: string;
  quantity: number;
}

const ItemPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`http://localhost:3010/items/${params.id}`);
  const item: Item = await res.json();

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
};

export default ItemPage;
