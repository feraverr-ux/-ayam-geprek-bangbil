import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

const CartContext = createContext()

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {
    const savedCart =
      localStorage.getItem("cartItems")

    return savedCart
      ? JSON.parse(savedCart)
      : []
  })

  useEffect(() => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    )
  }, [cartItems])

  const addToCart = (item) => {

    const existingItem = cartItems.find(
      (cartItem) =>
        cartItem.name === item.name
    )

    if (existingItem) {

      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.name === item.name
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + 1,
              }
            : cartItem
        )
      )

    } else {

      setCartItems([
        ...cartItems,
        {
          ...item,
          quantity: 1,
        },
      ])
    }
  }

  const removeFromCart = (name) => {
    setCartItems(
      cartItems.filter(
        (item) => item.name !== name
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}