import { createContext, useState, useEffect } from 'react';

// Prueba 

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

  // Shping cart - order
  const [order, setOrder] = useState([])

  // Get Products
  const [items, setItems] = useState(null) 
  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data.slice(0, 28)))
  }, []) 

  // Filter products - search by title
  const [searchByTitle, setSearchByTitle] = useState(null) 
  const [filteredItems, setFilteredItems] = useState(null) 

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }
  useEffect(()=>{
    if (searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }
  }, [items, searchByTitle]) 

  
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
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      setFilteredItems
    }}>
      {children}
    </ShoppingCartContext.Provider>
    
  )
}

