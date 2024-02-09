import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { TotalPrice } from '../../Utils/index';
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }
  const handleCheckout = () => {
    const orderToAdd = {
      date: '',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: TotalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.closeCheckoutSideMenu()
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {
          context.cartProducts.map(product => (
            <OrderCard 
              title={product.title}
              imgUrl={product.images}
              price={product.price}
              key={product.id}
              id={product.id}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className='px-6 py-6'>
        <p className='flex justify-between items-center'>
          <span className='font-light text-xl'>Total:</span>
          <span className='font-medium text-xl'>${TotalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className="w-full bg-green-500 py-3 mt-2 text-white rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
