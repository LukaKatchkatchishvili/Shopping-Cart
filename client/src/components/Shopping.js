import React, { useState, useEffect } from "react";
import { popularProducts } from "../data";
import { useAddedItems } from "../useContext/addedItemsContext";
import { BiCart } from "react-icons/bi";

const Shopping = () => {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const { cartedItems, setCartedItems } = useAddedItems();
  useEffect(() => {
    console.log(cartedItems);
  }, [cartedItems]);
  const handleAddCardItem = (itemId) => {
    const selectedItem = popularProducts.find((item) => item.id === itemId);
    // Ensure cartedItems.items is defined as an array and add the new item
    setCartedItems((prevCartedItems) => {
      const items = Array.isArray(prevCartedItems.items)
        ? prevCartedItems.items
        : []; // Ensure items is an array

      // Check if the item is already in cartedItems.items
      const isItemAlreadyInCart = items.some(
        (item) => item.id === selectedItem.id
      );

      // If the item is not already in the cart, add it
      if (!isItemAlreadyInCart) {
        return {
          ...prevCartedItems,
          items: [...items, selectedItem],
        };
      } else {
        // Handle the case where the item is already in the cart
        console.log("Item is already in the cart");
        return prevCartedItems; // Return the unchanged cartedItems
      }
    });
  };

  return (
    <div className="flex gap-5">
      {popularProducts.map((item) => (
        <div
          key={item.id}
          className="w-48 relative"
          onMouseEnter={() => setHoveredItemId(item.id)}
          onMouseLeave={() => setHoveredItemId(null)}
        >
          <img src={item.img} alt="img" />
          {hoveredItemId === item.id && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 opacity-90">
              <div>
                <BiCart
                  size={30}
                  className="cursor-pointer"
                  onClick={() => handleAddCardItem(item.id)}
                />
              </div>
            </div>
          )}
          <h1>{item.title}</h1>
          <h2>{item.price}$</h2>
        </div>
      ))}
    </div>
  );
};

export default Shopping;
