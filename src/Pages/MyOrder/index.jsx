import React, { useContext } from 'react'

import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";


function MyOrder() {
  const context = useContext(ShoppingCartContext)
  console.log(context.order);
  return (
    <Layout>
      My Order
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