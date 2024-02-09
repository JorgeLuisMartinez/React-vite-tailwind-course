import React, { useContext } from 'react'
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";


function MyOrder() {
  const context = useContext(ShoppingCartContext)
  console.log(context.order);
  return (
    <Layout>
      <div className='flex w-80 items-center justify-center relative mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronDoubleLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          context.order?.slice(-1)[0].products.map(product => (
            <OrderCard 
              title={product.title}
              imgUrl={product.images}
              price={product.price}
              key={product.id}
              id={product.id}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder