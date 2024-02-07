import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  // Shopping cart counter for products
  const [count, setCount] = useState(0)

  // Toogle product detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = ()=> setIsProductDetailOpen(true)
  const closeProductDetail = ()=> setIsProductDetailOpen(false)

  // Product detail -- show product
  const [productToShow, setProductToShow] = useState({})
  
  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow
    }}>
      {children}
    </ShoppingCartContext.Provider>
    
  )
}

