import React from "react";

import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className="flex justify-between items-center mb-4 border border-gray-800 w-80 p-4 rounded-lg">
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span>01.02.2023</span>
          <span className='font-light text-xl flex items-center gap-2'>
            <ShoppingBagIcon className='h-5 w-5 text-black cursor-pointer'/>
            {totalProducts}
          </span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='font-medium text-xl'>${totalPrice}</span>
          <ChevronDoubleRightIcon className='h-6 w-6 text-black cursor-pointer' />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
