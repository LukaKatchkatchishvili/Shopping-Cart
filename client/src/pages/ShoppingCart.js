import React from "react";
import { useAddedItems } from "../useContext/addedItemsContext";

const ShoppingCart = () => {
  const { cartedItems, setCartedItems } = useAddedItems();
  const cartedItemsArray = Array.isArray(cartedItems.items)
    ? cartedItems.items
    : [];

  // Function to remove an item by its ID
  const handleRemoveItem = (itemId) => {
    setCartedItems((prevCartedItems) => {
      // Filter out the item with the specified ID
      const updatedItems = prevCartedItems.items.filter(
        (item) => item.id !== itemId
      );

      return {
        ...prevCartedItems,
        items: updatedItems,
      };
    });
  };
  const fullPrice = cartedItemsArray.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <section className="flex gap-5">
      {cartedItemsArray.map((item) => (
        <div key={item.id} className="w-48">
          <img src={item.img} alt="img" />
          <h1>{item.title}</h1>
          <h2>{item.price}$</h2>
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Remove
          </button>
        </div>
      ))}
      <h1>Jami :{fullPrice}</h1>
    </section>
  );
};

export default ShoppingCart;
