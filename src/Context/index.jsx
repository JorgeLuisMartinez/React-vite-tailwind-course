import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  // Shopping cart counter for products
  const [count, setCount] = useState(0)

  // Shopping cart -- add products to cart
  const [cartProducts, setCartProducts] = useState([])

  // Toogle product detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = ()=> setIsProductDetailOpen(true)
  const closeProductDetail = ()=> setIsProductDetailOpen(false)

  // Toogle checkout side menu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(false)

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
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu      
    }}>
      {children}
    </ShoppingCartContext.Provider>
    
  )
}

