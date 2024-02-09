import React from "react";

import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = (props) => {
  const { id, title, imgUrl, price, handleDelete } = props

  let renderXmarkIcon
  if(handleDelete){
    renderXmarkIcon = <XMarkIcon onClick={()=> handleDelete(id)} className="h-6 w-6 text-black cursor-pointer" />
  }
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-3">
        <figure className="w-20 h-20 ">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imgUrl}
            alt={title}
          />
        </figure>
        <p className="text-md font-light">{title}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-lg font-medium">{price}</p>
        {renderXmarkIcon}
      </div>
    </div>
  );
};

export default OrderCard;
