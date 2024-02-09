import React from "react";

import { XMarkIcon } from "@heroicons/react/24/solid";

const OrdersCard = () => {
  const { totalPrice, totalProducts } = props

  return (
    <div className="flex justify-between items-center mb-4 border border-gray-800">
      <p>
        <span>01.02.2023</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCard;
